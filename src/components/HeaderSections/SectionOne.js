import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketDropdown from '../HeaderDropdowns/BasketDropdown';
import { useState } from 'react';

function SectionOne() {
    const [basketDropdownStatus,setBasketDropdownStatus]=useState(false);
  return (
        <Container>
            <LeftContent>
                LOGO
            </LeftContent>
            <MiddleContent>
                <SearchBox>
                    <input/>
                    <SearchButton className='searchBtn'>
                        <SearchIcon className='icon' sx={{color:'#FFF7E9'}} fontSize="large" />
                    </SearchButton>       
                </SearchBox>
            </MiddleContent>
            <RightContent>
                <Deliver>
                    <LocationOnIcon className='icon' sx={{color:'white',fontSize:'36px'}}/>
                    <div>
                        <span className='title'>ADDRESS</span>
                        <span className='subTitle'>YOUR ADRESS</span>
                    </div>           
                </Deliver>
                
                <UserProfile>
                    <PersonIcon sx={{color:'white',fontSize:'36px'}} className='icon'/>
                    <div>
                        <span className='title'>MY ACCOUNT</span>
                        <span className='subTitle'>NAME</span>
                    </div>
                    
                </UserProfile>
                <Basket onMouseLeave={()=>setBasketDropdownStatus(false)} onMouseEnter={()=>setBasketDropdownStatus(true)}>
                    <div className='iconContainer'>
                        <ShoppingBasketIcon sx={{color:'white',fontSize:'50px'}} className='icon'/>
                        <span className='count'>10</span>
                    </div>
                    {basketDropdownStatus && (
                        <BasketDropdown/>
                    )}
                    
                </Basket>
            </RightContent>
        </Container>
  )
}

export default SectionOne



const Container=styled.div`
    background-color:#023047;
    width:100%;
    height:70px;
    display:flex;
    align-items:center;
    padding:0 200px;
`

const LeftContent=styled.div`
    height:100%;
    display:flex;
    align-items:center;
    color:white;
    font-weight:bold;
    font-size:32px;
    margin-right:50px;
`

const MiddleContent=styled.div`
    height:100%;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

const RightContent=styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    height:100%;
    width:30vw;
`

const SearchBox=styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:40px;
    margin-right:20px;
    input{
        width:100%;
        height:100%;
        padding:0;
        border:0 solid;
        border-radius:5px 0 0 5px;
        text-indent:12px;
        padding-right:10px;
        font-size:16px;
        &:focus{
            outline:none;
            border:2px solid #FF8900; 
        }

    }
    
    

`

const Deliver=styled.div`
    margin-left:15px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #FFF7E9;
    border-radius:8px;
    width:150px;
    height:60px;
    cursor:pointer;
    transition:all 250ms;
    &:hover{
        border-color:#FF8900;

        .icon{
            color:#FF8900;
        }

        .title{
            color:#FF8900;
        }
    }
    div{
        margin-left:5px;
        display:flex;
        flex-direction:column;
        
        .title{
            color:white;
            font-size:14px;
            transition:all 250ms;
        }
        .subTitle{
            color:gray;
            font-size:12px;
        }
    }
    .icon{
        transition:all 250ms;
    }
    
`

const UserProfile=styled(Deliver)`

`

const Basket=styled.div`
    margin-left:15px;
    width:150px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:2px solid #FFF7E9;
    border-radius:8px;
    transition:all 250ms;
    cursor:pointer;
    position:relative;
    
    .icon{
        transition:all 250ms;
    }

    &:hover{
        border-color:#FF8900;
        .icon{
            color:#FF8900;
        }
    }

    .iconContainer{
        position:relative;
    }
    .count{
        position:absolute;
        color:white;
        background-color:#FF731D;
        padding:4px 4px;
        border-radius:50%;
        right:-5px;
        bottom:-5px;
    }
`

const SearchButton=styled.div`
    width:50px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#FF8900;
    border-radius:0 5px 5px 0;
    cursor:pointer;
    transition:all 250ms;

    &:hover{
        background-color:#FFF7E9;
        .icon{
            color:#FF8900;
        }
    }

    .icon{
        transition:all 250ms;
    }
`