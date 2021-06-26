import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: '100%',
        height: 500,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing(1, 0),
        borderWidth: 3
    },
}));

export default useStyles;