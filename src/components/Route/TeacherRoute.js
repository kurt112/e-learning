// // components for teacher UI
import {lazy, Fragment} from "react";
import {Redirect, Route} from "react-router";

const TeacherSubjects = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherSubject })))
const TeacherStudent = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherStudents })))
const TeacherActivity = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherActivity })))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )

const TeacherRoute = () => {
    return (
        <Fragment>
            <Route path='/teacher/subjects' exact render={() => <TeacherSubjects/>}/>
            <Route path='/teacher/students' exact render={() => <TeacherStudent/>}/>
            <Route path='/teacher/activities' exact render={() => <TeacherActivity/>}/>
            <Route path='/teacher/classes' exact render={() => <Classes/>}/>
            <Redirect to={'teacher/classes'}/>
        </Fragment>
    )
}

export default TeacherRoute