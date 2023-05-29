import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="logo">
            <Link href="/">Next version 13</Link>
            </div>
            <div className="links">
                <Link href="/about">About us</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
    </div>
  )
}

export default Header