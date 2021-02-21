import styled from 'styled-components'

const ContainerMain = styled.div`
  /* height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; */
  .nav {
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    background:black;
    padding: 0 5rem;

  }

  .nav .left{
    display:flex;
    width: 60%;
    justify-content: space-between;
  }
  .nav .left .menu .link-menu{
    margin-left: 1rem;

  }

  .nav .right {
    display: flex;
    justify-content:center;
    align-items:center;
  }

  .nav .right .user {
    display: flex;
    gap: 1rem;
  }

    
.container-main{
   display: flex;
   
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
   padding: 7rem;
   border-radius: ${props => props.theme.borderRadius};
   background: ${props => props.theme.palette.primary.main};
   text-align: center;
}

`

export default ContainerMain;