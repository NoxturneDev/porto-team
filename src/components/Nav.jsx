import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="container flex justify-center items-center">
            <ul className='flex justify-center items-center w-full bg-slate-700 h-12'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
            </ul>
        </div>
    )
}

export default Nav