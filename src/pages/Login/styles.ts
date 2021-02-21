import styled from 'styled-components'

const ContainerLogin = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
.container-login{
   display: flex;
   
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
   padding: 7rem;
   border-radius: ${props => props.theme.borderRadius};
   background: ${props => props.theme.palette.primary.main};
   
}

.container-login .header-subscription {
  margin-bottom: 2rem;
}
#section-subscription form input {
  margin-bottom: 0.5rem;;
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

.register-btn {
  padding-top: 3rem;
}

.register-btn #register-link {
  float: right;
  display: flex;
  align-items:center;
  gap: 0.3rem;
  //font-weight:bold;
  color: ${props => props.theme.palette.primary.contrastText}; 
}
.register-btn #register-link:hover {
  text-decoration: underline;
} 

.register-btn #register-link .arrow-right {
  color: ${props => props.theme.palette.secondary.main}; 
  size: 50px;
}

`

export default ContainerLogin;