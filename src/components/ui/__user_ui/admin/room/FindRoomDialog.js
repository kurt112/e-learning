/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core"
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {getRoomBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomProfile";
import UpdateRoomDialog from "./UpdateRoomDialog";

const FindRoomDialog = ({
                            translation,
                            dialog,
                            closeDialog,
                            setData,
                            reInitState
                        }) => {

    const [id, setId] = useState('')
    const [update, setUpdate] = useState(false)

    const getRoom = () => {
        graphQlRequestAsync(getRoomBasic(id)).then(room => {
            if(room.data.data.room !== null){
                setId('')
                setData(room.data.data.room)
                setUpdate(true)
            }else alert(translation.language['validation.room.invalid'])


        })
    }

    const closeUpdate = () => {
        reInitState()
        setUpdate(false)
    }

    return update === false ? <Dialog
            open={dialog}
            onClose={closeDialog}
            aria-labelledby="add-student"
            maxWidth="lg"
            fullWidth
        >
            <form noValidate>
                <DialogTitle
                    id="add-student">{translation.language["label.room.dialog.find.room.title"]}</DialogTitle>
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
                                       placeholder={translation.language["label.room.dialog.delete.input"]}/>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation onClick={getRoom}
                            color='primary'>
                        {translation.language["label.global.find"]}
                    </Button>
                    <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog> :
        <UpdateRoomDialog translation={translation} dialog={update} closeDialog={closeUpdate}/>
}

export default FindRoomDialog