import React from "react";

const DumControle = ({
  stop,
  name,
  power,
  volume,
  handVolumeChange,
  ChangeSoundsGroup,
}) => {
  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-9 mb-2">
        <button onClick={stop}>Turn the power{power ? "OFF" : "ON"}</button>
        <h2 className="text-center">Volume: %{Math.round(volume * 100)}</h2>
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handVolumeChange}
        />
        <h2 className="text-center" id="display">{name}</h2>
        <button onClick={ChangeSoundsGroup}>Change Sounds Group</button>
      </div>
    </div>
  );
};

export default DumControle;
