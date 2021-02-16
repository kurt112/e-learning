import {Box, Grid, Hidden} from "@material-ui/core";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import PanToolSharpIcon from "@material-ui/icons/PanToolSharp";
import Messages from "./messages/Messages";
import Participant from "./Participants/Participant";
import Input from "./messages/Input/Input";
import {Fragment, useState} from "react";
import Lobby from "./Lobby/Lobby";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const ClassRoomData = ({classes,onClose, messages, message, setMessage, sendMessage, name}) => {


    const [messageTab, setMessageTab] = useState(true)
    const [participantTab, setParticipantTab] = useState(false)
    const [lobbyTab, setLobbyTab] = useState(false)

    const messageTabClick = () => {
        setMessageTab(true)
        setParticipantTab(false)
        setLobbyTab(false)
    }

    const participantTabClick = () => {
        setMessageTab(false)
        setParticipantTab(true)
        setLobbyTab(false)
    }

    const lobbyTabClick = () => {
        setMessageTab(false)
        setParticipantTab(false)
        setLobbyTab(true)
    }

    return (
        <Grid container item className={classes.right} sm={12} md={3} lg={3} style={{width: '100%'}}>

            <Box className={classes.chatButtons}>
                <Box className={classes.leftDrawerButtons}>
                    <Box onClick={participantTabClick}>
                        <GroupSharpIcon fontSize="large"/>
                        <br/>
                        <span>Participant</span>
                    </Box>
                    <Box onClick={messageTabClick}>
                        <ForumSharpIcon fontSize="large"/>
                        <br/>
                        <span>Messages</span>
                    </Box>
                    <Box onClick={lobbyTabClick}>
                        <PanToolSharpIcon fontSize="large"/>
                        <br/>
                        <span>Lobby</span>
                    </Box>
                </Box>

              <Hidden mdUp>
                  <Box onClick={onClose} className={classes.rightDrawerButton}>
                      <ArrowBackOutlinedIcon fontSize="large"/>
                      <br/>
                      <span>Exit</span>
                  </Box>
              </Hidden>
            </Box>
            {
                messageTab ?
                    <Fragment>
                        <Messages messages={messages} current={name}/>
                        <Input
                            message={message}
                            setMessage={setMessage}
                            sendMessage={sendMessage}
                        />
                    </Fragment> :
                    null
            }

            {
                participantTab ?

                    <Participant/> : null

            }

            {
                lobbyTab ?
                    <Lobby/> : null
            }


        </Grid>
    )
}


export default ClassRoomData