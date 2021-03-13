import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {getStudentDataByEmail} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";

const StudentSubject = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentSubjects})))
const StudentTeacher = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTeachers})))
const StudentActivity = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentActivity})))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList'))

const StudentRoute = ({email}) => {

    const [student, setStudent] = useState(null);

    useEffect(() => {

        async function fetchData() {
            return await graphQlRequestAsync(getStudentDataByEmail(email))
        }

        fetchData().then(r => {
            setStudent(r.data.data.getStudentByUserID)
        })
    }, [email])

    return student === null ? null :
        <Fragment>
            <Route path='/student/subjects' exact render={() => <StudentSubject student={student}/>}/>
            <Route path='/student/teachers' exact render={() => <StudentTeacher student={student}/>}/>
            <Route path='/student/activities' exact render={() => <StudentActivity student={student}/>}/>
            <Route path='/student/classes' exact render={() => <Classes classes={student.roomShiftClasses}/>}/>
            <Redirect to='/student/classes'/>
        </Fragment>
}

export default StudentRoute