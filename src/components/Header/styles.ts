import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
  responsive: boolean;
}

const activeClassName = 'nav-item-active';

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};

    display: flex;
    align-items: center;
    justify-content: space-between;
    ${props =>
      props.responsive &&
      css`
        padding: 0 20px;
      `}
    p {
      color: #ffffff;
    }
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const Link = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    border-bottom: 1px solid #ff872c;
  }
`;
