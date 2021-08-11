import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField} from "@material-ui/core";
import {Fragment, useState} from "react";
import {Alert, AlertTitle} from "@material-ui/lab";
import {baseUrlNoAuth} from "../../../store/middleware/axios";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 12/08/2021, Thursday
 **/




const ForgotPassword = ({
                            submit,
                            open,
                            registerClose,
                            translation,
                            closeDialog
                        }) => {

    const [email,setEmail] = useState('')



    const sendEmail = async () => {

        const params = new URLSearchParams()
        params.append('email',email)
        await baseUrlNoAuth.post("/forgot",params).then(ignored => {
            alert('Forgot Password Email Sent')
        }).catch(ignored => {
            alert('Email Is Not Existing In Our Database')
        })

    }

    return <Dialog
        open={open}
        onClose={registerClose}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"md"}
    >
        <DialogTitle id="add-teacher">
            {translation.language["label.global.check.email"]}
        </DialogTitle>
        <Divider/>
        <DialogContent>


            <TextField
                autoFocus
                margin="dense"
                label={translation.language["label.global.enter.email"]}
                type="text"
                value={email}
                fullWidth
                variant={'outlined'}
                onChange={(event) => setEmail(event.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'}
                    disableElevation
                    onClick={sendEmail}
                    color='primary'>
                {translation.language["label.button.send.email"]}
            </Button>
            <Button variant={'contained'}
                    disableElevation
                    color='secondary'
                    onClick={closeDialog}
            >
                {translation.language["label.button.cancel"]}
            </Button>
        </DialogActions>

    </Dialog>
}


export default ForgotPassword

