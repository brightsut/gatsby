import React from 'react'
import { Link } from 'gatsby'

export default function(){
    return <>
        <Link to="/"> student </Link>
        {'|'}
        <Link to="/subject"> subject </Link>
        {'|'}
        <Link to="/table"> table </Link> 
    </>
}