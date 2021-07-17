/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Redirect, Route} from "react-router";
import {Fragment, lazy} from "react";
import ProfileRoute from "./ProfileRoute";
import { useLocation } from 'react-router-dom'

const DashBoard = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.DashBoard})))
const TeacherList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.TeacherList})))
const StudentList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.StudentList})))
const RoomList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomList})))
const SubjectList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.SubjectList})))
const RoomClass = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomClassList})))
const RoomShift = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomShift})))
const StrandAndCourse = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.StrandAndCourse})))

const AdminRoute = ({translation}) => {
    const location = useLocation();
    return (
        <Fragment>
            <Route path={translation.language["route.admin.dashboard"]} exact
                   render={() => <DashBoard translation={translation}/>}/>
            <Route path={translation.language["route.admin.student.list"]} exact
                   render={() => <StudentList translation={translation}/>}/>
            <Route path={translation.language["route.admin.teacher.list"]} exact
                   render={() => <TeacherList translation={translation}/>}/>
            <Route path={translation.language["route.admin.room.list"]} exact
                   render={() => <RoomList translation={translation}/>}/>
            <Route path={translation.language["route.admin.subject.list"]} exact
                   render={() => <SubjectList translation={translation}/>}/>
            <Route path={translation.language["route.admin.classes.list"]} exact
                   render={() => <RoomClass translation={translation}/>}/>
            <Route path={translation.language["route.admin.room.shift"]} exact
                   render={() => <RoomShift translation={translation}/>}/>
            <Route path={translation.language["route.admin.curriculum"]} exact
                   render={() => <StrandAndCourse translation={translation}/>}/>
            <ProfileRoute translation={translation}/>
            {
                location.pathname === '/'? <Redirect to={translation.language["route.admin.dashboard"]}/>:null
            }

        </Fragment>
    )
}

export default AdminRoute