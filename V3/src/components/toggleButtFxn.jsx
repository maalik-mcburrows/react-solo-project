import React from 'react'
import PlayPauseButt from './playPauseButt';


const ToggleButtFxn = props => {
    const { songs } = props;
    console.log('Fxn props: ', props);
    let playing = false;
    let audio = new Audio(songs);

    const theFxn = () => {
        
        if (playing) {
            playing = false
            audio.pause()
        } else {
            playing = true
            audio.play()
        }

        console.log('This the MF SONG: ',playing, songs)
    
    }
    

    return (
        <div>
            <PlayPauseButt onClick={theFxn} />
        </div>
    )
}

export default ToggleButtFxn
