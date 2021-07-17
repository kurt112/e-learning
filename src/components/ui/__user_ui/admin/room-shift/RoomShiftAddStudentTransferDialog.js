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
import {
    getStudentsForRoomShift
} from "../../../../../store/middleware/utils/GraphQlQuery/AdminQuery/AdminRoomShiftQuery";
import {graphQlRequestAsync, PostData} from "../../../../../store/middleware/utils/HttpRequest";
import style from "../../../_style/TransferDialogStyle";
import {AddStudentInRoomShift} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


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
const RoomShiftAddStudentTransfer = ({open, closeDialog, shiftID, translation, studentRoomShift, shiftName}) => {

    const classes = style();
    const [checked, setChecked] = useState([])
    const [availStudent, setAvailStudent] = useState([])
    const [roomShiftStudents, setRoomShiftStudents] = useState(studentRoomShift)
    const [rightText, setRightText] = useState('')
    const [leftText, setLeftText] = useState('')
    const [studentHashMap] = useState({})
    let leftChecked = intersection(checked, availStudent)
    let rightChecked = intersection(checked, roomShiftStudents)


    const uploadStudent = () => {

        const data = {
            students: roomShiftStudents.map(e => e.student_id),
            shiftID
        }
        PostData(AddStudentInRoomShift, data).then(ignored => {
            console.log(ignored)
        }).catch(ignored => {
            console.log(ignored)
        })

        alert("Student Added In RoomShift")
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
                label={translation.language["label.global.student"]}
                type="text"
                value={text}
                onChange={(event => changeText(event.target.value))}
            />

            <List className={classes.list} dense component="div" role="list">

                {

                    students.length === 0 ?

                        <p> {translation.language["label.room.shift.dialog.transfer.student.warning"]}</p> :

                        students.filter(student => (
                            student.user.firstName +
                            student.user.lastName +
                            student.student_id).toLowerCase().includes(text.toLowerCase().replace(/\s+/g, ''))).map((student) => {
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
            <form>
                <DialogContent>
                    <Grid container spacing={2} justify="center" alignItems="center"
                    >
                        <Grid md={5}
                              item sm={12} xs={12}
                        >{customList(translation.language["label.room.shift.dialog.transfer.student.available"], availStudent, leftText, setLeftText)}</Grid>
                        <Grid md={2} sm={12} xs={12} item>
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
                              item sm={12} xs={12}
                        >{customList(shiftName + ' ' + translation.language['label.global.student'], roomShiftStudents, rightText, setRightText)}</Grid>
                    </Grid>

                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation
                            onClick={uploadStudent}
                            color='primary'>
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

export default RoomShiftAddStudentTransfer