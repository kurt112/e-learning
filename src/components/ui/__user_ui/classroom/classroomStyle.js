const { makeStyles } = require("@material-ui/core");

const style = makeStyles(theme => ({
    classroom: {
        backgroundColor: '#f7f7f7',
        height: '100vh',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
    },
    right: {
        borderLeft: '1px solid #d3d3d3',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    navChat: {

        borderBottom:'1px solid #d3d3d3',
    },
    chatButtons: {
        display: 'flex',
        textAlign:'center',
        fontFamily: 'Segoe UI Semibold',
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
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center'
        }

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