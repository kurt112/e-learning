import {lazy, Fragment} from "react";
import {Route} from "react-router";

const RoomProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomProfile})))
const RoomShiftClassProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomShiftClassProfile})))
const SubjectProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.SubjectProfile})))
const RoomShiftProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.RoomShiftProfile})))
const TeacherProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({ default: module.TeacherProfile })))
const StudentProfile = lazy(() => import('../ui/__user_ui/profiles/Profile').then(module => ({default: module.StudentProfile})))

// const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )

const ProfileRoute = ({translation}) => {
    return (
        <Fragment>
            <Route path={`${translation.language["route.profile.room"]}:id`} exact render={() => <RoomProfile />}/>
            <Route path={`${translation.language["route.profile.subject"]}:id`} exact render={() => <SubjectProfile />}/>
            <Route path={`${translation.language["route.profile.teacher"]}:id`} exact render={() => <TeacherProfile/>}/>
            <Route path={`${translation.language["route.profile.student"]}:id`} exact render={() => <StudentProfile/>}/>
            <Route path={`${translation.language["route.profile.room.shift"]}:id`} exact render ={() => <RoomShiftProfile/>}/>
            <Route path={`${translation.language["route.profile.room.shift.class"]}:id`} exact render={() => <RoomShiftClassProfile/>}/>

            {/*<Route path='/classes/profile/:id' exact render={() => <Classes {...props} />}/>*/}
        </Fragment>
    )
}

export default ProfileRoute