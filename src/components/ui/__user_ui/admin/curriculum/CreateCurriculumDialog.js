import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid, TextareaAutosize,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as dialogAction from '../../../../../store/action/admin/Curriculum/CreateCurriculumDialogAction'
import {Curriculum_Create} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import Divider from "@material-ui/core/Divider";

const CreateCurriculumDialog = ({
                                    closeDialog,
                                    dialog,
                                    dialogState,
                                    changeName,
                                    changeDescription,
                                    registerDialogMessageClose,
                                    registerDialog
                                }) => {

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-curriculum"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-curriculum">Create Curriculum</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Room Register Not Successful"
                          messageSuccess="Register Room Success"/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Curriculum Name"
                            value={dialogState.name}
                            onChange={(event) => changeName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{margin: 0}}>Enter Curriculum Description:</p>
                        <TextareaAutosize
                            rows={12}
                            style={{width: '100%'}}
                            margin="dense"
                            value={dialogState.description}
                            onChange={(event) => changeDescription(event.target.value)}

                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={registerDialog} color='primary'>
                    Register
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>
}

const mapStateToProps = (state) => {
    return {
        dialogState: state.CreateCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {


        changeName: (data) => dispatch(dialogAction.changeName(data)),
        changeDescription: (data) => dispatch(dialogAction.changeDescription(data)),


        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(Curriculum_Create)),
        registerDialog: () => dispatch(action.dialogRegister(Curriculum_Create))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumDialog)