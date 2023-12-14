import React, { useState } from 'react';

export default function NewCodeBlock() {
    const [title, setTitle] = useState('');
    const [correctCode, setCorrectCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCodeBlock = { title, correctCode };

        fetch('https://mentorshipapp.onrender.com/api/codeblocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Allow': "GET, POST, PUT, DELETE, OPTIONS",
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(newCodeBlock),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success - maybe clear form or show a success message
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error - maybe show an error message
        });
    };

    return (
        <div>
            <h2>New Code Block</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br/>
                <label htmlFor="correctCode">Code:</label>
                <textarea
                    id="correctCode"
                    rows="20"
                     cols="100"
                    value={correctCode}
                    onChange={(e) => setCorrectCode(e.target.value)}   
                />           
                                    <br />
 
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
