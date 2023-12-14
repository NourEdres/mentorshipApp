import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from './UserContext';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import io from 'socket.io-client';

const CodeBlockPage = () => {
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [correctCode, setCorrectCode] = useState('');
    const [error, setError] = useState(null);
    const [isTyping, setIsTyping] = useState(false); // State for typing indicator
    const { user } = useUser();
    const { id } = useParams();
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('https://mentorship-app.onrender.com');
        setSocket(newSocket);

        const fetchCodeBlock = async () => {
            try {
                const response = await fetch(`https://mentorship-app.onrender.com/api/codeblocks/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCode(data.code);
                setTitle(data.title);
                setCorrectCode(data.correctCode);
            } catch (error) {
                setError(error);
            }
        };
        fetchCodeBlock();

        newSocket.on('codeUpdated', (updatedCode) => {
            setCode(updatedCode);
        });

        newSocket.on('typing', () => {
            setIsTyping(true);
            setTimeout(() => setIsTyping(false), 2000);
        });

        return () => {
            newSocket.off('codeUpdated');
            newSocket.off('typing');
            newSocket.disconnect();
        };
    }, [id]);

    const handleSave = async () => {
        if (user.role !== 'Mentor') {
            try {
                const response = await fetch(`https://mentorship-app.onrender.com/api/codeblocks/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, code }),
                });
    
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                console.log('Code block updated successfully');
                
                if (socket && socket.connected) {
                    socket.emit('updateCode', { code });
                }
                checkCorrectCode();
            } catch (error) {
                console.error('Error updating code block:', error);
                setError(error.message);
            }
        }
    };

    const checkCorrectCode = async () => {
        const celebrationSpan = document.querySelector('.material-symbols-outlined');
        if (code === correctCode) {
            if (!celebrationSpan) {
                const newSpan = document.createElement('span');
                newSpan.classList.add('material-symbols-outlined');
                newSpan.textContent = "celebration";
                document.body.appendChild(newSpan);
                setTimeout(() => {
                    newSpan.remove();
                }, 2000);
            }
           
        } else {
            if (celebrationSpan) {
                celebrationSpan.remove();
            }
        }
    };
    

    const handleCodeChange = (e) => {
        const updatedCode = e.target.value;
        setCode(updatedCode);
        if (user.role !== 'Mentor') {
            socket.emit('typing');
            socket.emit('updateCode', { code: updatedCode });
        }
    };

    if (error) return <p>Error loading code block.</p>;

    return (
        <div>
            <h2>Code Block</h2>
            <h4>{title}</h4>
            {user.role === 'Mentor' ? (
                <div>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {code}
                    </SyntaxHighlighter>
                    {isTyping && <p>The mentee is typing...</p>}
                </div>
            ) : (
                <div>
                    <textarea rows="10" cols="50" value={code} onChange={handleCodeChange} />
                    <br />
                    <button onClick={handleSave}>Save Changes</button>
                </div>
            )}
        </div>
    );
};

export default CodeBlockPage;
