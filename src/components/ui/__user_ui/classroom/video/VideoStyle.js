/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    video: {

        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        width: '70%',
        height: 'auto'
    },
}))

export default style