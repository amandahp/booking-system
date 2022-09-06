import styled from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => `
    background-color: ${theme.color.secondary};
    height: 90px;
    width: 100vw;
    padding: 20px;
    display: flex;
    align-items: center;
    color: ${theme.color.tertiary};
    img {
     width: 30px;
     height: 30px;
     margin-right: 10px;
    }
  `}
`