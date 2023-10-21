import React from 'react';

import {A} from 'hookrouter';

function Nav() {
    return(
        <div>
            <nav>
                <ul className='nav-links'>
                    <A className='Home' href='/'>
                        <li>Home</li>
                    </A>
                    <A className='Contact' href='/contact'>
                        <li>Contact</li>
                    </A>
                    <A className='Resume' href='/resume'>
                        <li>Resume</li>
                    </A>
                    <A className='Portfolio' href='/portfolio'>
                        <li>Portfolio</li>
                    </A>
                </ul>
            </nav>
        </div>
    )
}


export default Nav;