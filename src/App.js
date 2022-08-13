import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Subweb from './components/Subweb';
import Main from './components/Main';
import './components/Web.css';
import './index.css';

function App() {
  // const [color, setColor] = useState('red');
  return (
    <div className='App'>
      <div className='text-3xl font-bold underline'>Hello world!</div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chinh-sach-si' element={<Subweb />} />
      </Routes>
    </div>
  );
}

export default App;
