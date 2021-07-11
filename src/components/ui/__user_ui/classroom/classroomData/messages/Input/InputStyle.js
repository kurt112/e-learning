/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
const { makeStyles } = require("@material-ui/core");

const styles = makeStyles(() => ({
    rightMessageTool: {
        '& div': {
        },
        '& form ': {
            display: 'flex',
            flexDirection: 'center'
        },
        '& input': {
            width: '100%',
            fontSize: ' 1.2em',
            backgroundColor: '#f7f7f7',
            margin: '10px 0px',
            marginBottom: 10,
            marginLeft: 10,
            border: '1px solid grey',
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 20,
            height: 40
        },
        '& input:focus, textarea:focus, select:focus': {
            outline: 'none'
        },
        '& .button': {
            color: ' #2979FF !important',
            textTransform: 'uppercase',
            margin: '0px 0px',
            border: 'none',
            marginRight: 10,
            fontSize: 45,
            marginTop: 12,
            marginLeft: 10
        },
    },
}))

export default styles