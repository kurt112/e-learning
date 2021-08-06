/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import style from '../GlobalStyle'
import {Box, Grid} from "@material-ui/core";
import {useEffect, Fragment, useRef, useState} from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;


const Video = (props) => {
    const ref = useRef();
    // console.log(props.peer)
    console.log(ref)
    useEffect(() => {
        props.peer.on("stream", stream => {
            console.log(stream)
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref}/>
    );
}

const Participant = ({peers}) => {

    console.log(peers)

    return <Fragment>
        {peers.map((peer, index) => {
            console.log(peer)
            return (
                <Grid key={index} container>
                    <Grid container style={{position: 'relative'}} justify={"center"}>
                        <Video  peer={peer} s/>
                        <span style=
                                  {{
                                      position: 'absolute',
                                      left: '4%',
                                      bottom: 2,
                                      color: 'black',
                                      cursor: 'default',
                                      backgroundColor: 'white'
                                  }}
                        >Kurt Lupin Orioque</span>
                    </Grid>


                </Grid>
            );
        })}


    </Fragment>
}

export default Participant