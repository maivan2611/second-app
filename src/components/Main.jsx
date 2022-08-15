import React from 'react'
import Header from './Header';
import './Web.css';
import Body from './Body';
import Footer from './Footer';
import TopHeader from './Top';
import Button from './Button';

function Main() {
    return (
        <div>
            
            <TopHeader />
            <Header />
            <Body />
            <Footer />
            <Button />
            
        </div>
    );
}
export default Main