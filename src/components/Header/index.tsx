import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

//Interface para poder trabalhar com as props
interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({onOpenTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo-dtmoney" />
        <button type='button' onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content> 
    </Container>
  )
}