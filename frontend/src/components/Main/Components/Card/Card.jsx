//import image from "../../../../images/Lago_Braies.png";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";
function Card(props) {
  const { onOpen } = props;
  const { card } = props;
  const { deleteCard } = props;
  const { likeButton } = props;
  const cardLike = `${card.isLiked ? "card__like" : "card__like_active"}`;
  console.log(card);
  // console.log(name);
  const imgPopup = {
    title: "",
    children: <ImagePopup description={card.name} image={card.link} />,
  };
  console.log(card);
  return (
    <div className="card">
      <button
        type="button"
        className="card__trash_button"
        onClick={() => {
          console.log("click boton basura");
          console.log(card._id);
          deleteCard(card._id);
        }}
      ></button>

      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={() => {
          onOpen(imgPopup);
        }}
      />

      <div className="card__title">
        <p className="card__place">{card.name}</p>

        <div
          className={cardLike}
          onClick={() => {
            console.log("click like");
            console.log(likeButton);
            likeButton(card);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
