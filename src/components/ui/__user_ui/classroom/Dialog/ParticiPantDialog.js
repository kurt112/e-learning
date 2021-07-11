/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const PartiPantDialog= ({dialog,closeDialog}) => {
    return (
        <Dialog
            open={dialog}
            onClose={closeDialog}
            aria-labelledby="add-teacher"
        >
            <DialogTitle id="add-teacher"><strong>Participant</strong>

            </DialogTitle>
            <DialogContent>
               <Box>
                   <h1>Wuith BigScreen</h1>
               </Box>
            </DialogContent>
        </Dialog>
    )
}

export default PartiPantDialog