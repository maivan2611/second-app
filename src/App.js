import Header from './components/Header';
import { useState } from 'react';
import './components/Web.css';
import Body from './components/Body';
import Footer from './components/Footer';
import TopHeader from './components/Top';

function App() {
  console.log('object');
  // const [color, setColor] = useState('red');
  return (
    <div className='App'>
      <TopHeader />
      <Header />
      <Body />
      <Footer />
      
    </div>
  );
}

export default App;
