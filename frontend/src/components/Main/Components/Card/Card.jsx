import ImagePopup from "../Popup/ImagePopup/ImagePopup";

function Card(props) {
  const { onOpen, card, deleteCard, likeButton, currentUser } = props;

  const isLiked = card.likes?.some(
    (userId) => userId.toString() === currentUser?._id.toString(),
  );

  const cardLike = `card__like${isLiked ? " card__like_active" : ""}`;

  const imgPopup = {
    title: "",
    children: <ImagePopup description={card.name} image={card.link} />,
  };

  return (
    <div className="card">
      <button
        type="button"
        className="card__trash_button"
        onClick={() => {
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
            likeButton(card);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
