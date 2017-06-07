import React from 'react'
import Link from 'found/lib/Link';

export default function Navigation() {
  const style = {
    container: {
      paddingBottom: "10px",
    },
    li: {
      display: "inline-flex",
      marginRight: "10px"
    },
    a: {
      textDecoration: "none",
      color: "black"
    }
  }

  function LinkItem(props) {
    // TODO: Remove the pragma once evcohen/eslint-plugin-jsx-a11y#81 ships.
    return (
      <li style={style.li}>
        <Link // eslint-disable-line jsx-a11y/anchor-has-content
          {...props}
          activeStyle={{ fontWeight: 'bold' }}
          style={style.a}
        />
      </li>
    );
  }

  return (
    <nav style={style.container}>
      <ul>
        <LinkItem to="/">
          Home
        </LinkItem>
        <LinkItem to="/about">
          About
        </LinkItem>
        <LinkItem to="/counter">
          Counter
        </LinkItem>
      </ul>
    </nav>
  )
}
