import React from 'react'
import Link from 'found/lib/Link';
import Navigation from './Navigation'

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "black"
  }

  return (
    <div>
      <Link to="/" style={linkStyle}>
        <h2>Welcome to React</h2>
      </Link>
      <Navigation />
    </div>
  )
}
