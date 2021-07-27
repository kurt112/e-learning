/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core"
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {
    getCurriculumBasic
} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/CurriculumProfile";
import UpdateCurriculumDialog from "./UpdateCurriculumDialog";
import InsertSubjectInCurriculum from "./InsertSubjectInCurriculum";

const FindCurriculumDialog = ({
                                  translation,
                                  dialog,
                                  closeDialog,
                                  reInitState,
                                  update,
                                  insertSubject,
                                  setData
                              }) => {

    const [id, setId] = useState('')
    const [curriculum, setCurriculum] = useState(null)


    const getCurriculum = () => {
        graphQlRequestAsync(getCurriculumBasic(id)).then(curriculum => {
            if (curriculum.data.data.getCurriculum !== null) {
                setId('')
                setCurriculum(curriculum.data.data.getCurriculum)
                setData(curriculum.data.data.getCurriculum)
            }else alert('Curriculum Not Found')
        })
    }

    const closeUpdateClick = () => {
        setCurriculum(null)
        reInitState()
    }

    const closeInsertSubjectClick = () => {
        setCurriculum(null)
        reInitState()
    }

    return curriculum === null ?
        <Dialog
            open={dialog}
            onClose={closeDialog}
            aria-labelledby="add-student"
            maxWidth="lg"
            fullWidth
        >
            <form noValidate>
                <DialogTitle
                    id="add-student">{translation.language["label.curriculum.dialog.find.title"]}</DialogTitle>
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
                                       label={translation.language["label.curriculum.dialog.input.enter.code"]}/>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation onClick={getCurriculum}
                            color='primary'>
                        {translation.language["label.global.find"]}
                    </Button>
                    <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog> : update === true ?
            <UpdateCurriculumDialog
                translation={translation}
                dialog={update}
                closeDialog={closeUpdateClick}
            /> :
            <InsertSubjectInCurriculum open={insertSubject}
                                       closeDialog={closeInsertSubjectClick}
                                       translation={translation}
                                       curriculumCode={curriculum.code}
                                       subjects={curriculum.subjects}
                                       name={curriculum.name}/>
}

export default FindCurriculumDialog