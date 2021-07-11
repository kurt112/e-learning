/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({

    messagesTab: {
        flex: 1,
        margin: '0px !important',
        overflowY: 'hidden',

    },
    participantTab: {
        flex: 1,
        margin: '0px !important',
        overflowY: 'scroll',
        "& video": {
            position: 'static',
        },

    },
    lobbyTab: {

         fontFamily: 'Segoe UI Semibold',
        backgroundColor:'white',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        paddingLeft: 20,
        paddingRight:20,
        borderRadius:50,


    },
    lobbyName: {
       flex: 1,
        overflowX:'hidden',
        marginRight: 20
    },
    videoText:{
        // position:'absolute',
        // top:'30%',
        // left:'30%',
        // zIndex: 1
    }
}))


export default style