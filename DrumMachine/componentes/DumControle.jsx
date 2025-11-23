import React from 'react'

const DumControle = ({name,ChangeSoundsGroup}) => {
  return (
    <div className='controle'>
      <h2 id="display">{name}</h2>
        <button onClick={ChangeSoundsGroup}>Change Sounds Group</button>
    </div>
  )
}

export default DumControle