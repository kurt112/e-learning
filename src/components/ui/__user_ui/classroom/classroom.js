/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Hidden} from "@material-ui/core"
import {useEffect, useRef, useState} from "react"

import style from './classroomStyle'
import moment from 'moment'
import {connect} from 'react-redux'
import ClassRoomData from "./classroomData/ClassRoomData";
import Toolbar from "./toolbar/Toolbar";
import {graphQlRequestAsync} from "../../../../store/middleware/utils/HttpRequest";
import {
    getRoomShiftClass
} from "../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomShiftClassProfile";
import {Admin, Student, Teacher} from "../../../../store/utils/Specify";
import {baseUrl} from "../../../../store/middleware/axios";
import {teacherAttendance} from "../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


let valid = false
let myId = null
const Classroom = (props) => {

    const classes = style();
    const [receive, setReceive] = useState('')
    const [messages, setMessages] = useState([])
    const [role] = useState(props.user.userRole)
    const [chatDrawer, setDrawer] = useState(true)
    const [name] = useState(`${props.user.firstName} ${props.user.lastName}`)
    const peerRef = useRef()
    const socket = props.io.socket




    const path = props.match.params.path
    useEffect(() => {
        const m = moment()

        const init = async () => {

            const classes = await graphQlRequestAsync(getRoomShiftClass(path))
                .then(e => {

                    if (role === Admin) valid = true


                    const classes = e.data.data.roomShiftClass
                    const {students, teacher} = classes

                    if (role === Teacher) {
                        if (teacher.user.email === props.user.email) valid = true

                        const params = new URLSearchParams();
                        params.append('id', teacher.id)
                        params.append('class-id', path)

                        baseUrl.post(teacherAttendance,params).then(ignored => {})

                    }

                    if (role === Student) {
                        const exist = students.find(e => e.user.email === props.user.email)
                        if (exist) valid = true
                    }

                    return classes
                })


            if (valid === false) props.history.goBack()

            socket.emit('joinClass', {path, name, role,classes}, () => {

            })

            socket.on('classData', ({ messages}) => {
                setMessages(messages)

            })

            socket.emit('sendMessage', name + ' Has Joined The Class ', m.format('h:mm a'), true)



            return () => {
                socket.disconnect();
            }

        }


        init().then(ignored => {})


    }, [])


    const drawerClose = () => {
        setDrawer(false)
    }


    return valid === false ? null :
        <div className={classes.root}>
            <main className={classes.content}>
                {
                    role === Teacher?<video/>:null
                }
                <Toolbar setDrawer={setDrawer} path={path}/>

            </main>


            <Hidden mdUp>
                <ClassRoomData
                    path={path}
                    role={role}
                    classes={classes}
                    messages={messages}
                    setMessage={setMessages}
                    name={name}
                    onClose={drawerClose}
                    chatDrawer={chatDrawer}
                    small={true}
                />
            </Hidden>

            <Hidden mdDown>
                <ClassRoomData
                    path={path}
                    role={role}
                    classes={classes}
                    setMessage={setMessages}
                    messages={messages}
                    name={name}
                    onClose={drawerClose}
                    chatDrawer={chatDrawer}
                    small={false}
                />
            </Hidden>

        </div>
}

const mapStateToProps = (state) => {
    return {
        messageBox: state.Classroom.showMessage,
        io: state.Socket
    }
}


export default connect(mapStateToProps)(Classroom)