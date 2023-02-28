import React from 'react'
import styled from 'styled-components'

const NavbarCont = styled.div`
  position: relative;
  height: 90px;
  width: 100vw;
  background-color: yellow
  justify-content: center;
  align-items: center;
`
const Comps = styled.div`
  margin: auto 7.5rem;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// const Logo = styled.img`
//   height: 50%;
//   background-color: transparent;
//   cursor: pointer;
// `

const Logo = styled.div`
  height: 50%;
  background-color: transparent;
  cursor: pointer;
`



export default function Navbar() {
  return (
    <NavbarCont>
      <Comps>
        <Logo onClick={()=> router.push("/")}>Logo</Logo>
        <Logo>Home</Logo>
        <Logo>About</Logo>
      </Comps>
    </NavbarCont>
  )
}

