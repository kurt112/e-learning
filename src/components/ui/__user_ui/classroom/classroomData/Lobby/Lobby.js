import {Box, Paper} from "@material-ui/core";
import style from '../GlobalStyle'
import Button from "@material-ui/core/Button";
const Lobby = () => {

    const classes = style()

    return (
        <Box className={classes.messagesTab}>

            <Paper className={classes.lobbyTab} >
               <Box className={classes.lobbyName}>
                   <p>asdasdsd</p>
               </Box>
               <Box >
                   <Button color="primary">Accept</Button>
                   <Button color="secondary">Cancel</Button>
               </Box>
            </Paper>
        </Box>
    )
}


export default Lobby