
import { Link, useHistory } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutCircleRFill } from 'react-icons/ri';

import { logout } from "../../services/auth";

import ContainerMain from './styles'
const Main: React.FC = () => {
  var aValue = localStorage.getItem('username');

  const history = useHistory()
  function out(){
    logout()
    history.push('/login')
  }
  return (
      
      <ContainerMain>
          <header>
            <div className="nav">
              <div className="left">
                <h3>Web Bot</h3>
                <div className="menu">
                  <Link className="link-menu" to="/home">Home</Link>
                  <Link className="link-menu" to="/pedidos">Pedidos</Link>
                  <Link className="link-menu" to="/payments">Pagamentos</Link>
                </div>
              </div>
              <div className="right">
                
                <div className="user" >
                  <FaUserCircle/> <p>{aValue}</p> 
                  <RiLogoutCircleRFill onClick={out}/>
                </div>
                
              </div>
            </div>
          </header>
      </ContainerMain>
  )
}
export default Main