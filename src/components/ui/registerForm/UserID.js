/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider,
    TextField
} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {Fragment} from "react";

const UserId = ({
                    submit,
                    id,
                    changeId,
                    dialog,
                    registerClose,
                    state,
                    translation
                }) => {


    return <Dialog
        open={dialog}
        onClose={registerClose}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"md"}
    >
        <DialogTitle id="add-teacher">
            {translation.language["label.global.check.id"]}
        </DialogTitle>
        <Divider/>
        <DialogContent>

            {
                state.errorPreregister ? <Fragment>
                    <br/>
                    <Alert variant="filled" severity="error">
                        <AlertTitle><strong>{translation.language["validation.invalid.id"]}</strong></AlertTitle>
                        <strong>{state.errorPreregisterMessage}</strong>
                    </Alert>
                    <br/>
                </Fragment> : null
            }

            <TextField
                autoFocus
                margin="dense"
                label={translation.language["label.global.enter.your.id"]}
                type="text"
                value={id}
                fullWidth
                variant={'outlined'}
                onChange={(event) => changeId(event.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'}
                    disableElevation
                    onClick={submit}
                    color='primary'>
                {translation.language["label.button.next"]}
            </Button>
            <Button variant={'contained'}
                    disableElevation
                    color='secondary'
                    onClick={registerClose}
            >
                {translation.language["label.button.cancel"]}
            </Button>
        </DialogActions>

    </Dialog>
}

export default UserId