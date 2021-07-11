/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import style from '../GlobalStyle'
import {Box} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";

const Participant = () => {


    const classes = style()


    const [stream, setStream] = useState();

    const userVideo = useRef();
    useEffect(() => {

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {video: true, width: '100%'}
        })
            .then(stream => {
                setStream(stream)
                if (userVideo.current) {
                    userVideo.current.srcObject = stream

                }
            })


    }, [])


    // if (stream) {
    //     UserVideo = (<video playsInline width={'100%%'}  muted ref={userVideo} autoPlay />)
    // }


    return <Box className={classes.participantTab}>

        <video playsInline width={'100%%'} muted ref={userVideo} autoPlay/>
        {/*<span style={{position:'absolute', color:'white'}}>asds</span>*/}

    </Box>
}

export default Participant