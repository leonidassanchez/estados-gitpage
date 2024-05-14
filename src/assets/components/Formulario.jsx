import "bootstrap/dist/css/bootstrap.min.css";
import "./Formulario.css";
import { useState } from "react";
import SocialButton from "./SocialButton";

const Formulario = ({ handleRegistro }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confContrasena, setConfContrasena] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorConfContrasena, setErrorConfContrasena] = useState("");

  const NombreChange = (e) => {
    setNombre(e.target.value);
  };

  const EmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setErrorEmail("Email no válido");
    } else {
      setErrorEmail("");
    }
  };

  const ContrasenaChange = (e) => {
    setContrasena(e.target.value);
  };

  const ConfContrasenaChange = (e) => {
    setConfContrasena(e.target.value);
    if (e.target.value !== contrasena) {
      setErrorConfContrasena("Las contraseñas no coinciden");
    } else {
      setErrorConfContrasena("");
    }
  };

  const eventonsubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nombre || !email || !contrasena || !confContrasena) {
      handleRegistro("Todos los campos son obligatorios", "error");
      return;
    }
    if (!emailRegex.test(email)) {
      handleRegistro("Email no válido", "error");
      return;
    }
    if (contrasena !== confContrasena) {
      handleRegistro("Las contraseñas no coinciden", "error");
      return;
    }
    handleRegistro("Registro exitoso", "success");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Contraseña:", contrasena);
    console.log("Confirmar Contraseña:", confContrasena);
  };

  return (
    <div className="form-container">
      <form onSubmit={eventonsubmit}>
        <SocialButton />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="Nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={NombreChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errorEmail && "is-invalid"}`}
            name="Email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={EmailChange}
          />
          {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="Contrasena"
            placeholder="Contraseña"
            value={contrasena}
            onChange={ContrasenaChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className={`form-control ${errorConfContrasena && "is-invalid"}`}
            name="Confcontrasena"
            placeholder="Confirma tu contraseña"
            value={confContrasena}
            onChange={ConfContrasenaChange}
          />
          {errorConfContrasena && (
            <div className="invalid-feedback">{errorConfContrasena}</div>
          )}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
