import styled from "styled-components";


export const Container = styled.form`
  h2 {
    font-size: 1.5rem
  }

  input {
    width: 100%;
    background: #E7E9EE;
    border: 1px solid #D7D7D7;
    padding: 0 1.5rem;
    height: 3rem;
    outline: none;
    &::placeholder{
      font-weight: 400;
      color: var(--text-body)
    }
    & + input {
    margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    height: 3rem;
    color: var(--shape-principal);
    font-weight: 600;
    background: var(--green);
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    border: none;
    transition: 0.3s;
    &:hover {
      filter: brightness(0.9)
    }
  }

`