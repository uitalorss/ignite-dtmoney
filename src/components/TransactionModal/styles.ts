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
`

export const ButtonModal = styled.button`
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
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  span{
    display: inline-block;
    margin-left: 0.5rem;
  }
`

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3rem;
    margin: 1rem 0;
    background: ${(props) => { return props.isActive ? '#d7d7d4' : ''}};

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    
    color: var(--text-title);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;
    &:hover{
      border: 1px solid #d7d7d3;
    }
`