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
    DialogTitle,
    Grid,
    TextareaAutosize,
    TextField
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Response from "../../../utils/Response";
import * as dialogAction from "../../../../../store/action/admin/Curriculum/CreateCurriculumDialogAction";
import * as action from "../../../../../store/action/__ActionGlobal/DialogAction";
import {Curriculum_Create} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";

const UpdateCurriculumDialog = ({
                                    closeDialog,
                                    dialog,
                                    dialogState,
                                    changeName,
                                    changeDescription,
                                    registerDialogMessageClose,
                                    registerDialog,
                                    translation,
                                }) => {

    const updateClick = async () => {
        registerDialog()
        await new Promise(r => setTimeout(r, 1000));
        registerDialogMessageClose()
        closeDialog()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-curriculum"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-curriculum">{translation.language["label.curriculum.dialog.create.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.curriculum.dialog.update.fail"]}
                          messageSuccess={translation.language["message.curriculum.dialog.update.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label={translation.language["label.curriculum.dialog.create.input.name"]}
                            value={dialogState.name}
                            onChange={(event) => changeName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{margin: 0}}>{translation.language["label.curriculum.dialog.create.input.description"]}</p>
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
                <Button variant={'contained'} disableElevation onClick={updateClick} color='primary'>
                    {translation.language["label.button.update"]}
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    {translation.language["label.button.back"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCurriculumDialog)