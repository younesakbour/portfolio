import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
    render(){
        return (
            <div className="fixed bottom-0 w-full py-8 md:py-4 px-16">
                <Nav />
            </div>
            );
    }
}

export default Header;