// // components for teacher UI
import {lazy, Fragment, useState, useEffect} from "react";
import {Redirect, Route} from "react-router";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {
    getTeacherClasses,
    getTeacherDataByEmail
} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery/TeacherDataQuery";
import {TeacherInsertStudent as insertStudent, TeacherInsertSubject as insertSubject} from '../ui/utils/tableColumn'


// import {get} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery";
const TeacherSubjects = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherSubject})))
const TeacherStudent = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherStudents})))
const TeacherActivity = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherActivity})))
const TeacherResources = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherResources})))
const TeacherAssignments = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherAssignments})))
const TeacherExams = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherExams})))
const TeacherQuizzes = lazy(() => import(`../ui/__user_ui/teacher`).then(module => ({default: module.TeacherQuizzes})))
const Classes = lazy(() => import(`../ui/__user_ui/roomClasses/ClassList/ClassesList`))

const TeacherRoute = ({email}) => {

    const [teacher, setTeacher] = useState(null)
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()

    useEffect(() => {
        fetchData().then(r => {
            console.log(r.data.data.getTeacherByUserEmail.id)
            setTeacher(r.data.data.getTeacherByUserEmail)
        })
    }, [])

    async function fetchData() {
        return await graphQlRequestAsync(getTeacherDataByEmail(email))
    }

    useEffect(() => {

        if (teacher) {
            const tempStudent = []
            const tempSubject = []

            graphQlRequestAsync(getTeacherClasses(teacher.id, 1)).then(e => {
                const classes = e.data.data.getTeacherClasses
                setCurrentClass(classes)

                // eslint-disable-next-line array-callback-return
                classes.map(c => {
                    const students = c.students
                    const roomShift = c.roomShift
                    const subject = c.subject
                    console.log(c)

                    // eslint-disable-next-line array-callback-return
                    students.map(student => {
                        const user = student.user
                        tempStudent.push(insertStudent(user.firstName, user.lastName, roomShift.grade, roomShift.section, subject.subjectName, `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`, user.email))
                    })

                    tempSubject.push(insertSubject(subject.subjectName, subject.subjectCode, subject.subjectMajor))
                })


                setSubjects(tempSubject)
                setStudents(tempStudent)
            })


            graphQlRequestAsync(getTeacherClasses(teacher.id, 0)).then(e => {
                const classes = e.data.data.getTeacherClasses
                setDoneClass(classes)
            })

        }
    }, [teacher])

    return (
        <Fragment>
            <Route path='/teacher/subjects' exact render={() => <TeacherSubjects subjects={subjects}/>}/>
            <Route path='/teacher/students' exact render={() => <TeacherStudent students={students}/>}/>
            <Route path='/teacher/task' exact render={() => <TeacherActivity/>}/>
            <Route path='/teacher/classes' exact render={() => <Classes currentClass={currentClass} archiveClass={doneClass}/>}/>
            <Route path='/teacher/resources' exact render={() => <TeacherResources resources={teacher.resources}/>}/>
            <Route path='/teacher/assignments' exact render={() => <TeacherAssignments/>}/>
            <Route path='/teacher/exams' exact render={() => <TeacherExams/>}/>
            <Route path='/teacher/quizzes' exact render={() => <TeacherQuizzes/>}/>

            <Redirect to={'teacher/classes'}/>
        </Fragment>
    )
}

export default TeacherRoute