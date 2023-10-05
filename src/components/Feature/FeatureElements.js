import styled from "styled-components";
import Bg from "../../images/yellow.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(41 22 13 / 90%),
      rgba(41 22 13 / 90%)
    ),
    url(${Bg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
