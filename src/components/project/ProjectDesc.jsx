import React from 'react'
import { Container } from '../Container'
import Paragraph from '../Paragraph'
import { Link } from 'react-router-dom'

function ProjectDesc({ title, url, desc }) {
    return (
        <Container custom="h-4/4 text-slate-200" dir="column" align="left">
            <h2 className="font-semi-bold text-4xl mb-4 ">
                {title}
            </h2>

            {desc.map((p, i) => {
               return <Paragraph custom="text-xl mb-2" key={i}>
                    {p}
                </Paragraph>
            })}

            <div className='my-10 text-xl'>
                <Link to={url}>View Project</Link>
            </div>
        </Container>
    )
}

export default ProjectDesc