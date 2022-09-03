import React from 'react'
import Header from './Header';
import './Web.css';
import Body from './Body';
import Footer from './Footer';
import TopHeader from './Top';
import Button from './Button';
import Login from './Login';
import Contact from './Contact';
import Detail from './Detail';

function Main() {
    return (
        <div>
            <div className="mx-auto">
                <TopHeader />
                <Header />
                <Body></Body>
                
                <Footer />
                <Button />
            </div>
        </div >
    );
}
export default Main