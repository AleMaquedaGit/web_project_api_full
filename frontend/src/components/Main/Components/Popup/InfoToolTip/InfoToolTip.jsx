import { useState } from "react";
import "../../../../../blocks/infoToolTip.css";
import Popup from "../Popup";
function InfoToolTip({ messagge, onClose, isSuccess }) {
  return (
    <>
      <Popup onClose={onClose}>
        <div className="modal">
          <div className="modal-content">
            <div className="icon">{isSuccess ? "✓" : "✕"}</div>
            <p className="message"> {messagge}</p>
          </div>
        </div>
      </Popup>
      ;
    </>
  );
}
export default InfoToolTip;
