import Footer from "../Footer";
import Popup from "./Components/Popup/Popup";
import Header from "../Header";
import { useState } from "react";
import NewCard from "./Components/Popup/Newcard/NewCard";
import Card from "./Components/Card/Card";
import image from "../../images/Avatar.png";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import ImagePopup from "../Main/Components/Popup/ImagePopup/ImagePopup";
import currentUserContext from "../../CurrentUserContext/context";

import { useContext } from "react";

export default function Main(props) {
  const userContext = useContext(currentUserContext);
  const { currentUser } = userContext;
  const { onClose, popup, onOpen, cards, deleteCard, likeButton, fetchUser } =
    props;

  //Agregar en el arreglo de const "likebutton"
  // console.log( + cards);
  const NewCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const EditProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile fetchUser={fetchUser} onClose={onClose} />,
  };
  const EditAvatarpopup = {
    title: "Editar avatar",
    children: <EditAvatar onClose={onClose} />,
  };
  const EditProfilepopup = {
    title: "Cambiar foto de perfil",
    children: <ImagePopup />,
  };

  const HandleOpenPopup = () => {};

  const [onoff, setOnOff] = useState(false);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__avatar">
          <img
            src={currentUser?.avatar}
            alt="avatar"
            className="profile__avatar-image"
            onClick={() => {
              console.log("click en el mas");
              //console.log(newCard);
              onOpen(EditAvatarpopup);
            }}
          />
        </div>

        <div className="profile__grid-content">
          <p className="profile__content profile__content_name">
            {currentUser?.name}
          </p>

          <p className="profile__content profile__content_info">
            {currentUser?.about}
          </p>
          <button
            type="button"
            className="profile__button profile__button_edit"
            id="profile__button_edit"
            onClick={() => {
              console.log("click en el mas");
              //console.log(newCard);
              onOpen(EditProfilePopup);
            }}
          ></button>
        </div>
        <button
          type="submit"
          className="profile__button profile__button_add"
          onClick={() => {
            console.log("click en el mas");
            //console.log(newCard);
            onOpen(NewCardPopup);
          }}
        ></button>
      </div>

      <section className="gallery">
        {cards.map((card) => (
          <Card
            card={card}
            onOpen={onOpen}
            deleteCard={deleteCard}
            likeButton={likeButton}
            key={card._id}
          />
        ))}
        {onoff && <Popup />}
      </section>
    </main>
  );
}
// borrar node_modules(too large)
// npm i volver instalar las dependencias.
