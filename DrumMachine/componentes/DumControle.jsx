import React from 'react'

const DumControle = ({stop,name, power, volume,handVolumeChange,ChangeSoundsGroup}) => {
  return (
    <div className='controle'>
      <button onClick={stop}>Turn the power{power ? "OFF" : "ON"}</button>
      <h2>Volume: %{Math.round(volume * 100)}</h2>
      <input
      max="1"
      min="0"
      step="0.01"
      type="range"
      value={volume}
      onChange={handVolumeChange}
      />

      <h2 id="display">{name}</h2>
        <button onClick={ChangeSoundsGroup}>Change Sounds Group</button>
    </div>
  )
}

export default DumControle