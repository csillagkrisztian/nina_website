import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ABOUT_ME, GRAPHIC_DESIGN, ILLUSTRATIONS } from '../routes'

export default function HomePage() {
    return (
        <>
        <h1>Nina's Website</h1>
        <Link to={`/work/${ILLUSTRATIONS}`}>
            <Button>Illustrations</Button>
        </Link>
        <Link to={`/work/${GRAPHIC_DESIGN}`}>
            <Button>Graphic Design</Button>
        </Link>
        <Link to={`/${ABOUT_ME}`}>
            <Button>About Me</Button>
        </Link>

        </>
    )
}
