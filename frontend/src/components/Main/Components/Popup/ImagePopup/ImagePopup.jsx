function ImagePopup(props) {
  const { image, description } = props;

  return (
    <>
      <img
        className="popup__image"
        id="popup__image-add"
        src={image}
        alt={description}
      />
     
    </>
  );
}

export default ImagePopup;
