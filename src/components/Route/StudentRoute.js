import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {getStudentDataByEmail} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {
    StudentInsertTeacher as insertTeacher,
    StudentInsertSubject as insertSubject,
} from "../ui/utils/tableColumn";
const StudentSubject = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentSubjects})))
const StudentTeacher = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTeachers})))
const StudentActivity = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentActivity})))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList'))

const StudentRoute = ({email}) => {

    const [student, setStudent] = useState(null);
    const [teachers,setTeacher] = useState([])
    const [subjects, setSubjects] = useState([])

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
            student.roomShiftClasses.map(e => {
                tempTeacher.push(insertTeacher(e.teacher.user.firstName, e.teacher.user.lastName, e.subject.subjectName, e.teacher.user.email))
                tempSubject.push(insertSubject(e.subject.subjectName,e.subject.subjectCode,e.startTime,e.endTime,e.subject.subjectMajor))
            })

            setTeacher(tempTeacher)
            setSubjects(tempSubject)
        }
    },[student])

    return student === null ? null :
        <Fragment>
            <Route path='/student/subjects' exact render={() => <StudentSubject subjects={subjects}/>}/>
            <Route path='/student/teachers' exact render={() => <StudentTeacher teachers={teachers}/>}/>
            <Route path='/student/activities' exact render={() => <StudentActivity student={student}/>}/>
            <Route path='/student/classes' exact render={() => <Classes classes={student.roomShiftClasses}/>}/>
            <Redirect to='/student/classes'/>
        </Fragment>
}

export default StudentRoute