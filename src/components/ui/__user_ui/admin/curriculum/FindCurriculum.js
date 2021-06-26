import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Fragment, useState} from "react";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {
    changeText, optionLabel, optionSelected,
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from "../../../utils/autoComplete/autoCompleteAction";
import {
    autoCompleteGetCurriculum
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import InsertSubjectInCurriculum from "./InsertSubjectInCurriculum";

const FindCurriculum = ({
                         translation,
                         closeDialog,
                         dialog,
                     }) => {

    const [openSubject, setOpenSubject] = useState(false)
    const [subjectOptions, setSubjectOptions] = useState([])
    const [subjectLoading, setRoomShiftLoading] = useState(false)
    const [subjectText, setSubjectText] = useState('')
    const [transfer, setTransfer] = useState(false);
    const [id, setId] = useState('')

    const OutputSubject = (event, value) => {
        setId(value === null ? '' : value[1].toString())
    }


    const closeTransfer = () => {
        setTransfer(false)
    }

    const openTransfer = () => {
        setTransfer(true)
    }

    return (
        <Fragment>
            {id.length === 0? null: <InsertSubjectInCurriculum curriculumCode={id} translation={translation} open={transfer}
                                                               closeDialog={closeTransfer}/> }
            <Dialog
                open={dialog}
                onClose={closeDialog}
                aria-labelledby="delete-room"
                fullWidth
                maxWidth={"md"}
            >
                <DialogTitle>{translation.language["label.curriculum.dialog.find.curriculum.title"]}</DialogTitle>
                <Divider/>
                <DialogContent>

                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <AutoComplete
                                autoFocus={true}
                                open={openSubject}
                                setOpen={setOpenSubject}
                                filterOptions={TwoFilterOption}
                                options={subjectOptions}
                                loading={subjectLoading}
                                InputText={subjectText}
                                changeAutoComplete={OutputSubject}
                                changeText={(value) => changeText(value, setSubjectText, setRoomShiftLoading, setSubjectOptions, autoCompleteGetCurriculum)}
                                noOptionText={translation.language["label.curriculum.dialog.find.search"]}
                                label={translation.language["label.sidebar.curriculum"]}
                                optionLabel={optionLabel}
                                optionSelected={optionSelected}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} disableElevation  color='primary' onClick={id.length === 0 ? null : openTransfer}>
                        {translation.language["label.global.find"]}
                    </Button>
                    <Button variant={'contained'}  color='secondary' disableElevation onClick={closeDialog}>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>

    )

}

export default FindCurriculum