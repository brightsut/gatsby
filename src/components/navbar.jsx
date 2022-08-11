import React from 'react'
import { Link } from 'gatsby'

export default function(){
    return <>
        <Link to="/"> Home </Link>
        {'|'}
        <Link to="/contact"> contact </Link>
        {'|'}
        <Link to="/about"> about </Link>
    </>
}