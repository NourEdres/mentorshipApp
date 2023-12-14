import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInScreen from './SignInScreen';
import { UserProvider } from './UserContext';

import LobbyPage from './LobbyPage';
import CodeBlockPage from './CodeBlockPage';
import NewCodeBlock from './NewCodeBlock';


function App() {
  return (

    <div className="App">
          <UserProvider>
              <Router>
      <Routes>
      <Route exact path="/" element={<SignInScreen />} />
        <Route path="/mentor" element={<LobbyPage />} />
        <Route path="/mentee" element={<LobbyPage />} />

        
        <Route path="/codeblock/:id" element={<CodeBlockPage />} />
        <Route path="/codeblock/:id" element={<CodeBlockPage />} />

        <Route path="/codeblock/new" element={<NewCodeBlock />} />

      </Routes>
    </Router>
    </UserProvider>
  
     </div>
  );
}

export default App;
