import styled from "styled-components";
import ImgBg from "../../images/pizza.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(41 22 13 / 60%),
      rgba(41 22 13 / 60%)
    ),
    url(${ImgBg});

  height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  box-shadow: 3px 3px #e9ba23;
  letter-spacing: 3px;
  padding-right: 10px;
`;

export const HeroP = styled.p`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s easy-out;
    cursor: pointer;
    color: #000;
  }
`;
