export default function Popup(props) {
  const { title, children, onClose } = props;
  console.log(props, "props");
  return (
    <section className="popup" id="popup-profile">
      <h2>{title}</h2>
      <div className="popup__container">{children}</div>
      <button onClick={onClose} className="popup__button-close"></button>
    </section>
  );
}
// <h2 className="popup__form-title"></h2>
