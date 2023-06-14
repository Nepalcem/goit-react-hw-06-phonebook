import styled from 'styled-components';

export const ContactsStyled = styled.ul`
  display: flex;
  flex-direction: column;

  
  & .item {
    width: 320px;
    padding: 10px 20px;
    margin-bottom: 15px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    transition: box-shadow 0.25s ease-in-out;
    background-color: white;
  }
  & .item:hover .name {
    animation: tilt-shaking 0.25s infinite;
  }
  & .item:hover {
    box-shadow: 0 1px 6px rgba(81, 203, 238, 0.6);
  }

  @keyframes tilt-shaking {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0eg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  & button {
    background-color: #EE4B2B;
    color: white;
    padding: 0px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 24px;
  }
`;
