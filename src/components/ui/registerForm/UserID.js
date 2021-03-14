import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
const UserId = ({submit,id, changeId,dialog, registerClose}) => {
    return <Dialog
        open={dialog}
        onClose={registerClose}
        aria-labelledby="add-teacher"
        fullWidth={true}
    >
        <DialogTitle id="add-teacher"><strong>Enter Your Id</strong>

        </DialogTitle>
        <DialogContent>


            {/*<DialogContentText style={{color: 'black'}}>*/}


            {/*</DialogContentText>*/}


            <TextField
                autoFocus
                margin="dense"
                id="user-id"
                label="Enter User ID"
                type="number"
                value={id}
                fullWidth
                onChange={(event) => changeId(event.target.value)}
                // onKeyDown={event => {RegisterEnter(event)}}
            />
        </DialogContent>
        <DialogActions>
           <Button onClick={submit} color='primary'>
                next
            </Button>
            <Button color='secondary' onClick={registerClose}>
                Cancel
            </Button>
        </DialogActions>

    </Dialog>
}

export default UserId