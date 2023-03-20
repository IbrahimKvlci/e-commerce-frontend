import React from 'react'
import SectionOne from './HeaderSections/SectionOne'
import SectionTwo from './HeaderSections/SectionTwo'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <SectionOne/>
        <SectionTwo/>
    </Container>
  )
}

export default Header

const Container=styled.div`
    width:100vw;
    height:120px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`