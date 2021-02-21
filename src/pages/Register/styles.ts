import styled from 'styled-components'

const ContainerRegister = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
.container-register{
   display: flex;
   
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
   padding: 7rem;
   border-radius: ${props => props.theme.borderRadius};
   background: ${props => props.theme.palette.primary.main};
   text-align: center;
}

.container-register header {
    margin-bottom: 1rem;
}
/* .container-register #section-subscription {

} */
#section-subscription p#info{
  text-align: left;
  font-size: 1rem;
}
#section-get-token form,  #section-subscription form {
  margin: 1.5rem 0;
}
#section-get-token form input,  #section-subscription form input{
  margin-bottom: 0.5rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  padding: 0 15px;
  font-size: 16px;
}
input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

button.btn {
  text-transform: uppercase;
  border: 0;
  border-radius: 8px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  margin-top: 20px;

  font-weight: bold;

  border-style: solid;
  border-width: 2px;
  border-color: transparent;

  transition: .5s;

  background: ${props => props.theme.palette.secondary.main};
  color: ${props => props.theme.palette.primary.contrastText};
  cursor: pointer;
}
button.btn:hover {
  background:transparent;
  //color:  ${props => props.theme.palette.secondary.main};
  border-style: solid;
  border-width: 2px;
  border-color:  ${props => props.theme.palette.secondary.main};
}


`

export default ContainerRegister;