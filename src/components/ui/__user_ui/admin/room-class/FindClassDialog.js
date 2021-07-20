import {useState} from "react";
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core";
import {getRoomShiftClassBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomShiftClassProfile";
import UpdateClassDialog from "./UpdateClassDialog";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 20/07/2021, Tuesday
 **/

const FindClassDialog = ({
                             translation,
                             dialog,
                             closeDialog,
                             setData,
                             reInitState
                         }) => {

    const [id, setId] = useState('')
    const [update, setUpdate] = useState(false)

    const getClass = () => {
        graphQlRequestAsync(getRoomShiftClassBasic(id)).then(roomClass => {

            if (roomClass.data.data.roomShiftClass !== null) {
                setId('')
                setData(roomClass.data.data.roomShiftClass)
                setUpdate(true)
            }
        })
    }

    const closeUpdate = () => {
        setUpdate(false)
    }

    const closeFindDialog = () => {
        reInitState()
        closeDialog()
    }

    return update === false ? <Dialog
        open={dialog}
        onClose={closeFindDialog}
        aria-labelledby="find-subject"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle
                id="find-subject">{translation.language["label.room.class.dialog.update.title"]}</DialogTitle>
            <Divider/>
            <br/>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField autoFocus
                                   value={id}
                                   margin={'dense'}
                                   variant={'outlined'} fullWidth
                                   onChange={event => setId(event.target.value)}
                                   label={translation.language["label.room.class.dialog.input"]}/>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={getClass}
                        color='primary'>
                    {translation.language["label.global.find"]}
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeFindDialog} color='secondary'>
                    {translation.language["label.button.back"]}
                </Button>
            </DialogActions>
        </form>
    </Dialog> : <UpdateClassDialog translation={translation} closeDialog={closeUpdate} dialog={update}/>
}
export default FindClassDialog