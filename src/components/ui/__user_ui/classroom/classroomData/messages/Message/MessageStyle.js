const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    messageBox: {
        background: '#f7f7f7',
        borderRadius: 30,
        padding: '0px 10px',
        color: 'white',
        display: 'inline-block',
        maxWidth: '80%',
    },
    messageText: {
        width: '100%',
        letterSpacing: 0,
        float: 'left',
        fontSize: '17px',
        fontFamily: 'Helvetica',
        wordWrap: 'break-word',
        '& img': {
            verticalAlign: 'middle'
        }
    },
    messageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 5%',
        marginTop: 5,
    },
    sentText: {
        display: 'flex',
        fontSize: 12,
        alignItems: 'center',
        fontFamily: 'Helvetica',
        color: '#828282',
        letterSpacing: '0.3px'
    },

    announcementBox: {
        borderRadius: 100,
        textAlign: 'center',
        width: '70%',
        margin: 'auto',
        marginTop: 5,
    },

    announcementText:{
        width: '100%',
        letterSpacing: 0,
        fontSize: '14px',
        fontFamily: 'Helvetica',
        wordWrap: 'break-word',
        // backgroundColor: 'red',
        cursor: 'default',
        color: 'blue'
    },

    plTen: {
        paddingLeft: 10
    },
    prTen: {
        paddingRight: 10
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    colorWhite: {
        color: 'white'
    },
    colorDark: {
        color: '#353535'
    },

    backgroundBlue: {
        background: '#2979FF'
    },
    backgroundLight: {
        background: '#F3F3F3'
    }
}))


export default style