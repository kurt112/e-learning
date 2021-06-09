import {takeLeading} from "redux-saga/effects";
import * as userRegister from "../../ActionType/__ActionTypeGlobal/UserRegisterActionType";
import {Student, Teacher} from "../../utils/Specify";
import {StudentRegisterData} from "./StudentRegister";
import {TeacherRegisterData} from "./TeacherRegister";


export function * watchStudentRegister () {
    yield takeLeading(userRegister.INIT_REGISTER(Student), StudentRegisterData)
}

export function * watchTeacherRegister() {
    yield takeLeading(userRegister.INIT_REGISTER(Teacher), TeacherRegisterData)
}