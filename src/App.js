import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Subweb from './components/Subweb';
import Main from './components/Main';
import './components/Web.css';
import './index.css';
import Detail from './components/Detail'
import Contact from './components/Contact';
function App() {
  // const [color, setColor] = useState('red');
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chinh-sach-si' element={<Subweb />} />
        <Route path='/Lien-he' element={<Contact />} />
        <Route path='/san-pham/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
