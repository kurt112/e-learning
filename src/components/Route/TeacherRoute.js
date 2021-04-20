// // components for teacher UI
import {lazy, Fragment, useState, useEffect} from "react";
import {Redirect, Route} from "react-router";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {getTeacherDataByEmail} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery/TeacherDataQuery";
import {TeacherInsertStudent as insertStudent } from '../ui/utils/tableColumn'
import { TeacherInsertSubject as insertSubject } from '../ui/utils/tableColumn'

// import {get} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery";
const TeacherSubjects = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({default: module.TeacherSubject})))
const TeacherStudent = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({default: module.TeacherStudents})))
const TeacherActivity = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({default: module.TeacherActivity})))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList'))

const TeacherRoute = ({email}) => {

    const [teacher, setTeacher] = useState(null)
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [classes, setClasses] = useState()

    useEffect(() => {

        async function fetchData() {
            return await graphQlRequestAsync(getTeacherDataByEmail(email))
        }

        fetchData().then(r =>{
            setTeacher(r.data.data.getTeacherByUserEmail)
        })

    }, [])

    useEffect(  () => {

        if (teacher) {

            setClasses(teacher.roomShiftClasses)
            const tempStudent = []
            const tempSubject = []
            teacher.roomShiftClasses.map(e => {

                const roomShift = e.roomShift
                const students = e.students
                const subject = e.subject

                students.map(student => {
                    const user = student.user
                    tempStudent.push(insertStudent(user.firstName, user.lastName,roomShift.grade,roomShift.section,e.subject.subjectName,`${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`,user.email))
                })

                tempSubject.push(insertSubject(subject.subjectName, subject.subjectCode,subject.subjectMajor))

            })


            setStudents(tempStudent)
            setSubjects(tempSubject)


        }
    }, [teacher])


    return (
        <Fragment>
            <Route path='/teacher/subjects' exact render={() => <TeacherSubjects subjects={subjects}/>}/>
            <Route path='/teacher/students' exact render={() => <TeacherStudent students={students}/>}/>
            <Route path='/teacher/activities' exact render={() => <TeacherActivity/>}/>
            <Route path='/teacher/classes' exact render={() => <Classes classes={classes}/>}/>
            <Redirect to={'teacher/classes'}/>
        </Fragment>
    )
}

export default TeacherRoute