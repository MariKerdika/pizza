import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  background: #150f0f;
  color: #fff;
  padding: 10rem 0;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 5rem;
  }
`;

export const ProductImg = styled.img`
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  height: 200px;
  object-fit: cover;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2 rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1px;
  line-height: 1;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.5s;

  &:hover {
    background: #ffc500;
    transition: 0.5s;
    cursor: pointer;
    color: #000;
  }
`;
