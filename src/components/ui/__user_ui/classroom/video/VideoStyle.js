/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    leftUp: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f7f7f7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& video': {
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
            width: 'auto',
            height: '98%'
        }
    },
}))

export default style