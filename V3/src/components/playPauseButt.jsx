import React from 'react'

const PlayPauseButt = props => {
    const { songs } = props;
    let audio = new Audio(songs.previewUrl)
    let playing = false

    const playButtToggle = () => {

        if (playing) {
            playing = false
            audio.pause()
            // buttStatus = 'PLAY'
        } else {
            playing = true
            audio.play()
            // buttStatus = 'PAUSE'
        }
    }
    return (
        <button className="playPauseButt" onClick={playButtToggle}>PLAY</button>
    )
}

export default PlayPauseButt