import React from 'react'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='unsorted_list'>
                <li><a href="/">Home</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Shop">Shop</a></li>
            </ul>
        </nav>
    )
}