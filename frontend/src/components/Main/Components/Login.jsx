import { useState } from "react";
import "../../../blocks/login.css";
import InfoToolTip from "./Popup/InfoToolTip/InfoToolTip";
import auth from "../../../utils/Auth";
import { useNavigate } from "react-router-dom";
function Login() {
  // variable de estado (arriba del return JS )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const [popUpOpen, setpopUpOpen] = useState(false);
  const [popUpSuccess, setpopUpSuccess] = useState(false);
  const [popUpmessagge, setpopUpMessagge] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    auth
      .logIn({ email, password })

      .then((data) => {
        setLogin(true);
        setpopUpOpen(true);
        setpopUpSuccess(true);
        setpopUpMessagge("exito");
      })

      .catch((err) => {
        setLogin(false);
        setpopUpOpen(true);
        setpopUpSuccess(false);
        setpopUpMessagge("Uy,algo salió mal,Porfavor inténtalo de nuevo");
      });
  }
  function handleClosePopUp(e) {
    setpopUpOpen(false);
    if (popUpSuccess) {
      navigate("/main");
    }
  }

  return (
    <>
      {/* esto es un comentario en HTML incrustado JS */}

      <div className="container">
        <div className="form-box">
          <h2 className="form-box_title">Login</h2>

          <form className id="signupForm" onSubmit={handleLogin}>
            <input
              id
              className="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error" id="emailError"></span>

            <input
              className="password"
              type="password"
              placeholder="contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="error" id="passwordError"></span>

            <button className="register" type="submit">
              Login
            </button>
          </form>

          <p className="footer-text">¿Ya eres miembro? Inicia sesión aquí</p>
        </div>
      </div>
      {popUpOpen && (
        <InfoToolTip
          isSuccess={popUpSuccess}
          messagge={popUpmessagge}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
}

export default Login;
