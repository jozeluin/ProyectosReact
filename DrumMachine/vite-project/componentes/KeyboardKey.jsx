import React, { useEffect } from "react";

const KeyboardKey = ({ play, sound: { id, key, url, keyCode } }) => {
  /**
   * Captura el evento de tecla presionada
   * @param {} event Es el evento de tecla
   */
  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="bg-light d-flex justify-content-center border border-warning">
      <button className="btn" id={id} onClick={() => play(key, id)}>
        <audio className="clip" id={key} src={url} />
       <span className="w-100">{key}</span>
      </button>
    </div>
  );
};

export default KeyboardKey;
