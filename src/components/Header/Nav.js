import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {navItem: [
            {nom: "HOME", link: "/", svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>},
            {nom: "ABOUT", link: "/about", svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>},
            {nom: "PROJECTS", link: "/projects", svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>},
            {nom: "CONTACT", link: "/contact", svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>},
        ]}
    }
    
    render() {
        return (
            <>
            <nav>
                
                <ul className="flex space-x-6 justify-center">
                    {this.state.navItem.map((el, key)=>
                    <li key={key} className="transition duration-700 ease-in-out border-b-2 border-violet-500 border-opacity-0 hover:border-opacity-100 pb-1">
                        <NavLink className="text-gray-50 hover:text-violet-500 text-sm tracking-widest" to={el.link}>
                            <div className='flex flex-col items-center space-y-2'>
                                {el.svg}
                                <p>{el.nom}</p>
                            </div>
                        </NavLink>
                    </li>)}
                </ul>
            </nav>
            <Outlet />
            </>
        )
    }
}

export default Nav;