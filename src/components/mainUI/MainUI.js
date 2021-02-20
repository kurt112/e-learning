import { lazy, Suspense, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import style from './MainUiStyle'
import Sidebar from './sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { Route, Switch } from 'react-router';
import Skeleton from '../ui/utils/skeleton/TableUISkeleton'

// import ActivityList from "../ui/__user_ui/admin/acitivity-list/ActivityList";

// components for Admin UI
const DashBoard = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.DashBoard })))
const TeacherList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.TeacherList })))
const StudentList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.StudentList })))
const RoomList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.RoomList })))
const SubjectList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.SubjectList })))
const ActivityList = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({ default: module.ActivityList })))
const RoomClass = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomClassList})))
const RoomShift = lazy(() => import('../ui/__user_ui/admin/Admin').then(module => ({default: module.RoomShift})))



// // components for teacher UI
// const TeacherProfile = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherProfile })))
const TeacherSubjects = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherSubject })))
const TeacherStudent = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherStudents })))
const TeacherActivity = lazy(() => import('../ui/__user_ui/teacher/Teacher').then(module => ({ default: module.TeacherActivity })))


// // components for student UI
// const StudentProfile = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentProfile })))
const StudentSubject = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentSubjects })))
const StudentTeacher = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentTeachers })))
const StudentActivity = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({ default: module.StudentActivity })))


// universal Component
const Classes = lazy(() => import('../ui/__user_ui/roomClasses/ClassList/ClassesList') )


export default function MainUi() {
    const classes = style();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);

    };

    return (
        <div className={classes.root}>
            <CssBaseline />


                <Navbar open={open} handleDrawerOpen={handleDrawerOpen}  />
                <Sidebar open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>


                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {
                        <Suspense fallback={<Skeleton/>}>
                            <Switch>
                                <Route path='/admin/dashboard' exact render={() => <DashBoard/>}/>
                                <Route path='/admin/student-list' exact render={() => <StudentList/>}/>
                                <Route path='/admin/teacher-list' exact render={() => <TeacherList/>}/>
                                <Route path='/admin/room-list' exact render={() => <RoomList/>}/>
                                <Route path='/admin/subject-list' exact render={() => <SubjectList/>}/>
                                <Route path='/admin/activity-list' exact render={() => <ActivityList/>}/>
                                <Route path='/admin/classes-list' exact render={() => <RoomClass/>}/>
                                <Route path='/admin/room-shift' exact render={() =><RoomShift/>}/>


                                {/*<Route path='/teacher/profile' exact render={() => <TeacherProfile/>}/>*/}
                                <Route path='/teacher/classes' exact render={() => <Classes/>}/>
                                <Route path='/teacher/subjects' exact render={() => <TeacherSubjects/>}/>
                                <Route path='/teacher/students' exact render={() => <TeacherStudent/>}/>
                                <Route path='/teacher/activities' exact render={() => <TeacherActivity/>}/>

                                {/*<Route path='/student/profile' exact render={() => <StudentProfile/>}/>*/}
                                <Route path='/student/subjects' exact render={() => <StudentSubject/>}/>
                                <Route path='/student/teachers' exact render={() => <StudentTeacher/>}/>
                                <Route path='/student/activities' exact render={() => <StudentActivity/>}/>
                                <Route path='/student/classes' exact render={() => <Classes/>}/>
                            </Switch>
                        </Suspense>
                    }

                </main>
        </div>
    );
}