import React from 'react';
import './App.css';
import { MyProvider } from './components/Context';
import NavBar from './components/NavBar';

const App: React.FC<any> = () => {
  return (
    <MyProvider>
      <NavBar />
    </MyProvider>
  );
}

export default App;
