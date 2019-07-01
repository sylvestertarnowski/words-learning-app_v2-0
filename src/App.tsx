import React from 'react';
import './App.css';
import { MyProvider } from './components/Context';
import Main from './components/Main';

const App: React.FC<any> = () => {
  return (
    <MyProvider>
      <Main />
    </MyProvider>
  );
}

export default App;
