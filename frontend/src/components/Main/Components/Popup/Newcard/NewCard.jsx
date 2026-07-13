import { useContext, useState } from "react";
import currentUserContext from "../../../../../CurrentUserContext/context";

function NewCard() {
  const userContext = useContext(currentUserContext);
  const { handleAddCard } = userContext; //tomar lo necesaria de la caja
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  function handleSubmit(event) {
    console.log(name);
    event.preventDefault();
    handleAddCard({ name, link }); //agrega una carta y despues de eso, vamos a ponerla en el DOM
  }
  return (
    <>
      <form className="popup__form" id="form__card" onSubmit={handleSubmit}>
        <input
          className="popup__form-name"
          type="text"
          id="place"
          name="name"
          placeholder="Título"
          minlength="2"
          maxlength="40"
          required=""
          onChange={(event) => setName(event.target.value)}
        />
        <span className="popup_paragraph" id="place-error">
          {" "}
        </span>
        <input
          className="popup__form-name"
          type="url"
          id="link"
          name="link"
          placeholder="Enlace a la imagen"
          required=""
          onChange={(event) => setLink(event.target.value)}
        />
        <span className="popup_paragraph" id="link-error">
          {" "}
        </span>
        <button
          type="submit"
          className="popup__form-button popup__disabled"
          id="button_image_add"
        >
          Guardar
        </button>
      </form>
    </>
  );
}

export default NewCard;
