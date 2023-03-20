import React from "react";
import styled from "styled-components";

function CategoryDropdownMenu() {
  return (
    <Container>
      <Category>
          <Title>Category Title</Title>
          <SubTitles>
            <Subtitle>Category subtitle</Subtitle>
            <Subtitle>Category subtitle</Subtitle>
            <Subtitle>Category subtitle</Subtitle>
            <Subtitle>Category subtitle</Subtitle>
            <Subtitle>Category subtitle</Subtitle>
          </SubTitles>
        </Category>

    </Container>
  );
}

export default CategoryDropdownMenu;

const Container = styled.div`
  left: 0;
  top: 50px;
  right: 0;
  min-height: 300px;
  position: absolute;
  background-color: white;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr;
  justify-content:space-between;
  padding: 10px 15px;
  cursor:default;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: fadeIn 250ms ease-in-out;
`;

const Category = styled.div`
  margin-bottom:10px;
  border-right:1px solid #EEEEEE;
  flex:1;
`;

const Title = styled.div`
  margin-bottom:5px;
  font-weight:500;
  color:#FF731D;
  text-align:center;
  padding:6px 2px;
  border-bottom:1px solid #EEEEEE;
  font-size:18px;
  cursor:pointer;
`;

const Subtitle = styled.div`
  padding:3px 2px;
  color:gray;
  font-size:14px;
  cursor:pointer;
  transition:all 250ms;

  &:hover{
    color:#FF731D;
  }
`;

const SubTitles = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;


