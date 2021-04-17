// // components for teacher UI
import {lazy, Fragment, useState, useEffect} from "react";
import {Redirect, Route} from "react-router";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
// import {get} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery";

const TeacherSubjects = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherSubject })))
const TeacherStudent = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherStudents })))
const TeacherActivity = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherActivity })))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )

const TeacherRoute = ({email}) => {
    const [student, setStudent] = useState(null);
    const [teachers,setTeacher] = useState([])
    const [subjects, setSubjects] = useState([])



    // useEffect(() => {
    //
    //     async function fetchData() {
    //         return await graphQlRequestAsync(getTeac(email))
    //     }
    //
    //     fetchData().then(r => {
    //         setStudent(r.data.data.getStudentByUserID)
    //     })
    //
    //
    // }, [email])

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