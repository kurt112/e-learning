import {Drawer, Grid, Hidden, withStyles} from "@material-ui/core"
import {useEffect, useRef, useState, Fragment} from "react"
import io from 'socket.io-client'
import {ExpressEndPoint} from '../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint'

import style from './classroomStyle'
import moment from 'moment'
import {connect} from 'react-redux'
import ClassRoomData from "./classroomData/ClassRoomData";
import Video from "./video/Video";
import Toolbar from "./toolbar/Toolbar";

const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const StyledDrawer = withStyles({
    paperAnchorRight: {
       width: '100%',
    },

})(Drawer);

const Classroom = (props) => {
    const classes = style();


    const [message, setMessage] = useState('')
    const [receive, setReceive] = useState('')

    const [roomName, setRoom] = useState('')
    const [roomClassName, setClasses] = useState('')
    const [subjectName, setSubject] = useState('')
    const [people, setPeople] = useState([])
    const [messages, setMessages] = useState([])

    const [name] = useState(makeid(5))
    const socket = useRef()
    const [chatDrawer, setDrawer] = useState(false)


    useEffect(() => {

        const m = moment()
        socket.current = io(ExpressEndPoint)

        const path = props.match.params.path
        socket.current.emit('join', {path, name}, () => {

        })

        socket.current.on('roomData', ({users, messages}) => {
            setPeople(users)
            setMessages(messages)
        })

        socket.current.emit('sendMessage', name + ' Has Joined The Class ', m.format('h:mm a'), true, () => setMessage(''))


        return () => {
            socket.current.off('roomData')
        }

    }, [])

    useEffect(() => {


        socket.current.on('message', (message) => {
            setMessages([...messages, message])
        })

        return () => {
            socket.current.off("message");
        };
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault()
        const m = moment()
        if (message) {
            socket.current.emit('sendMessage', message, m.format('h:mm a'), false, () => setMessage(''))
        }

    }





    const drawerClose = () => {
        setDrawer(false)
    }

    const classRoomData =  <ClassRoomData classes={classes}
                                          message={message}
                                          messages={messages}
                                          name={name}
                                          sendMessage={sendMessage}
                                          setMessage={setMessage}
                                          onClose={drawerClose}
    />


    return (
        socket.current === undefined ? null :
            <Grid container className={classes.classroom}>


                <Grid className={classes.left} item xs={12} sm={12} md={props.messageBox ? 9 : 12}
                      lg={props.messageBox ? 9 : 12}>


                    <Video message={receive} socket={socket.current}/>


                    <Toolbar setDrawer={setDrawer}/>


                </Grid>

                {
                    props.messageBox
                        ?
                        <Fragment>
                            <Hidden smDown>
                                {classRoomData}
                            </Hidden>

                            <Hidden mdUp>
                                <StyledDrawer anchor='right' open={chatDrawer}>

                                       {classRoomData}

                                </StyledDrawer>
                            </Hidden>
                        </Fragment>


                        : null
                }


            </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        messageBox: state.Classroom.showMessage
    }
}


export default connect(mapStateToProps)(Classroom)