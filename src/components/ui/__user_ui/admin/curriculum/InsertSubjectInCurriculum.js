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

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import {useEffect, useState} from "react";
import {
    getStudentsForRoomShift
} from "../../../../../store/middleware/utils/GraphQlQuery/AdminQuery/AdminRoomShiftQuery";
import {graphQlRequestAsync,PostData } from "../../../../../store/middleware/utils/HttpRequest";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: '100%',
        height: 500,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1, 0),
        borderWidth: 3
    },
}));

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
const InsertSubjectInCurriculumDialog = ({open, closeDialog,translation}) => {

    const classes = useStyles();
    const [checked, setChecked] = useState([])
    const [availStudent, setAvailStudent] = useState([])
    const [roomShiftStudents, setRoomShiftStudents] = useState([])
    const [rightText, setRightText] = useState('')
    const [leftText, setLeftText] = useState('')
    const [roomName, setRoomName] = useState('')
    const [studentHashMap] = useState({})
    let leftChecked = intersection(checked, availStudent)
    let rightChecked = intersection(checked, roomShiftStudents)


    const uploadStudent = (roomShiftID, list) => {


        // This method will post all the student in the room
        // and then it will update all the current students in that room
        const registerStudents = async () => {
            return await list.map((e) => {
                const params = new URLSearchParams();
                params.append('student-id', e.student_id)
                PostData("/admin/add-studentRoomShift", params)
            })
        }

        // Since we Will not do anything we ignore it for now
        registerStudents().then(r => {

        }).catch(error => {
            console.log(error)
        })


        // This post it will update the students in roomShift
        const addStudentInRoomShift = async () => {
            const params = new URLSearchParams();
            params.append('roomShiftID', roomShiftID)
            await PostData("/admin/doneAddingStudentInRoomShift", params)
        }

        // ignore the returning value
        addStudentInRoomShift().then()
    }


    // This method will handle the checkbox in the transfer list;
    const handleToggle = (student) => () => {
        studentHashMap[student.student_id] = student;
        const currentIndex = checked.indexOf(student);

        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(student);
        } else {
            delete studentHashMap[student.student_id]
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }


    // This method transfer the student from the
    // left transfer list to the right transfer list
    const handleCheckedRight = () => {

        const array = roomShiftStudents.concat(leftChecked)
        const uniqueStudent = array.filter((v, i, a) => a.findIndex(t => (t.student_id === v.student_id)) === i);
        const newChecked = not(checked, rightChecked);
        setRoomShiftStudents(uniqueStudent);
        setAvailStudent(not(availStudent, leftChecked));
        newChecked.map((student) => delete studentHashMap[student.student_id])
        const updatedChecked = []

        // eslint-disable-next-line array-callback-return
        Object.entries(studentHashMap).map((e) => {
            const key = e[0]
            updatedChecked.push(studentHashMap[key])
        })
        setChecked(updatedChecked)


    };
    // This method transfer the student from the
    // right transfer list to left right transfer list
    const handleCheckedLeft = () => {
        const array = availStudent.concat(rightChecked)
        const uniqueStudent = array.filter((v, i, a) => a.findIndex(t => (t.student_id === v.student_id)) === i);

        const newChecked = not(checked, leftChecked);


        setAvailStudent(uniqueStudent);
        setRoomShiftStudents(not(roomShiftStudents, rightChecked));

        // eslint-disable-next-line array-callback-return
        newChecked.map((student) => {
            delete studentHashMap[student.student_id]
        })


        const updatedChecked = []


        // eslint-disable-next-line array-callback-return
        Object.entries(studentHashMap).map((e) => {
            const key = e[0]
            updatedChecked.push(studentHashMap[key])
        })


        setChecked(updatedChecked);
    };


    const customList = (title, students, text, changeText) => (

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

                    students.length === 0 ?

                        <p> No Student Currently</p> :

                        students.filter(student => (
                            student.user.firstName +
                            student.user.lastName +
                            student.student_id).toLowerCase().includes(rightText.toLowerCase().replace(/\s+/g, ''))).map((student) => {
                            const labelId = `transfer-list-all-item-${student.student_id}-label`;

                            return (
                                <ListItem key={student.student_id} role="listitem" button
                                          onClick={handleToggle(student)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={checked.indexOf(student) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={`${student.user.lastName} ${student.user.firstName}`}/>
                                </ListItem>
                            );
                        })}
                <ListItem/>
            </List>
        </Card>
    );


    // Getting the current Students in RoomShift and it will re render
    // If the shift id is change
    useEffect(() => {

        // async function fetchData() {
        //     return await graphQlRequestAsync(getRoomShift(shiftID))
        // }


        // fetchData().then(r => {
        //     const response = r.data.data.roomShift
        //     setRoomName(response.grade + ' ' + response.section)
        //     setRoomShiftStudents(response.students)
        // })


    }, [])


    // Getting all the students

    useEffect(() => {

        async function fetchData() {
            return await graphQlRequestAsync(getStudentsForRoomShift(leftText))
        }

        fetchData().then(r => {
            const students = r.data.data.getStudentsForRoomShift

            // eslint-disable-next-line array-callback-return
            students.map((e) => {
                if (studentHashMap[e.student_id]) {
                    studentHashMap[e.student_id] = e;
                }

            })

            const newCheck = [];

            // eslint-disable-next-line array-callback-return
            Object.entries(studentHashMap).map((e) => {
                const key = e[0]
                newCheck.push(studentHashMap[key])
            })


            setAvailStudent(students)
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


                    <Grid container spacing={2} justify="space-between" alignItems="center"
                          className={classes.root}>
                        <Grid md={5} sm={12} xs={12} item>{customList('Available Subject', availStudent, leftText, setLeftText)}</Grid>
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
                            item sm={12} xs={12}>{customList(roomName + ' Current Subject', roomShiftStudents, rightText, setRightText)}</Grid>
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation
                            color='primary'>
                        Save
                    </Button>
                    <Button variant={'contained'} disableElevation onClick={closeDialog} color='Secondary'>
                        Back
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default InsertSubjectInCurriculumDialog