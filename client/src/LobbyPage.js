import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LobbyPage.css';
import { useUser } from './UserContext'; 

const LobbyPage = () => {
    const [codeBlocks, setCodeBlocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mentorshipapp.onrender.com/api/codeblocks');
                const data = await response.json();
                const formattedBlocks = data.map(block => ({
                    ...block,
                    createdAt: new Date(block.createdAt).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    }), 
                    updatedAt: new Date(block.updatedAt).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    })
                }));
                setCodeBlocks(formattedBlocks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleBlockClick = blockId => navigate(`/codeblock/${blockId}`);

    const renderCard = (block) => (
        <div key={block._id} className="card" onClick={() => handleBlockClick(block._id)}>
            <h3>{block.title}</h3>
            <p>Created at: {block.createdAt}</p>
            <p>Last update: {block.updatedAt}</p>


        </div>
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading code blocks.</p>;

    return (
        <div>
            <span>Welcome, {user.name}!</span>
            <h1>Choose Code Block</h1>
            <div className="cards-container">
                {codeBlocks.map(renderCard)}
            </div>
            {user.role === 'Mentor' && (
                <div className="add-code-block">
                    <button onClick={() => navigate('/codeblock/new')}>Add Code Block</button>
                </div>
            )}
        </div>
    );
};

export default LobbyPage;
