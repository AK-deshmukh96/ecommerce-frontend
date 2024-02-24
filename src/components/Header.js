import React from 'react'

const Header = (props) => {
    
  return (
    <header>
        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
       
      </header>
  )
}

export default Header