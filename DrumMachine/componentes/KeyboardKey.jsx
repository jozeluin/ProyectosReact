import React, { useEffect } from 'react'

const KeyboardKey = ({play, sound:{id,key,url,keyCode}}) => {

    const handleKeyPress = (event) => {
        if(event.keyCode === keyCode){
            play(key,id);
        }   
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


  return (
       <button className='drum-pad' onClick={() => play(key,id)}>
        <audio className="clip" id={key} src={url}/>
        {key}
    </button>
  )
}

export default KeyboardKey