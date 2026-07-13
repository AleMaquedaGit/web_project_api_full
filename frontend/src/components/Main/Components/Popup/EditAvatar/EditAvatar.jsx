import { useContext, useState } from "react";
import currentUserContext from "../../../../../CurrentUserContext/context";

function EditAvatar(props) {
  const userContext = useContext(currentUserContext);
  const { handleUpDateAvatar, fetchUser } = userContext;
  const [avatar, setAvatar] = useState(null);
  const { onClose } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpDateAvatar({ avatar }).then(() => {
      //Con "then "se realiza la actualizacion de la infomacion
      // siempre y cuando todo (metodo)este funcionando bien
      fetchUser();
      onClose();
    });
  };
  return (
    <form class="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__form-name"
        type="url"
        id="link"
        name="link"
        placeholder="Enlace a la imagen"
        required=""
        onChange={(event) => setAvatar(event.target.value)}
      />
      <button
        type="submit"
        className="popup__form-button popup__disabled"
        id="button_image_add"
      >
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
