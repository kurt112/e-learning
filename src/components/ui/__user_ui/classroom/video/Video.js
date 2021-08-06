/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Grid} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import style from './VideoStyle'
import {connect} from 'react-redux'
import Peer from "simple-peer";
import styled from "styled-components";
const StyledVideo = styled.video`
  width: 70%;
  height: auto;
`;
const Video = ({userVideo, mic, socket}) => {

    return   <Grid container alignItems={"center"} style={{position: 'relative', height: '100%'}}
                   justify={'center'}>
        <StyledVideo muted ref={userVideo} autoPlay playsInline/>

        <span style=
                  {{
                      position: 'absolute',
                      left: '50%',
                      bottom: '50%',
                      color: 'grey',
                      cursor: 'default',
                  }}
        >Kurt Lupin Orioque</span>

    </Grid>
}

const mapStateToProps = (state) => {
    return {
        video: state.Classroom.video,
        mic: state.Classroom.mic
    }
}

export default connect(mapStateToProps)(Video)

















