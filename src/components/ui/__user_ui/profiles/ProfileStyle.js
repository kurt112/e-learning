import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    avatarContainer: {
        margin: 'auto',
        marginTop: 20
    },
    profileHeader: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column'
    },
    profileData: {
        marginTop: 20,

    },
    profileName: {
        margin: 'auto',
        marginTop: 10,
        minWidth: 100,
        fontFamily: 'Segoe UI Semibold'
    },
    profileButton: {
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
        minWidth: 100,

        "& button": {
            height: 50
        },
        [theme.breakpoints.down('sm')]: {
            "& button": {
                width: '100%',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
            },
        },
    },
    profileInfo: {
        margin: 'auto',
        // backgroundColor: 'pink',
        marginBottom: 20,
    },
    buttonGroup: {
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    profileDataContainer: {
        display: 'flex',
        '& p': {
            fontSize: 20
        }
    },
    profileDataContainertitle: {
        flex: 1,
        '& p': {
            fontWeight: 'bold',
            fontSize: 20
        },
       
    }
}))


export default style;
