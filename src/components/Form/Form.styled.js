import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 20px;

  & .form__inputs {
    display: flex;
    gap: 15px;
    align-items: baseline;
    flex-direction: column;
  }
  & .form__inputs p {
    display: inline-block;
    margin-right: 10px;
  }
  & .form__inputs input {
    max-width: 150px;
    transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  & .form__inputs input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }

  & .form__inputs button {
    background-color: rgb(81, 203, 238);
    color: white;
    padding: 0px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 30px;
    display: flex;
    align-items: center;
    gap:10px;
  }
  & .form__inputs button:hover {
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
`;
