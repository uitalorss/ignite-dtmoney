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



//Interface criada para receber a propriedade que verificará se o botão está ativo ou não e a cor que ele receberá.
interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

//essa variável recebe nomes de cores e atribui ao hexadecimal desejado. No background, que é onde eu quero que essas cores apareçam, eu chamo essa variável e como parâmetro ela recebe uma das duas cores que essa variável tem os hexadecimais.
const colors = {
  green: '#33cc9595',
  red: '#e52e4d95'
}

// Botões do TransactionTypeContainer foram extraídos para virar outro componente, afim de receber props.
export const RadioBox = styled.button<RadioBoxProps>` //no TypeScript é necessário mudar o generics para habilitar a interface criada.
    height: 3rem;
    margin: 1rem 0;
    background: ${(props) => { return props.isActive ? colors[props.activeColor] : ''}}; //Fazendo a mágica da troca de cores do botão acontecer.

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