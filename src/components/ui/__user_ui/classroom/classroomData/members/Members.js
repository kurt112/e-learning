import {Avatar, Badge, Grid, withStyles} from "@material-ui/core";
import {Fragment, useEffect, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {deepOrange, green} from "@material-ui/core/colors";
import {S3BucketEndPoint} from "../../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 05/08/2021, Thursday
 **/

const OnlineBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
        top: 35,

    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const OfflineBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: 'grey',
        color: 'grey',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
        top: 35,

    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'default',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        fontSize: 18,
        alignItems: 'center',
        flex: 1,
    },

    avatar: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
    }
}));

const Members = ({io}) => {
    const classes = useStyles()
    const socket = io.socket

    const [offlineUsers, setOfflineUsers] = useState([])
    const [onlineUsers, setOnlineUser] = useState([])

    useEffect(() => {
        socket.emit('users', () => {

        })

        socket.on('getUsers', (e) => {
            const {students, teacher} = e.classes
            const tempOffline = []
            const tempOnline = []
            const map = new Map()

            e.users.map(e => {
                map.set(e.username, e.username)
            })

            students.map(student => {
                const username = `${student.user.firstName} ${student.user.lastName}`

                if (map.get(username) === undefined) tempOffline.push(student.user)
                else tempOnline.push(student.user)

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


    return <Fragment>
        {
            onlineUsers.map(user =>
                <Grid key={user.email} container>
                    <div className={classes.root}>
                        <OnlineBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar className={classes.avatar} alt="Remy Sharp"
                                    src={user.picture === '' ? null : S3BucketEndPoint + user.picture}>
                                {`${user.firstName.substring(0, 1)} ${user.lastName.substring(0, 1)}`}
                            </Avatar>
                        </OnlineBadge>

                        <span>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                </Grid>
            )
        }

        {
            offlineUsers.map((user, id) => <Grid key={id} container>
                    <div className={classes.root}>
                        <OfflineBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar className={classes.avatar} alt="Remy Sharp"
                                    src={user.picture === '' ? null : S3BucketEndPoint + user.picture}>
                                {`${user.firstName.substring(0, 1)} ${user.lastName.substring(0, 1)}`}
                            </Avatar>
                        </OfflineBadge>

                        <span>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                </Grid>
            )
        }
    </Fragment>
}

const mapStateToProps = (state) => {
    return {
        io: state.Socket
    }
}

export default connect(mapStateToProps)(Members)