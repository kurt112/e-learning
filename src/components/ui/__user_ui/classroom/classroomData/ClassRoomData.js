/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Grid, Hidden} from "@material-ui/core";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import Messages from "./messages/Messages";
import Participant from "./Participants/Participant";
import Input from "./messages/Input/Input";
import {Fragment, useState} from "react";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const ClassRoomData = ({classes,onClose, messages, sendMessage, name}) => {


    const [messageTab, setMessageTab] = useState(true)
    const [participantTab, setParticipantTab] = useState(false)

    console.log('I am rednring')

    const messageTabClick = () => {
        setMessageTab(true)
        setParticipantTab(false)
    }

    const participantTabClick = () => {
        setMessageTab(false)
        setParticipantTab(true)
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
                            sendMessage={sendMessage}
                        />
                    </Fragment> :
                    null
            }

            {
                participantTab ?

                    <Participant/> : null

            }


        </Grid>
    )
}


export default ClassRoomData