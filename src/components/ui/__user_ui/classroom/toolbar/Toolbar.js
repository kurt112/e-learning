/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import style from './ToolbarStyle'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp'
import PresentToAllIcon from '@material-ui/icons/PresentToAll'
import {Box, Hidden} from "@material-ui/core"
import { useState } from 'react'
import ParticiPantDialog from "../Dialog/ParticiPantDialog";
import * as actions from "../../../../../store/action/ClassroomAction"
import {connect} from 'react-redux'
const Toolbar = ({ClassroomState, setMic,setVideo, setDrawer}) =>{
    const classes = style()

    const [participantDialog, setParticipant] = useState(false)

    const participantAction = () => {
        setParticipant(!participantDialog)
    }


    return (
        <Box className={classes.leftBottomToolbar}>
            <ParticiPantDialog dialog={participantDialog} closeDialog={participantAction}/>
            <Box className={classes.leftBottomToolbarLeft}>
                <Box className={classes.centerItem} onClick={() => setMic(!ClassroomState.mic)}>
                    {ClassroomState.mic ? <MicIcon fontSize="large" /> : <MicOffIcon fontSize="large" />}
                    <br/>
                    <span>Mic</span>
                </Box>

                <Box className={classes.centerItem} onClick={() => setVideo(!ClassroomState.video)}>
                    {ClassroomState.video ? <VideocamIcon fontSize="large" /> : <VideocamOffIcon fontSize="large" />}
                    <br/>
                    <span>Video</span>
                </Box>

            </Box>

            <Box className={classes.leftBottomToolbarmiddle}>


                <Box className={classes.centerItem}>
                    <PresentToAllIcon fontSize="large" />
                    <br/>
                    <span>Share</span>
                </Box>



            </Box>

            <Box className={classes.leftBottomToolbarRight}>
               <Hidden mdDown>
                   <Box className={classes.centerItem}>
                       <p style={{color:'red'}}>Leave Classroom</p>
                   </Box>
               </Hidden>
               <Hidden mdUp>
                   <Box className={classes.centerItem} onClick={() => setDrawer(true)}>
                       <MoreHorizSharpIcon fontSize='large'/>
                   </Box>
               </Hidden>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state) => {
    return {
        ClassroomState: state.Classroom
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setVideo: (data) => dispatch(actions.setVideo(data)),
        setMic: (data) => dispatch(actions.setMic(data)),
        set_showMessage: (data) => dispatch(actions.set_showMessage(data)),
        setShareScreen: (data) => dispatch(actions.setShareScreen(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)