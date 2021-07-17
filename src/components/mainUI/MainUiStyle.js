/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    content: {
        width: '100%',
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: 20
        },
        marginTop:50
    },
    title: {
        flex: 1
    },


    badge: {
        backgroundColor: 'white !important',
        borderRadius: 50,
        padding: 4,

        marginRight: 10,
    },

    dropDownDark: {
        color: 'black !important',
    },
    dropDownLight: {
        cursor: 'pointer',
        // color:'white',
        backgroundColor: 'white !important',
        borderRadius: 60,
        fontSize: 35,
        marginTop:10,
        marginBottom: 4,
    }

}));

export default useStyles