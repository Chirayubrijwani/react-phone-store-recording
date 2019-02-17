import styled  from 'styled-components';






export const ButtonContainer = styled.button`
  color: palevioletred;
  font-size: 1.4rem;
  background:transparent;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0.05rem solid var(--lightBlue);
  border-color:${props =>(props.cart ? "var(--mainYellow)" :"var(--lightBlue)")};
  color:${props =>props.cart ? "var(--mainYellow)" :"var(--lightBlue)"};
  padding:0.2rem 0.5rem;
  cursor:pointer;
  border-radius: 0.5rem;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover{
      background:${prop => prop.cart ?"var(--mainYellow)":"var(--lightBlue)"};
      color:var(--mainBlue);
  }
  &:focus{
      outline:none;
  }
`;