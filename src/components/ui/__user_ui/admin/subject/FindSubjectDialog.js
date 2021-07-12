/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

import {useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core"
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {getSubjectBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/SubjectProfile";
import UpdateSubjectDialog from "./UpdateSubjectDialog";

const FindSubjectDialog = ({
                               translation,
                               dialog,
                               closeDialog,
                               setData,
                               reInitState
                           }) => {

    const [code, setCode] = useState('')
    const [update, setUpdate] = useState(false)

    const getSubject = () => {
        graphQlRequestAsync(getSubjectBasic(code)).then(subject => {

            if (subject.data.data.getSubject !== null) {
                setCode('')
                setData(subject.data.data.getSubject)
                setUpdate(true)
            }
        })
    }

    const closeUpdate = () => {
        // reInitState()
        reInitState()
        setUpdate(false)
    }

    return update === false ? <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="find-subject"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle
                id="find-subject">{translation.language["label.curriculum.dialog.find.curriculum.title"]}</DialogTitle>
            <Divider/>
            <br/>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField autoFocus
                                   value={code}
                                   margin={'dense'}
                                   variant={'outlined'} fullWidth
                                   onChange={event => setCode(event.target.value)}
                                   label={translation.language["label.subject.dialog.input.code"]}/>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={getSubject}
                        color='primary'>
                    {translation.language["label.global.find"]}
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    {translation.language["label.button.back"]}
                </Button>
            </DialogActions>
        </form>
    </Dialog> : <UpdateSubjectDialog translation={translation} closeDialog={closeUpdate} dialog={update}/>
}

export default FindSubjectDialog