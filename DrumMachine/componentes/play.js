import React from 'react'

const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();

}

export default play