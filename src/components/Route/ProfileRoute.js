import {lazy, Fragment} from "react";
import {Route} from "react-router";

const RoomProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomProfile})))
const RoomShiftClassProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomShiftClassProfile})))
const SubjectProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.SubjectProfile})))
const RoomShiftProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomShiftProfile})))
const TeacherProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({ default: module.TeacherProfile })))
const StudentProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.StudentProfile})))
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )

const ProfileRoute = () => {
    return (
        <Fragment>
            <Route path='/room/profile/:id' exact render={() => <RoomProfile />}/>
            <Route path='/subject/profile/:id' exact render={() => <SubjectProfile />}/>
            <Route path='/teacher/profile/:id' exact render={() => <TeacherProfile/>}/>
            <Route path='/student/profile/:id' exact render={() => <StudentProfile/>}/>
            <Route path='/roomshift/profile/:id' exact render ={() => <RoomShiftProfile/>}/>
            <Route path='/roomShiftClass/profile/:id' exact render={() => <RoomShiftClassProfile/>}/>
            {/*<Route path='/classes/profile/:id' exact render={() => <Classes {...props} />}/>*/}
        </Fragment>
    )
}

export default ProfileRoute