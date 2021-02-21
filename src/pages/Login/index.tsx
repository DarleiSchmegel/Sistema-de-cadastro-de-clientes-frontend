import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { login } from "../../services/auth";

import api from '../../services/api';

import Loading from '../../utils/Loading';

import ContainerLogin from './styles'

import { onOff, loadingOnOff } from '../../utils/scripts';

// export default function Login({ history }) 
const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    //history.push('/');//
    //console.log("Nome: " + username);
    //console.log("Senha: " + password);
    //useHistory().push('/')
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      //console.log(response);
      if (response.status === 200) {
        alert(response.data.error)
        return
      }
      const { _id, username } = response.data.userExists;
      console.log(response.data.userExists)
      console.log(username);
      localStorage.setItem('user_id', _id);
      localStorage.setItem('username', username);
      login(response.data.token);//função 
      //console.log(response);
      //loadingOnOff();
      history.push('/main');
      //console.log(history)

    } catch (error) {
      alert("Usuário ou senha incorretos\n" + error);
      console.log('falha ao carregar' + error);
      //history.push('/admin');
      //loadingOnOff();
    }
  }

  return (
    <>
      <ContainerLogin>
        <div className="container-login">
          <header className="header-subscription">
            <h1>Web Bot</h1>
          </header>
          <section id="section-subscription">

            <form onSubmit={handleSubmit}>

              <input
                type="name"
                id="name"
                placeholder="E-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={event => setPassword(event.target.value)}

              />

              <button className="btn" type="submit">Entrar</button>

            </form>
            <div className="register-btn">

              {/* <button id="auth-primary" onClick={() => { history.push('./register') }} >Registrar-se<FiArrowRight size={16} color="0000bb" /></button> */}
              <Link id="register-link" to="/register">Registrar-se<FiArrowRight className="arrow-right"   /></Link>
            </div>

          </section>

          {/* <Loading /> */}

        </div>
      </ContainerLogin>
    </>
  );
}
export default Login;
