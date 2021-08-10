import {blue, deepOrange} from "@material-ui/core/colors";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
const { makeStyles } = require("@material-ui/core");
const drawerWidth = 350
const style = makeStyles(theme => ({
    drawerPaper: {
        width: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    root: {
        height: '100%',
        display: 'flex'
    },
    content: {
        height: '100%',
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    navChat: {

        borderBottom:'1px solid #d3d3d3',
    },
    chatButtons: {
        display: 'flex',
        textAlign:'center',
        color: '#333',

        borderBottom:'1px solid #d3d3d3',
    },
    leftDrawerButtons: {
        display: 'flex',
        flex:1,
        "& div": {
            marginLeft: 10,
            marginTop:5,
            marginBottom:5,
            cursor: 'pointer',
        },
    },
    rightDrawerButton:{
        marginLeft: 10,
        marginTop:5,
        marginBottom:5,
        cursor: 'pointer',
        marginRight: 10
    }

}))

export default style