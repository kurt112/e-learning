import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {getStudentDataByEmail} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {
    StudentInsertTeacher as insertTeacher,
    StudentInsertSubject as insertSubject,
} from "../ui/utils/tableColumn";
const StudentLecture = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentLecture})))
const StudentTodo = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTodo})))
const Classes = lazy(() => import(`../ui/__user_ui/roomClasses/ClassList/ClassesList`))

const StudentRoute = ({email,translation}) => {

    const [student, setStudent] = useState(null);
    const [teachers,setTeacher] = useState([])
    const [subjects, setSubjects] = useState([])

    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()

    useEffect(() => {

        async function fetchData() {
            return await graphQlRequestAsync(getStudentDataByEmail(email))
        }

        fetchData().then(r => {
            setStudent(r.data.data.getStudentByUserEmail)
        })




    }, [email])

    useEffect(() => {
        if(student !== null){
            const tempTeacher = []
            const tempSubject = []

            const tempDoneClass = student.roomShiftClasses.filter(e => e.status ===0)
            const tempCurrentClass = student.roomShiftClasses.filter(e => e.status === 1)

            setCurrentClass(tempCurrentClass)
            setDoneClass(tempDoneClass)

            // eslint-disable-next-line array-callback-return
            tempCurrentClass.map(e => {
                tempTeacher.push(insertTeacher(e.teacher.user.firstName, e.teacher.user.lastName, e.subject.subjectName, e.teacher.user.email))
                tempSubject.push(insertSubject(e.subject.subjectName,e.subject.subjectCode,e.startTime,e.endTime,e.subject.subjectMajor))
            })

            setTeacher(tempTeacher)
            setSubjects(tempSubject)
        }
    },[student])

    return student === null ? null :
        <Fragment>
            <Route path={translation.language["route.student.todos"]} exact render={() => <StudentTodo translation={translation}/>}/>
            <Route path={translation.language["route.student.lectures"]} exact render={() => <StudentLecture translation={translation}/>}/>
            <Route path={translation.language["route.student.classes"]} exact render={() => <Classes translation={translation} currentClass={currentClass} archiveClass={doneClass}/>}/>
            <Redirect to={translation.language["route.student.classes"]}/>
        </Fragment>
}

export default StudentRoute