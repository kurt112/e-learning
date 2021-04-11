import {makeStyles} from "@material-ui/styles";

const activityStyle = makeStyles((theme) => ({
    subjectName: {
        textAlign: 'center',
        marginTop: 10,
    },
    inline: {
        display: 'inline',
    },
    leftText: {
        flex: 1,
    },
    rightText:{
        flex: 'none',
        fontSize: '10px !important',
        '& span':{
            // fontSize: 13
        }
    },

}))

export default activityStyle