import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import './SignInScreen.css';

const SignInScreen = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleSignIn = (userRole, userName) => {
        setUser({ role: userRole, name: userName });

        // Navigate based on user role
        if (userRole === 'Mentor') {
            navigate('/mentor');
        } else if (userRole === 'Mentee') {
            navigate('/mentee');
        }
    };

    return (
        <div className="sign-in-container">
            <div className="card" onClick={() => handleSignIn('Mentor', 'Tom')}>
            <span className="material-symbols-outlined">
clinical_notes
</span>        
                <h2>Tom</h2>
                <p>Mentor</p>
            </div>
            <div className="card" onClick={() => handleSignIn('Mentee', 'Josh')}>
            <span className="material-symbols-outlined">
person_raised_hand
</span>
                <h2>Josh</h2>
                <p>Mentee</p>
            </div>
        </div>
    );
};

export default SignInScreen;
