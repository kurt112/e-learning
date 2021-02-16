import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {TeacherStudent, TeacherProfile, TeacherRoom, TeacherSubject, TeacherActivity} from './store/reducers/Teacher'
import {StudentActivity, StudentProfile, StudentSubject, StudentRoom, StudentTeacher} from './store/reducers/Student'

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

import Classroom from "./store/reducers/Classroom";

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
    watchAdminActivityUpload, watchAdminActivitySearchChange, watchAdminActivityTableInit, watchAdminActivityTableNext
} from './store/middleware/'


const reducers = combineReducers({
    TeacherStudent,
    TeacherProfile,
    TeacherRoom,
    TeacherSubject,
    TeacherActivity,

    StudentActivity,
    StudentProfile,
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


    Classroom
})

// var old = alert;
//
// alert = function() {
//     console.log(new Error().stack);
//     old.apply(window, arguments);
// };

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
