import React from 'react'
import KeyboardKey from './KeyboardKey';




export const Keyboard = ({play,sounds}) => {
 return sounds.map((sound) => (
    <KeyboardKey play={play} sound={sound}/>
  
 
 ))

}
