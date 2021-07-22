/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from '@material-ui/core/styles';
import {deepPurple} from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        fontSize:60
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
        fontFamily: 'Segoe UI Semibold',
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
        }
    },
    profileDataContainer: {
        display: 'flex',
        '& p': {
            fontSize: 20
        }
    },
    profileDataContainerTitle: {
        flex: 1,
        '& p': {
            fontWeight: 'bold',
            fontSize: 20
        },
       
    },
    peopleListContainer:{
        marginTop: 10
    },
    classDataContainer: {
        display: 'flex',

        paddingLeft: 10,
        borderTop:'1px solid #E0E0E0',
        '& p': {
            marginLeft: 10,
            fontSize: 18,
        }
    },
    classDataContainerLeft:{
        display: 'flex',
        alignItems:"center",
        flex: 1,
    },
    classDataContainerRight: {
        color: 'gray'
    },
    classPeopleDivider: {
        backgroundColor:'blue',
        height: '1px',
        border:'0px'
    },
    dividerNormal:{
        backgroundColor: 'grey',
        border: '0px',
        height: '1px'
    },

    marginZero: {
        margin: 0
    },
    button: {
        margin: theme.spacing(1),
    },

}))


export default style;
