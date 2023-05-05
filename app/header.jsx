import Link from 'next/link';
import React from 'react'
import { LogoutBtn } from './components/Clients';

const Header = () => {
    return (
        <div className='navbar navbar-dark bg-dark px-5'>
            <h2>Todo</h2>
            <article>
                <Link className='mx-4' href={"/"}>Home</Link>
                <Link className='mx-4' href={"/about"}>About</Link>
                <LogoutBtn />
            </article>
        </div>
    )
}

export default Header;
