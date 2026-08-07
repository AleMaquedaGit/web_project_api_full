import Footer from "../Footer";
import Popup from "./Components/Popup/Popup";
import Header from "../Header";
import { useState } from "react";
import NewCard from "./Components/Popup/Newcard/NewCard";
import Card from "./Components/Card/Card";
import CurrentUserContext from "../../CurrentUserContext/context";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import ImagePopup from "./Components/Popup/ImagePopup/ImagePopup";
import Main from "./Main";
import { api } from "../../Utils/Api";
import { useEffect } from "react";

//linea 14 agregada 4/8/26
function MainApp() {
  //const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState("");

  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    try {
      const current = await api.getCurrentUser(); //*** */
      setCurrentUser(current);
      //setCards(cards);
    } catch (err) {
      console.error(err);
    }
  };

  //const handleLogout = () => {
  //localStorage.removeItem("token");
  //  navigate("/login", { replace: true });
  //};
  //linea 29-34 agregada 4/8/26

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await api.getInitialCards();
        console.log(cards);
        setCards(cards);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCards();
  }, []);

  //console.log(cards);

  function onClose() {
    setPopup(null);
  }

  function onOpen(popup) {
    setPopup(popup);
  }

  //16-10-25 quite "alejandro maqueda" del parametro del useState
  async function handleAddCard(data) {
    console.log("esto en app" + data);
    await api
      .addCard(data)
      .then((NewCard) => {
        setCards([NewCard, ...cards]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function deleteCard(cardId) {
    try {
      await api.removeCard(cardId).then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== cardId),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function likeButton(card) {
    const like = card.isLiked;
    console.log(card);
    //like button
    try {
      await api
        .liked(card._id, !like)
        .then((card) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? NewCard : currentCard,
            ),
          );
        })
        .then(async () => {
          const cards = await api.getInitialCards();
          console.log(cards);
          setCards(cards);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpDateUser(data) {
    try {
      console.log(data);
      await api.setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpDateAvatar(data) {
    try {
      console.log(data);
      await api.setUserAvatar(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <CurrentUserContext.Provider
        value={{
          handleAddCard,
          deleteCard,
          currentUser,
          handleUpDateUser,
          handleUpDateAvatar,
          fetchUser,
          onClose,
        }}
      >
        <Main
          onClose={onClose}
          popup={popup}
          onOpen={onOpen}
          cards={cards}
          deleteCard={deleteCard}
          likeButton={likeButton}
          fetchUser={fetchUser}

          //linea 151 agreguéhandleLogot 4/8/26
        />
        <Footer />

        {popup && (
          <Popup title={popup.title} onClose={onClose}>
            {popup.children}
          </Popup>
        )}
      </CurrentUserContext.Provider>
    </>
  );
}

export default MainApp;

// borrar node_modules(too large)
// npm i volver instalar las dependencias.
