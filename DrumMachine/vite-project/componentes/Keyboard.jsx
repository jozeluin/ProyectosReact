import React from 'react'
import KeyboardKey from './KeyboardKey';




export const Keyboard = ({power,play,sounds}) => (

    <div >
        
           <div className='keyboard m-2 bg-white'>{
           power ? sounds.map((sound) =>  <KeyboardKey play={play} sound={sound}/> )
   : sounds.map((sound) =>  <KeyboardKey play={play} sound={{...sound, url: "#"}} /> ) //Tranforma
   //la url en un "#" que esta vacio
   }
   
   </div>
   
    </div>    

 
 

 
 



);
