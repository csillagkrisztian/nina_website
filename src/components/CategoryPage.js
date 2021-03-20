import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
    const { category } = useParams();
    return (
        <div>
            <p>{category}</p>
        </div>
    )
}
