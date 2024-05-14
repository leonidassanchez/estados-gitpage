import Alert from "./assets/components/Alert";
import Formulario from "./assets/components/Formulario";
import { useState } from "react";

const App = () => {
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const handleRegistro = (mensaje, tipo) => {
    setMensaje(mensaje);
    setTipoMensaje(tipo);
  };

  return (
    <div>
      <Alert message={mensaje} type={tipoMensaje} />
      <Formulario handleRegistro={handleRegistro} />
    </div>
  );
};

export default App;
