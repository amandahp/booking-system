import styled from 'styled-components'

export const Bg = styled.div`
  ${({ theme }) => `
   background-color: rgba(0, 0, 0, 0.2);
   width: 100vw;
   height: 100vh;
   z-index: 0;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   position: absolute;
   
  `}
`

export const Centered = styled.div`
  ${({ theme }) => `
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
  `}
`


export const Modal = styled.div`
  ${({ theme }) => `
  width: 70vw;
  height: 70vh;
  background: white;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  h5{
   color: ${theme.color.tertiary};
   font-size: 1.5rem;
  }
  form {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   width: 40vw ;
  }
  input{
   padding: 10px;
   width: 30vw;
   margin: 10px 10px 10px 10px;
  }
  
  .date input {

  }

  .checkbox{
   margin: .4rem;
  }
  textarea{
   resize: none;
   width: 30vw;
   height: 40px ;
  }
  button {
   width: 100px;
   background-color: ${theme.color.tertiary};
   color: ${theme.color.primary};
  
  }
  .cancel{
   background-color: ${theme.color.secondary};
  }
  `}`