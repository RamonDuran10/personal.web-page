import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Input from "./input";

export const Contact = () => {
  
  const [username, setUsername] = useState({field: '', valido : null});
  const [name, setName] = useState({field: '', valido : null});
  const [password, setPassword] = useState({field: '', valido : null});
  const [password2, setPassword2] = useState({field: '', valido : null});
  const [email, setEmail] = useState({field: '', valido : null});
  const [phone, setPhone] = useState({field: '', valido : null});
  

  const expresiones = {
    username: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[+]\d{7,14}$/ // 7 a 14 numeros.
  }
  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("enviando datos formulario")

  }
  
  return (

      <form onSubmit={enviarDatos} className="form-main">
       
        <Input
            state={name}
            setState={setName}
            type="text"
            label="Name"
            placeholder="write your name"
            name="name"
            leyendaerror="El Nombre puede contener Letras de 1 a 40 digitos, con espacios, pueden llevar acentos.."
            expresionRegular={expresiones.name} 
        />
         <Input
            state={username}
            setState={setUsername}
            type="text"
            label="Username"
            placeholder="write your Username"
            name="username"
            leyendaerror="El Username solo puede contener Letras de 4 a 16 digitos, Letras, numeros, guion y guion_bajo"
            expresionRegular={expresiones.username} 
        />
        <Input
            state={password}
            setState={setPassword}
            type="password"
            label="Pasword"
            placeholder="write your Password"
            name="password"
            leyendaerror="El password solo puede contener  4 a 12 digitos." 
        />
        <Input
            state={password2}
            setState={setPassword2}
            type="password"
            label="Repita su password"
            placeholder="Repita su password"
            name="password"
            leyendaerror="El password solo puede contener  4 a 12 digitos." 
        />
         <Input
            state={email}
            setState={setEmail}
            type="email"
            label="Email"
            placeholder="escribe tu email"
            name="email"
            leyendaerror="Escribe una direccion de correo valida."
            expresionRegular={expresiones.email} 
        />
         <Input
            state={phone}
            setState={setPhone}
            type="phone"
            label="phone"
            placeholder="escribe tu numero de telefono."
            name="Phone"
            leyendaerror="Escribe una direccion de correo valida."
            expresionRegular={expresiones.phone} 
        />

       
        <div className="terminos-condiciones">
          <label>
            <input className="checkbox" type="checkbox" name="terminos" id="terminos" />
            Acepto terminos y condiciones
          </label>
        </div>

        <div className="error-message">
          <p >
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error: </b>Por favor escribe el formulario correctamente.
          </p>
        </div>

        <div className="button-contact">
          <button type="submit">Enviar</button>
          <p className="mensaje-exito">Formulario enviado exitosamente</p>
        </div>
      </form>
    
  );
};
export default Contact;
