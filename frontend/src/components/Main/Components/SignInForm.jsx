import "../../../blocks/signInForm.css";

import { auth } from "../../../Utils/Auth";
import "../../../blocks/login.css";
import { useState } from "react";
import InfoToolTip from "./Popup/InfoToolTip/InfoToolTip";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [popUpOpen, setpopUpOpen] = useState(false);
  const [popUpSuccess, setpopUpSuccess] = useState(false);
  const [popUpmessagge, setpopUpMessagge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .signIn({ email, password })

      .then(() => {
        //setSign(true);
        setpopUpOpen(true);
        setpopUpSuccess(true);
        setpopUpMessagge("Correcto! ya estás registrado");
      })

      .catch(() => {
        //setLogin(false);
        setpopUpOpen(true);
        setpopUpSuccess(false);
        setpopUpMessagge("registro sin exito");
      });
  }
  function handleClosePopUp() {
    setpopUpOpen(false);
  }
  return (
    <>
      <div className="container">
        <div className="form-box">
          <h2 className="form-box_title">Regístrate</h2>

          <form className id="signupForm" onSubmit={handleSubmit}>
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
              Regístrate
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

export default SignInForm;
