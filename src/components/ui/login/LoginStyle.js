/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../assets/img_2.png'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    textSide: {
        marginBottom: 0,
        marginTop: 10,
        color: '#333',
        textShadow: '0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,' +
            '-4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5',
        fontSize: 50,
        cursor:'default',
        fontFamily: 'Segoe UI Semibold'
    },
    image: {
        textAlign: 'center',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        // backgroundSize: '-moz-initial',
        backgroundSize: '65%',
        backgroundPosition: 'top',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    util: {
        display: 'flex',
        justifyContent: 'space-between',
        '& p': {
            color: 'red'
        }
    },

    progress: {
        marginTop: 10,
        width: '100%'
    }

}));

export default useStyles;