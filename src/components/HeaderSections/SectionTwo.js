import React from 'react'
import styled from 'styled-components'
import CategoryDropdownMenu from '../HeaderDropdowns/CategoryDropdownMenu';
import { useState } from 'react'

function SectionTwo() {
  const [dropdownStatus,setDropdownStatus]=useState(false);


  return (

    <Container>
        <Category onMouseLeave={()=>setDropdownStatus(false)} onMouseEnter={()=>setDropdownStatus(true)}>
          <span>
            Category
          </span>
          {dropdownStatus && (
            <CategoryDropdownMenu/>
          )}
        </Category>
        
    </Container>
      
      

    
    
  )
}

export default SectionTwo

const Container=styled.div`
    height:50px;
    width:100%;
    padding:0 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
`


const Category=styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    cursor:pointer;
    transition:color 250ms;
    
    &:hover{
        border-bottom:2px solid #FF731D;
        color:#FF731D;
        
    }
`