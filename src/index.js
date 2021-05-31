import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

// Teacher
import {
    DeleteAssignmentDialog, DeleteResource,
    TeacherResource, UploadResource, TeacherAssignment,
    TeacherAssignmentCreateDialog
} from './store/reducers/Teacher'

//Student
import {StudentActivity, StudentSubject, StudentRoom, StudentTeacher} from './store/reducers/Student'


import {
    AdminActivity,
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
    AdminActivityDialog
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


// sagas
import {
    watchAdminRegisterTeacher,
    watchTeacherTableNextData,
    watchAdminTeacherInitTableData,
    watchTeacherSearchChange,
    watchStudentInitTableData,
    watchStudentRegisterStudent,
    watchStudentSearchChange,
    watchStudentTableNextData,
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
    watchStudentGetProfile,
    watchTeacherGetProfile,
    watchRoomGetProfile,
    watchRoomShiftGetProfile,
    watchRoomShiftClassGetProfile,
    watchLogin,
    watchPreRegister,
    watchReLogin,
    watchStudentRegister,
    watchTeacherRegister,
    watchAdminActivityUpload,
    watchAdminActivitySearchChange,
    watchAdminActivityTableInit,
    watchAdminActivityTableNext,
    watchTeacherUploadResource,
    watchDeleteResource,
    watchTeacherAssignmentInit,
    watchTeacherResourcesInit,
    watchTeacherResourcesSearchChange,
    watchTeacherResourcesTableNext,
    watchTeacherAssignmentSearchChange,
    watchTeacherAssignmentTableNext,
    watchTeacherAssignmentDelete,
    watchTeacherAssignmentCreate
} from './store/middleware/'


const reducers = combineReducers({
    // Teacher State
    // TeacherStudent,
    // TeacherRoom,
    // TeacherSubject,
    // TeacherTask,
    TeacherAssignment,
    DeleteResource,
    TeacherResource,
    TeacherAssignmentCreateDialog,
    UploadResource,
    DeleteAssignmentDialog,
    // TeacherProfileState,

    // Student State
    StudentActivity,
    StudentSubject,
    StudentRoom,
    StudentTeacher,


    // Admin State
    AdminActivity,
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
    AdminActivityDialog,


    Classroom,


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
    TeacherRegisterForm
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

sagaMiddleware.run(watchAdminRegisterRoom)
sagaMiddleware.run(watchAdminRoomTableNext)
sagaMiddleware.run(watchAdminRoomTableInit)
sagaMiddleware.run(watchAdminRoomSearchChange)

sagaMiddleware.run(watchAdminRegisterRoomShift)
sagaMiddleware.run(watchAdminRoomShiftTableNext)
sagaMiddleware.run(watchAdminRoomShiftTableInit)
sagaMiddleware.run(watchAdminRoomShiftSearchChange)

sagaMiddleware.run(watchAdminSubjectRegister)
sagaMiddleware.run(watchAdminSubjectSearchChange)
sagaMiddleware.run(watchAdminSubjectTableInit)
sagaMiddleware.run(watchAdminSubjectTableNext)


sagaMiddleware.run(watchStudentInitTableData)
sagaMiddleware.run(watchStudentRegisterStudent)
sagaMiddleware.run(watchStudentSearchChange)
sagaMiddleware.run(watchStudentTableNextData)

sagaMiddleware.run(watchAdminRegisterRoomClass)
sagaMiddleware.run(watchAdminRoomClassTableNext)
sagaMiddleware.run(watchAdminRoomClassTableInit)
sagaMiddleware.run(watchAdminRoomClassSearchChange)

sagaMiddleware.run(watchAdminActivityUpload)
sagaMiddleware.run(watchAdminActivitySearchChange)
sagaMiddleware.run(watchAdminActivityTableInit)
sagaMiddleware.run(watchAdminActivityTableNext)

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
