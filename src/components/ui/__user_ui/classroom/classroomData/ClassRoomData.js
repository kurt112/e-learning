/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Drawer, Grid, Hidden} from "@material-ui/core"
import GroupSharpIcon from "@material-ui/icons/GroupSharp"
import ForumSharpIcon from "@material-ui/icons/ForumSharp"
import Messages from "./messages/Messages"
import Participant from "./Participants/Participant"
import Input from "./messages/Input/Input"
import {Fragment, useEffect, useState} from "react"
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import Members from "./members/Members"
import {connect} from "react-redux"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import {baseUrl} from "../../../../../store/middleware/axios";
import {studentAttendance} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {Student} from "../../../../../store/utils/Specify";

const ClassRoomData = ({
                           classes,
                           onClose,
                           messages,
                           name,
                           chatDrawer,
                           small,
                           setMessage,
                           io,
                           path,
                           role
                       }) => {
    const [offlineUsers, setOfflineUsers] = useState([])
    const [onlineUsers, setOnlineUser] = useState([])
    const [messageTab, setMessageTab] = useState(false)
    const [participantTab, setParticipantTab] = useState(true)
    const [membersTab, setMembersTab] = useState(false)
    const socket = io.socket


    useEffect(() => {
        socket.emit('users', () => {

        })

        socket.on('getUsers', (e) => {
            const {students, teacher} = e.classes
            const tempOffline = []
            const tempOnline = []
            const map = new Map()

            e.users.map(e => {
                return map.set(e.username, e.username)
            })

            students.map(student => {
                const username = `${student.user.firstName} ${student.user.lastName}`
                console.log(student)
                const data = {
                    ...student.user,
                    id: student.student_id
                }
                if (map.get(username) === undefined) tempOffline.push(student.user)
                else tempOnline.push(data)

            })

            if (teacher !== null) {
                const username = `${teacher.user.firstName} ${teacher.user.lastName}`
                if (map.get(username) === undefined) tempOffline.push(teacher.user)
                else tempOnline.push(teacher.user)
            }

            setOnlineUser(tempOnline)
            setOfflineUsers(tempOffline)

        })
    }, [])


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

    const attendanceClick = () => {
        onlineUsers.map(user => {

            if (user.id === undefined) return;

            const params = new URLSearchParams();

            params.append('id', user.id)
            params.append('class-id', path)

            baseUrl.post(studentAttendance, params).then(ignored => {
            })
        })

        alert("Attendance Done Complete")
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

                    {
                        role !== Student ? <Grid item onClick={attendanceClick}>
                            <DoneOutlineIcon fontSize="large"/>
                            <br/>
                            <span>Attendance</span>
                        </Grid> : null
                    }

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

            <Participant visible={participantTab} path={path}/>

            {
                membersTab ?
                    <Members offlineUsers={offlineUsers} onlineUsers={onlineUsers}/> : null
            }

        </Drawer>
    )
}

const mapStateToProps = (state) => {
    return {
        io: state.Socket
    }
}

export default connect(mapStateToProps)(ClassRoomData)