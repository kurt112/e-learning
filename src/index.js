/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import languageReducer from './store/reducers/__StateGlobal/Language'

// Teacher
import {
    DeleteAssignmentDialog,
    DeleteResource,
    TeacherResource,
    UploadResource,
    TeacherAssignment,
    TeacherAssignmentCreateDialog,
    TeacherLectureCreateDialog,
    TeacherLectures,
    TeacherLectureDeleteDialog,
    TeacherExamsCreateDialog,
    TeacherExamsDeleteDialog,
    TeacherExams,
    TeacherQuizzes,
    TeacherQuizCreateDialog,
    TeacherQuizDeleteDialog
} from './store/reducers/Teacher'


//Student
import {
    StudentLectureState,
    StudentTodoState
} from './store/reducers/Student'


import {
    AdminDashBoard,
    AdminRoom,
    AdminRoomDialog,
    AdminStudent,
    AdminStudentDialog,
    AdminSubject,
    AdminTeacher,
    AdminDialogTeacher,
    AdminSubjectDialog,
    AdminClassDialog,
    AdminRoomShiftDialog,
    AdminRoomShift,
    AdminClass,
    DeleteDialogSubject,
    DeleteDialogRoom,
    DeleteDialogClass,
    DeleteDialogRoomShift,
    DeleteDialogStudent,
    DeleteDialogTeacher,
    AdminCurriculum,
    CreateCurriculum,
    DeleteCurriculum,
    InsertCurriculumSubject
} from './store/reducers/Admin'

import Classroom from "./store/reducers/ClassroomState";


// profile
import {
    StudentProfile,
    TeacherProfile,
    RoomProfile,
    RoomShiftProfile,
    RoomShiftClassProfile,
    ActivityProfile
} from './store/reducers/Profile'


// LOGIN
import Login from './store/reducers/LoginLogout/LoginLogoutState'

// Current User
import CurrentUser from "./store/reducers/CurrentUser/CurrentUser";

// Form Register
import {StudentRegisterForm, TeacherRegisterForm} from './store/reducers/RegisterForm'


import {
    watchTeacherUploadResource,
    watchDeleteResource,
    watchTeacherAssignmentInit,
    watchTeacherResourcesInit,
    watchTeacherResourcesSearchChange,
    watchTeacherResourcesTableNext,
    watchTeacherAssignmentSearchChange,
    watchTeacherAssignmentTableNext,
    watchTeacherAssignmentDelete,
    watchTeacherAssignmentCreate,
    watchTeacherLectureInit,
    watchTeacherLectureSearchChange,
    watchTeacherLectureTableNext,
    watchTeacherCreateLecture,
    watchDeleteLecture,
    watchDeleteExams,
    watchTeacherCreateExams,
    watchTeacherExamsInit,
    watchTeacherExamsSearchChange,
    watchTeacherExamsTableNext,
    watchDeleteQuiz,
    watchTeacherQuizExams,
    watchTeacherQuizInit,
    watchTeacherQuizSearchChange,
    watchTeacherQuizTableNext
} from './store/middleware/teacher'

import {
    watchAdminRegisterRoom,
    watchAdminRoomTableInit,
    watchAdminRoomTableNext,
    watchAdminRoomSearchChange,
    watchAdminSubjectRegister,
    watchAdminSubjectSearchChange,
    watchAdminSubjectTableInit,
    watchAdminSubjectTableNext,
    watchAdminRegisterRoomShift,
    watchAdminRoomShiftSearchChange,
    watchAdminRoomShiftTableInit,
    watchAdminRoomShiftTableNext,
    watchAdminRegisterRoomClass,
    watchAdminRoomClassSearchChange,
    watchAdminRoomClassTableInit,
    watchAdminRoomClassTableNext,
    watchStudentInitTableData,
    watchStudentRegisterStudent,
    watchStudentSearchChange,
    watchStudentTableNextData,
    watchAdminRegisterTeacher,
    watchAdminTeacherInitTableData,
    watchTeacherSearchChange,
    watchTeacherTableNextData,
    watchAdminDeleteRoom,
    watchAdminDeleteRoomClass,
    watchAdminTeacherDelete,
    watchDeleteRoomShift,
    watchDeleteStudent,
    watchSubjectDelete,
    watchAdminCurriculumInitTableData,
    watchCurriculumSearchChange,
    watchCurriculumTableNextData,
    watchAdminRegisterCurriculum,
    watchAdminDeleteCurriculum
} from './store/middleware/admin'

import {
    watchStudentGetProfile,
    watchTeacherGetProfile,
    watchRoomGetProfile,
    watchRoomShiftGetProfile,
    watchRoomShiftClassGetProfile
} from './store/middleware/profile'

// import {
//
// } from './store/middleware/student'

import {
    watchLogin,
    watchPreRegister,
    watchReLogin,
    watchLogout
} from './store/middleware/auth'

import {
    watchTeacherRegister,
    watchStudentRegister
} from './store/middleware/register'

import Socket from "./store/reducers/__StateGlobal/Socket";

const reducers = combineReducers({

    // config language
    languageReducer,

    // Teacher State
    TeacherAssignment,
    DeleteResource,
    TeacherResource,
    TeacherAssignmentCreateDialog,
    UploadResource,
    DeleteAssignmentDialog,
    TeacherLectureCreateDialog,
    TeacherLectures,
    TeacherLectureDeleteDialog,
    TeacherExamsCreateDialog,
    TeacherExamsDeleteDialog,
    TeacherExams,
    TeacherQuizzes,
    TeacherQuizCreateDialog,
    TeacherQuizDeleteDialog,

    // Student State
    StudentLectureState,
    StudentTodoState,

    // Admin State
    AdminDashBoard,
    AdminRoom,
    AdminRoomDialog,
    AdminStudent,
    AdminStudentDialog,
    AdminSubject,
    AdminSubjectDialog,
    AdminTeacher,
    AdminDialogTeacher,
    AdminClass,
    AdminClassDialog,
    AdminRoomShiftDialog,
    AdminRoomShift,
    Classroom,
    DeleteDialogSubject,
    DeleteDialogRoom,
    DeleteDialogClass,
    DeleteDialogRoomShift,
    DeleteDialogStudent,
    DeleteDialogTeacher,
    AdminCurriculum,
    CreateCurriculum,
    DeleteCurriculum,
    InsertCurriculumSubject,

    // Profile of Entity
    StudentProfile,
    TeacherProfile,
    RoomProfile,
    RoomShiftProfile,
    RoomShiftClassProfile,
    ActivityProfile,

    // LOGIN
    Login,

    // Current User
    CurrentUser,

    // Register From
    StudentRegisterForm,
    TeacherRegisterForm,

    // config
    Socket
})


const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers
    , composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(watchAdminTeacherInitTableData)
sagaMiddleware.run(watchAdminRegisterTeacher)
sagaMiddleware.run(watchTeacherSearchChange)
sagaMiddleware.run(watchTeacherTableNextData)
sagaMiddleware.run(watchAdminTeacherDelete)

sagaMiddleware.run(watchAdminRegisterRoom)
sagaMiddleware.run(watchAdminRoomTableNext)
sagaMiddleware.run(watchAdminRoomTableInit)
sagaMiddleware.run(watchAdminRoomSearchChange)
sagaMiddleware.run(watchAdminDeleteRoom)

sagaMiddleware.run(watchAdminRegisterRoomShift)
sagaMiddleware.run(watchAdminRoomShiftTableNext)
sagaMiddleware.run(watchAdminRoomShiftTableInit)
sagaMiddleware.run(watchAdminRoomShiftSearchChange)
sagaMiddleware.run(watchDeleteRoomShift)

sagaMiddleware.run(watchAdminSubjectRegister)
sagaMiddleware.run(watchAdminSubjectSearchChange)
sagaMiddleware.run(watchAdminSubjectTableInit)
sagaMiddleware.run(watchAdminSubjectTableNext)
sagaMiddleware.run(watchSubjectDelete)

sagaMiddleware.run(watchStudentInitTableData)
sagaMiddleware.run(watchStudentRegisterStudent)
sagaMiddleware.run(watchStudentSearchChange)
sagaMiddleware.run(watchStudentTableNextData)
sagaMiddleware.run(watchDeleteStudent)

sagaMiddleware.run(watchAdminRegisterRoomClass)
sagaMiddleware.run(watchAdminRoomClassTableNext)
sagaMiddleware.run(watchAdminRoomClassTableInit)
sagaMiddleware.run(watchAdminRoomClassSearchChange)
sagaMiddleware.run(watchAdminDeleteRoomClass)

sagaMiddleware.run(watchAdminCurriculumInitTableData)
sagaMiddleware.run(watchCurriculumSearchChange)
sagaMiddleware.run(watchCurriculumTableNextData)
sagaMiddleware.run(watchAdminRegisterCurriculum)
sagaMiddleware.run(watchAdminDeleteCurriculum)


// profile
sagaMiddleware.run(watchStudentGetProfile)
sagaMiddleware.run(watchTeacherGetProfile)
sagaMiddleware.run(watchRoomGetProfile)
sagaMiddleware.run(watchRoomShiftGetProfile)
sagaMiddleware.run(watchRoomShiftClassGetProfile)

// LOGIN
sagaMiddleware.run(watchLogin)
sagaMiddleware.run(watchPreRegister)
sagaMiddleware.run(watchReLogin)
sagaMiddleware.run(watchLogout)


// REGISTER STUDENT TEACHER
sagaMiddleware.run(watchStudentRegister)
sagaMiddleware.run(watchTeacherRegister)

// TEACHER ROLE
sagaMiddleware.run(watchTeacherUploadResource)
sagaMiddleware.run(watchDeleteResource)
sagaMiddleware.run(watchTeacherAssignmentInit)
sagaMiddleware.run(watchTeacherResourcesInit)
sagaMiddleware.run(watchTeacherResourcesSearchChange)
sagaMiddleware.run(watchTeacherResourcesTableNext)
sagaMiddleware.run(watchTeacherAssignmentTableNext)
sagaMiddleware.run(watchTeacherAssignmentSearchChange)
sagaMiddleware.run(watchTeacherAssignmentDelete)
sagaMiddleware.run(watchTeacherAssignmentCreate)
sagaMiddleware.run(watchTeacherLectureInit)
sagaMiddleware.run(watchTeacherLectureSearchChange)
sagaMiddleware.run(watchTeacherLectureTableNext)
sagaMiddleware.run(watchTeacherCreateLecture)
sagaMiddleware.run(watchDeleteLecture)
sagaMiddleware.run(watchDeleteExams)
sagaMiddleware.run(watchTeacherCreateExams)
sagaMiddleware.run(watchTeacherExamsInit)
sagaMiddleware.run(watchTeacherExamsSearchChange)
sagaMiddleware.run(watchTeacherExamsTableNext)
sagaMiddleware.run(watchDeleteQuiz)
sagaMiddleware.run(watchTeacherQuizExams)
sagaMiddleware.run(watchTeacherQuizInit)
sagaMiddleware.run(watchTeacherQuizSearchChange)
sagaMiddleware.run(watchTeacherQuizTableNext)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
