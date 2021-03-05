import {Redirect, Route} from "react-router";
import {Fragment, lazy} from "react";
const StudentSubject = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentSubjects })))
const StudentTeacher = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentTeachers })))
const StudentActivity = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentActivity })))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )

const StudentRoute = () => {
    return (
        <Fragment>
            <Route path='/student/subjects' exact render={() => <StudentSubject/>}/>
            <Route path='/student/teachers' exact render={() => <StudentTeacher/>}/>
            <Route path='/student/activities' exact render={() => <StudentActivity/>}/>
            <Route path='/student/classes' exact render={() => <Classes/>}/>

            <Redirect to='/student/classes'/>
        </Fragment>

    )
}

export default StudentRoute