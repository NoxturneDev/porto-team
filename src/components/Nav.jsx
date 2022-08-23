import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Nav() {
    return (
        <div className="flex justify-center items-center w-screen bg-slate-800">
            <motion.div className='bg-teal-400 w-screen'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ul className='flex justify-center items-center w-full h-12'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                </ul>
            </motion.div>

        </div>
    )
}

export default Nav