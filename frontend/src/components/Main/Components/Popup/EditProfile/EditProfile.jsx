import { useContext, useState } from "react";
import currentUserContext from "../../../../../CurrentUserContext/context";

function EditProfile(props) {
  const userContext = useContext(currentUserContext);
  const { handleUpDateUser } = userContext; //tomar lo necesaria de la caja
  const [name, setName] = useState("");
  const [about, setdescription] = useState("");
  const { fetchUser, onClose } = props;

  function handleSubmit(event) {
    console.log("click en el boton");
    event.preventDefault();
    handleUpDateUser({ name, about }).then(() => {
      fetchUser();
      onClose();
    });
  }

  return (
    <>
      <form className="popup__form" id="form__edit">
        <input
          className="popup__form-name"
          type="text"
          id="input_name"
          name="name"
          placeholder="Nombre"
          minlength="2"
          maxlength="40"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <span className="popup_paragraph" id="input_name-error"></span>
        <input
          className="popup__form-name"
          type="text"
          id="input_description"
          name="description"
          placeholder="Acerca de mi"
          minlength="2"
          maxlength="40"
          required
          onChange={(event) => setdescription(event.target.value)}
        />

        <span className="popup_paragraph" id="input_description-error"></span>
        <button
          type="submit"
          className="popup__form-button popup__disabled"
          id="btn__enviar"
          value="Enviar"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </form>
    </>
  );
}

export default EditProfile;
