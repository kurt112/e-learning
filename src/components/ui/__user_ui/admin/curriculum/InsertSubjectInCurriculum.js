/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    ListItemIcon,
    ListItemText,
    TextField
} from "@material-ui/core";

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import {useEffect, useState} from "react";
import {graphQlRequestAsync, PostData} from "../../../../../store/middleware/utils/HttpRequest";
import style from '../../../_style/TransferDialogStyle'
import {AdminSubjectBodyDataQuery} from "../../../../../store/middleware/utils/GraphQlQuery/AdminQuery/AdminSubjectQuery";
import {searchSubject} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/SubjectProfile";

// Checking if the current check list has a member of the entity
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}


// Getting the intersection between Array
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

/**
 * @param {{student_id:string}} id of the student
 *
 */
const InsertSubjectInCurriculumDialog = (
    {
        open,
        closeDialog,
        translation,
        curriculumCode,
        subjects,
        name
    }) => {

    const classes = style();
    const [checked, setChecked] = useState([])
    const [availableSubjects, setAvailSubjects] = useState([])
    const [curriculumSubjects, setCurriculumSubjects] = useState(subjects)
    const [rightText, setRightText] = useState('')
    const [leftText, setLeftText] = useState('')
    const [subjectHashMap] = useState({})
    let leftChecked = intersection(checked, availableSubjects)
    let rightChecked = intersection(checked, curriculumSubjects)


    const uploadSubjects = () => {
        const data = {
            curriculumCode,
            subjects: curriculumSubjects.map(e => e.subjectCode)
        }

        PostData("/admin/curriculum/add/subject", data).then(r => {
            alert("Subject Add Successful")
        })
    }


    // This method will handle the checkbox in the transfer list;
    const handleToggle = (subject) => () => {
        subjectHashMap[subject.subjectCode] = subject;
        const currentIndex = checked.indexOf(subject);

        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(subject);
        } else {
            delete subjectHashMap[subject.subjectCode]
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }


    // This method transfer the student from the
    // left transfer list to the right transfer list
    const handleCheckedRight = () => {

        const array = curriculumSubjects.concat(leftChecked)
        const uniqueStudent = array.filter((v, i, a) => a.findIndex(t => (t.subjectCode === v.subjectCode)) === i);
        const newChecked = not(checked, rightChecked);
        setCurriculumSubjects(uniqueStudent);
        setAvailSubjects(not(availableSubjects, leftChecked));
        newChecked.map((student) => delete subjectHashMap[student.subjectCode])
        const updatedChecked = []

        // eslint-disable-next-line array-callback-return
        Object.entries(subjectHashMap).map((e) => {
            const key = e[0]
            updatedChecked.push(subjectHashMap[key])
        })
        setChecked(updatedChecked)


    };
    // This method transfer the student from the
    // right transfer list to left right transfer list
    const handleCheckedLeft = () => {
        const array = availableSubjects.concat(rightChecked)
        const uniqueStudent = array.filter((v, i, a) => a.findIndex(t => (t.subjectCode === v.subjectCode)) === i);

        const newChecked = not(checked, leftChecked);


        setAvailSubjects(uniqueStudent);
        setCurriculumSubjects(not(curriculumSubjects, rightChecked));

        // eslint-disable-next-line array-callback-return
        newChecked.map((student) => {
            delete subjectHashMap[student.subjectCode]
        })


        const updatedChecked = []


        // eslint-disable-next-line array-callback-return
        Object.entries(subjectHashMap).map((e) => {
            const key = e[0]
            updatedChecked.push(subjectHashMap[key])
        })


        setChecked(updatedChecked);
    };


    const customList = (title, subjects, text, changeText) => (

        <Card>
            <CardHeader
                className={classes.cardHeader}
                title={title}
            />
            <TextField
                size={"small"}
                style={{marginLeft: 17, width: '90%'}}
                label="Subject"
                type="text"
                value={text}
                onChange={(event => changeText(event.target.value))}
            />

            <List className={classes.list} dense component="div" role="list">
                {
                    subjects.length === 0 ?
                        <p> {translation.language["label.curriculum.dialog.transfer.subject.warning"]}</p> :
                        subjects.filter(subject => (
                            subject.subjectName+
                            subject.subjectCode).toLowerCase().includes(text.toLowerCase())).map((subject) => {
                            const labelId = `transfer-list-all-item-${subject.subjectCode}-label`;
                            return (
                                <ListItem key={subject.subjectCode} role="listitem" button
                                          onClick={handleToggle(subject)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.indexOf(subject) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={`${subject.subjectName} (${subject.subjectCode})`}/>
                                </ListItem>
                            );
                        })}
                <ListItem/>
            </List>
        </Card>
    );


    // Getting all the Subject

    useEffect(() => {
        async function fetchData() {
            return await graphQlRequestAsync(searchSubject(leftText, 0))
        }
        fetchData().then(r => {
            const subjects = r.data.data.searchSubject

            // eslint-disable-next-line array-callback-return
            subjects.map((e) => {
                if (subjectHashMap[e.subjectCode]) {
                    subjectHashMap[e.subjectCode] = e;
                }
            })

            const newCheck = [];

            // eslint-disable-next-line array-callback-return
            Object.entries(subjectHashMap).map((e) => {
                const key = e[0]
                console.log(e[0])
                newCheck.push(subjectHashMap[key])
            })


            setAvailSubjects(subjects)
            setChecked(newCheck)
        })

    }, [leftText])

    return (

        <Dialog
            open={open}
            onClose={closeDialog}
            aria-labelledby="add-student"
            maxWidth={"xl"}
            fullWidth
        >
            <form noValidate>
                <DialogContent>


                    <Grid container spacing={2} justify="space-between" alignItems="center">
                        <Grid md={5} sm={12} xs={12}
                              item>{customList(translation.language["label.curriculum.dialog.add.subject.title.available"], availableSubjects, leftText, setLeftText)}</Grid>
                        <Grid item md={2} sm={12} xs={12}>
                            <Grid container direction="column" alignItems="center">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    className={classes.button}
                                    onClick={handleCheckedRight}
                                    disabled={leftChecked.length === 0}
                                    aria-label="move selected right"
                                >
                                    &gt;
                                </Button>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleCheckedLeft}
                                    disabled={rightChecked.length === 0}
                                    aria-label="move selected left"
                                >
                                    &lt;
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid md={5}
                              item sm={12}
                              xs={12}>{customList(name + " " + translation.language["label.curriculum.dialog.add.subject.title.current"], curriculumSubjects, rightText, setRightText)}</Grid>
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation
                            color='primary' onClick={uploadSubjects}>
                        {translation.language["label.button.save"]}
                    </Button>
                    <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default InsertSubjectInCurriculumDialog