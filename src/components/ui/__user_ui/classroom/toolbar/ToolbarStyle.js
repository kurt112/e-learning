/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {makeStyles} from "@material-ui/core";

const style = makeStyles((theme) => ({
    leftBottomToolbar: {
        overflow: 'auto',

        borderTop: '1px solid #d3d3d3',
        display: 'flex',
        height:72,
        color: '#333',
        fontFamily: 'Segoe UI Semibold',
        [theme.breakpoints.down('sm')]: {

            // overflow: 'hidden !important',
            // webkitScrollbar: {
            //     backgroundColor: 'orange !important'
            // }
        }
    },
    leftBottomToolbarLeft: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 'auto',
        "& div": {
            marginLeft: 20,
            cursor: 'pointer',
        },

    },
    leftBottomToolbarmiddle: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        "& div": {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: 5,
            paddingLeft: 5,
            marginRight: 10,
            marginLeft: 10,
            borderRight: '1px solid #d3d3d3',
            borderLeft: '1px solid #d3d3d3',
        }

    },
    leftBottomToolbarRight: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
        alignItems: 'center',
        "& div": {
            marginRight: 20,
            cursor: 'pointer',
        },
        [theme.breakpoints.up('md')]: {

        }


    },
    centerItem: {
        textAlign: 'center',
    },
}))

export default style