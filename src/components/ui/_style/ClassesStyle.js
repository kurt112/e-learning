/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {makeStyles} from "@material-ui/styles"

const classesStyle = makeStyles(() => ({
    boxNavButtonContainer: {
        marginLeft: 10,
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        flex:1

    },
    boxNavButton: {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
    },

    active: {
        borderBottom: '3px solid orange'
    },

    classesContainer: {
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    className: {
        '& p': {
            fontSize: 25,
            textShadow: '0px 0px 9px #000000',
            padding:0,
            margin: 0,
            whiteSpace:'noWrap',
            overflow:'hidden',
            textOverflow: 'ellipsis'
        }
    },

    classGradeSection: {
        '& p': {
            fontSize: 15,
            padding:0,
            margin: 0,
            fontWeight: "bold",
            whiteSpace:'noWrap',
            overflow:'hidden',
            textOverflow: 'ellipsis'
        }
    },

    classDescription: {
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1,
        overflowX: 'auto',

        textOverflow: 'ellipsis',
        '& p': {

            height: '100%',
        }
    },

    classTeacher: {
        whiteSpace:'noWrap',
        overflow:'hidden',
        textOverflow: 'ellipsis'
    },

    classSubject:{

    },

    classes:{
        position: 'relative',
        width: 300,
        height:300,
        textOverflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: '5%',
        cursor: 'pointer'
    },

    classesTop: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight:10,
        color:'white',
        borderRadius: '5%'
    },

    classFooter: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',

    },

    image: {
        position:"absolute",
        borderRadius: '50%',
        height: 80,
        width: 80,
        right: 10,
        top: 50,
        border: '3px solid white',
        backgroundColor: "#c0392b"
        // right: 0,
    },
    iconsFooter:{

        borderRadius: '50%',
        padding: 5,
        marginTop: 3,
        marginBottom: 3,
        marginRight: 10,
        color: '#5F6368',
        textAlign: "center",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F9F9F9',
        }
    },
    schedule:{
        flex: 1,
        fontWeight: 'bold',
        margin: "auto",
        '& p': {
            color: '#5F6368',
            margin: 0,
        }
    }


}))

export default classesStyle