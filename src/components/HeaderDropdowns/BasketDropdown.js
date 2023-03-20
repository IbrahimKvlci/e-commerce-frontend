import React from "react";
import styled from "styled-components";

function BasketDropdown() {
  return (
    <Container>
      <ProductContainer>
        <Product>
          <ProductImage>
            <img src="/Images/noImage.jpg" />
          </ProductImage>
          <ProductDetails>
            <div>
              <ProductTitle>
                Brand sdfasfasf asdfasdf sssss ssssssssssssssssss ssssssaaaaaaa
                asdfasdfasdf asdf sadfas dfas
              </ProductTitle>
              <ProductSubtitle>
                ProductSubtitl esadffffffsadfas dfsadfsaf asdfasd sadfasdf asdf sad
              </ProductSubtitle>
            </div>
            <ProductPrice>999TL</ProductPrice>
          </ProductDetails>
        </Product>
      </ProductContainer>
    </Container>
  );
}

export default BasketDropdown;

const Container = styled.div`
  position: absolute;
  top: 55px;
  z-index: 1;
  right: 0;
`;

const ProductContainer = styled.div`
  margin-top: 15px;
  background: white;
  border-radius: 6px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const Product = styled.div`
  display: flex;
  width: 300px;
  padding: 10px 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  margin-right: 10px;
`;

const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  max-width: 170px;
  max-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductSubtitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #73777b;
  max-width: 170px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 36px;
`;

const ProductPrice = styled.div`
  font-weight: 500;
  color: #dc5f00;
`;
