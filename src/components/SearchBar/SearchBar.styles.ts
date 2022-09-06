import styled from 'styled-components'

export const SearchArea = styled.div`
  ${({ theme }) => `
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: start;
   align-items: start;
   padding: 10px 10px 10px 10px;
   color:${theme.color.secondary};
   .input-search{
    width: 40%;
    margin-top: 10px;
    border: 1px solid ${theme.color.secondary};
    padding: 10px;
    margin-right: 10px;
   }
   .button-filter{
    width: 30px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: ${theme.color.primary};
   }
   .button-search{
    height: 30px;
    width: 80px;
    background-color: ${theme.color.tertiary};
    color:${theme.color.secondary};
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 10px;
   }
   .top{
    display: flex;
    flex-direction: row;
    width: 100% ;
    padding: 10px 10px 10px 10px;
    justify-content: start;
    align-content: center;
    align-items: center;
   }
  `}
`

export const Checkbox = styled.div`
  ${({ theme }) => `
   display: flex;
   flex-direction: row;
   font-size: 0.7rem;
   padding: 10px 10px 10px 10px;
   margin-left: 2px;
   p {
    color: ${theme.color.darkGray};
   }
  `}
`