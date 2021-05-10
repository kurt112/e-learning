 import {Route} from "react-router";
import {Fragment, lazy} from "react";

const DashBoard = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.DashBoard })))
const TeacherList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.TeacherList })))
const StudentList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.StudentList })))
const RoomList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.RoomList })))
const SubjectList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.SubjectList })))
const ActivityList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.ActivityList })))
const RoomClass = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomClassList})))
const RoomShift = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomShift})))

 const AdminRoute = () => {
    return (
        <Fragment>
            <Route path='/admin/dashboard' exact render={() => <DashBoard/>}/>
            <Route path='/admin/student-list' exact render={() => <StudentList/>}/>
            <Route path='/admin/teacher-list' exact render={() => <TeacherList/>}/>
            <Route path='/admin/room-list' exact render={() => <RoomList/>}/>
            <Route path='/admin/subject-list' exact render={() => <SubjectList/>}/>
            <Route path='/admin/activity-list' exact render={() => <ActivityList/>}/>
            <Route path='/admin/classes-list' exact render={() => <RoomClass/>}/>
            <Route path='/admin/room-shift' exact render={() =><RoomShift/>}/>
            <Route path={'/admin/dashboard'}/>
        </Fragment>
    )
}

export default AdminRoute