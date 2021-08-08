/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from '@material-ui/core/styles';
import {blue, deepOrange, deepPurple} from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
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
        '& p': {
            fontSize: 20
        },
        marginTop: 20,
        marginBottom:20
    },
    profileName: {
        margin: 'auto',
        marginTop: 10,
        minWidth: 100
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
    buttonGroup: {
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
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
        '& > *': {
            margin: theme.spacing(1),
        },
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

    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },

    alignRight: {
        textAlign: 'right'
    },

    alignCenter : {
        textAlign:'center'
    }

}))


export default style;
