import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginPage from './Login';
import SignupPage from './SignUpPage';
import About from './About';

function App() {
	return (
		<React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/SignupPage" element={<SignupPage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
			
		</React.Fragment>
	);
}

export default App;