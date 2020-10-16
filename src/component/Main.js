import React from 'react'
import { useParams } from 'react-router-dom'

function Main() {
    const { name, lastname } = useParams()

    return (
        <div>
            Main {name} {lastname}
        </div>
    )
}

export default Main
