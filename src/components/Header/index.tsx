import React from 'react';

import { Container, Link } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  responsive: boolean;
}

const date = new Date().toLocaleDateString('pt-br');

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  responsive = true,
}: HeaderProps) => (
  <Container size={size} responsive={responsive}>
    <header>
      <img src={Logo} alt="GoFinances" />
      {size === 'large' ? (
        <nav>
          <Link exact to="/">
            Listagem
          </Link>
          <Link exact to="/import">
            Importar
          </Link>
        </nav>
      ) : (
        <p>{date}</p>
      )}
    </header>
  </Container>
);

export default Header;
