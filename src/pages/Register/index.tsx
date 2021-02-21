import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';

import { login } from "../../services/auth";
import ContainerRegister from './styles'


import { loadingOnOff } from '../../utils/scripts';
import Loading from '../../utils/Loading';

const Register: React.FC = () => {
  const history = useHistory();

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [cont, setCont] = useState(false);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState(300)

  //const [isAuthenticate, setIsAuthenticate] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Nome: " + username);
    console.log("Email: " + email);
    //console.log("Senha: " + password);

    //loadingOnOff();   
    if(!isAuthenticated()){
      alert("Você não realizou uma autenticação primária de Token para poider se registrar.")
      return
    }
    try {
      const response = await api.post('/register', {
        username,
        email,
        password,
      });
      console.log(response.data)
      if (!response.data.ok) {
        alert(response.data.message)
        return
      }
      const { _id, user = username } = response.data.user;

      console.log(user);
      localStorage.setItem('user_id', _id);
      localStorage.setItem('username', user);
      await login(response.data.token);//função 
      //console.log(response);
      // //loadingOnOff();
      history.push('/main');

    } catch (error) {
      // loadingOnOff();
      //console.log(response);
      // if (error === 400)
      //   console.log("ok;");

      alert("falha no registro. " + error);

    }

  }

  async function handleSubmitToken(event: any) {
    event.preventDefault();
    console.log("Token: ", token);
    try {
      const response = await api.post('/authenticatePrimary', {
        value: token,
      });
      //console.log(response.data);
      if (!response.data.ok) {
        alert(response.data.error)
        return
      }
      alert("Você tem 3 minutos para fazer o seu registro. Deverá usar um no")

      login(response.data.token);
      setCont(true)
      setModal(true)
      //console.log("cont",cont)

    } catch (error) {
      alert(error)
    }
  }

  const [munted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    if(munted){
      if (time > 0 && cont) {
        setTimeout(() => {
          setTime(time - 1)
        }, 1000);
      }
    }
    return () => setMounted(false);
  }, [time,munted,cont]);

  return (
    <ContainerRegister>
    <div className="container-register">
      <header className="header-subscription">
        <h1>Área pra registro no sistema</h1>
        {/* <p>Necessário token de autenticação para cadastro.</p> */}
      </header>
      {!modal && (
        <section id="section-get-token">
          <label htmlFor="form" >Necessário Token de autenticação para poder se cadastrar*</label>
          <form onSubmit={handleSubmitToken}>
            <input
              type="token"
              id="token"
              value={token}
              placeholder="Token de autenticação"
              onChange={event => setToken(event.target.value)}
            />
            <button className="btn" type="submit">Autenticar</button>
          </form>
        </section>
      )}

      {modal && (
        <section id="section-subscription">
          <p>Token expira em {time} segundos.</p>
          <label htmlFor="form" id="Formulario">Preencha os dados para se cadastrar.*</label>
          <form onSubmit={handleSubmit}>

            <input
              type="name"
              id="name"
              placeholder="Seu nome de usuário"
              value={username}
              onChange={event => setUserName(event.target.value)}
            />
            <input
              type="email"
              id="email"
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

            <button className="btn" type="submit">Cadastrar</button>

          </form>

          <p id="info"><strong>*</strong> Seu nome de usuário será o nome do seu robo do Whatsapp e precisa ser único no sistema. O seu E-mail também precisa ser único.</p>

        </section>

      )}
    </div>
    </ContainerRegister>

  );

}
export default Register;