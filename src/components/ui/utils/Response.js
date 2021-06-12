import {LinearProgress, Snackbar} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {Fragment} from "react";

const Response = ({dialogState, registerDialogMessageClose, messageSuccess, messageFail}) => {
    return (
        <Fragment>
            {dialogState.loading === true ?
                <Fragment>
                    <br/>
                    <LinearProgress/>
                </Fragment>: null}
            {
                dialogState.error === true && dialogState.showMessage === true ?
                    <Fragment>
                        <br/>
                        <Alert variant="filled" severity="error">
                            <AlertTitle><strong>{messageFail}</strong></AlertTitle>
                            <strong>{dialogState.message}</strong>
                        </Alert>
                    </Fragment> : null
            }

            {
                dialogState.error === false && dialogState.showMessage === true ?
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={dialogState.showMessage} autoHideDuration={3000} onClose={registerDialogMessageClose}>
                        <Alert onClose={registerDialogMessageClose} severity="success">
                            {messageSuccess}
                        </Alert>
                    </Snackbar> : null
            }
            <br/>
        </Fragment>
    )
}

export default Response