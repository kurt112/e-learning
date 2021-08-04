/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import style from '../GlobalStyle'
import {Box, Grid} from "@material-ui/core";
import {useEffect, Fragment, useRef, useState} from "react";

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


    return <Fragment>
        <Grid container>
            <Grid container style={{position: 'relative'}} justify={"center"}>
                <video playsInline muted ref={userVideo} autoPlay width='100%'/>
                <span style=
                          {{
                              position: 'absolute',
                              left: '4%',
                              bottom: 2,
                              color: 'black',
                              cursor: 'default',
                              backgroundColor:'white'
                          }}
                >Kurt Lupin Orioque</span>
            </Grid>
            {/*<Grid container style={{position: 'relative'}} justify={"center"}>*/}
            {/*    <video playsInline muted ref={userVideo} autoPlay width='100%'/>*/}
            {/*    <span style=*/}
            {/*              {{*/}
            {/*                  position: 'absolute',*/}
            {/*                  left: '4%',*/}
            {/*                  bottom: 2,*/}
            {/*                  color: 'black',*/}
            {/*                  cursor: 'default',*/}
            {/*                  backgroundColor:'white'*/}
            {/*              }}*/}
            {/*    >KURT LUPIN ORIOQUE</span>*/}
            {/*</Grid>*/}

            {/*<Grid item md={12}>*/}
            {/*    <video playsInline muted ref={userVideo} autoPlay/>*/}
            {/*    <span style={{position: 'absolute', color: 'red'}}>asds</span>*/}

            {/*</Grid>*/}

            {/*<Grid item md={12}>*/}
            {/*    <video playsInline muted ref={userVideo} autoPlay/>*/}
            {/*    <span style={{position: 'absolute', color: 'red'}}>asds</span>*/}

            {/*</Grid>*/}

        </Grid>


    </Fragment>
}

export default Participant