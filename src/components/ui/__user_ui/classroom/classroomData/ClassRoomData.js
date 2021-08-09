/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Drawer, Grid, Hidden} from "@material-ui/core";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import Messages from "./messages/Messages";
import Participant from "./Participants/Participant";
import Input from "./messages/Input/Input";
import {Fragment, useState} from "react";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Members from "./members/Members";
import {connect} from "react-redux";

const ClassRoomData = ({
                           classes,
                           onClose,
                           messages,
                           name,
                           chatDrawer,
                           small,
                           setMessage,
                           peers,
                          io
                       }) => {


    const [messageTab, setMessageTab] = useState(true)
    const [participantTab, setParticipantTab] = useState(false)
    const [membersTab, setMembersTab] = useState(false)
    const socket = io.socket


    const messageTabClick = () => {
        setMessageTab(true)
        setParticipantTab(false)
        setMembersTab(false)
    }

    const participantTabClick = () => {
        setMessageTab(false)
        setParticipantTab(true)
        setMembersTab(false)
    }

    const membersTabClick = () => {
        setMembersTab(true)
        setMessageTab(false)
        setParticipantTab(false)
    }

    return (

        <Drawer

            className={classes.drawer}
            variant={small ? 'temporary' : 'permanent'}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={onClose}
            anchor="right"
            open={chatDrawer}
        >

            <Grid container className={classes.chatButtons}>
                <Grid container className={classes.leftDrawerButtons}>
                    <Grid item onClick={participantTabClick}>
                        <GroupSharpIcon fontSize="large"/>
                        <br/>
                        <span>Participant</span>
                    </Grid>
                    <Grid item onClick={messageTabClick}>
                        <ForumSharpIcon fontSize="large"/>
                        <br/>
                        <span>Messages</span>
                    </Grid>
                    <Grid item onClick={membersTabClick}>
                        <EmojiPeopleIcon fontSize="large"/>
                        <br/>
                        <span>Members</span>
                    </Grid>

                </Grid>

                <Hidden mdUp>
                    <Box onClick={onClose} className={classes.rightDrawerButton}>
                        <ArrowBackOutlinedIcon fontSize="large"/>
                        <br/>
                        <span>Exit</span>
                    </Box>
                </Hidden>
            </Grid>

            {
                messageTab ?
                    <Fragment>
                        <Messages socket={socket} setMessage={setMessage} messages={messages} current={name}/>
                        <Input
                            socket={socket}
                        />
                    </Fragment> :
                    null
            }

            {
                participantTab ?

                    <Participant socket={socket} peers={peers}/> : null

            }

            {
                membersTab ?
                    <Members/> : null
            }

        </Drawer>
    )
}

const mapStateToProps = (state) => {
    return {
        io:state.Socket
    }
}

export default connect(mapStateToProps)(ClassRoomData)