import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

// Teacher
import {TeacherStudent, TeacherRoom, TeacherSubject, TeacherActivity} from './store/reducers/Teacher'

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
import {StudentProfile, TeacherProfile,RoomProfile, RoomShiftProfile, RoomShiftClassProfile} from './store/reducers/Profile'

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
    watchAdminActivityUpload, watchAdminActivitySearchChange, watchAdminActivityTableInit, watchAdminActivityTableNext
} from './store/middleware/'


const reducers = combineReducers({
    TeacherStudent,
    TeacherRoom,
    TeacherSubject,
    TeacherActivity,

    StudentActivity,
    StudentSubject,
    StudentRoom,
    StudentTeacher,

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
    RoomShiftClassProfile
})


const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

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
