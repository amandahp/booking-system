import styled from 'styled-components'

export const Table = styled.table`
  ${({ theme }) => `
     width: 100%;
     padding: 10px 50px 10px 50px;
     margin: 20px 0px 20px 0px;
     color: ${theme.color.primary};
     table, th, td {
      border: 1px solid ${theme.color.secondary};
     }
     tr{
      height: 50px;
     }
     tr:first-child  {
      background-color: ${theme.color.darkGray};
     }
  `}
`