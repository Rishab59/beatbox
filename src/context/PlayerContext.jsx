import { createContext, useEffect, useRef, useState } from "react" ;

import { songsData } from "../assets/assets" ;


export const PlayerContext = createContext() ;

const PlayerContextProvider = (props) => {
    const audioRef = useRef() ;
    const seekBg = useRef() ;
    const seekBar = useRef() ;

    const [track, setTrack] = useState(songsData[0]) ;
    const [playStatus, setPlayStatus] = useState(false) ;

    const [time, setTime] = useState({
        currentTime : {
            minute : 0,
            second : 0,
        },
        totalTime : {
            minute : 0,
            second : 0,
        },
    }) ;

    const play = () => {
        audioRef.current.play() ;
        setPlayStatus(true) ;
    } ;

    const pause = () => {
        audioRef.current.pause() ;
        setPlayStatus(false) ;
    } ;

    const playWithId = async (id) => {
        await setTrack(songsData[id]) ;
        await audioRef.current.play() ;
        setPlayStatus(true) ;
    } ;

    const previousSong = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]) ;
            await audioRef.current.play() ;
            setPlayStatus(true) ;
        }
    } ;

    const nextSong = async () => {
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1]) ;
            await audioRef.current.play() ;
            setPlayStatus(true) ;
        }
    } ;

    const seekSong = async (event) => {
        // console.log(event) ;
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration) ;
    } ;


    useEffect(() =>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (
                    Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)
                ) + "%" ;

                if(seekBar.current.style.width == "100%"){
                    setTimeout(() => nextSong(), 1500) ;
                }

                setTime({
                    currentTime : {
                        minute : Math.floor(audioRef.current.currentTime / 60),
                        second : Math.floor(audioRef.current.currentTime % 60),
                    },
                    totalTime : {
                        minute : Math.floor(audioRef.current.duration / 60),
                        second : Math.floor(audioRef.current.duration % 60),
                    },
                }) ;
            } ;
        }, 1000) ;

    }, [audioRef]) ;


    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previousSong,
        nextSong,
        seekSong,
    } ;


    return(
        <PlayerContext.Provider value = { contextValue }>
            { props.children }
        </PlayerContext.Provider>
    ) ;
} ;


export default PlayerContextProvider ;
