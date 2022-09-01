import React from 'react'
import { Container } from '../Container'
import Paragraph from '../Paragraph'
import { Link } from 'react-router-dom'

function ProjectDesc({ title, url, desc, align = "left" }) {
    return (
        <Container custom="h-4/4 text-slate-200" dir="column" align={align}>
            <h2 className="header-sm text-slate-200">
                {title}
            </h2>
            <div className='my-5'>
                <Paragraph align={align}>
                    {desc}
                </Paragraph>
            </div>
            <div className='my-5 text-xl'>
                <Link to={url}>View Project</Link>
            </div>
        </Container>
    )
}

export default ProjectDesc