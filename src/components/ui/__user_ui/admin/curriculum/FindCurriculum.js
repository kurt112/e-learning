import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import {Fragment, useState} from "react"
import InsertSubjectInCurriculum from "./InsertSubjectInCurriculum"
import CurriculumAutoComplete from "../../../utils/autoComplete/ui/CurriculumAutoComplete"

const FindCurriculum = ({
                            translation,
                            closeDialog,
                            dialog,
                        }) => {

    const [transfer, setTransfer] = useState(false);
    const [id, setId] = useState('')

    const OutputCurriculum = (event, value) => {
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
            {id.length === 0 ? null :
                <InsertSubjectInCurriculum curriculumCode={id} translation={translation} open={transfer}
                                           closeDialog={closeTransfer}/>}
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
                            <CurriculumAutoComplete
                                translation={translation}
                                output={OutputCurriculum}
                                autoFocus={true}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} disableElevation color='primary'
                            onClick={id.length === 0 ? null : openTransfer}>
                        {translation.language["label.global.find"]}
                    </Button>
                    <Button variant={'contained'} color='secondary' disableElevation onClick={closeDialog}>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>

    )

}

export default FindCurriculum