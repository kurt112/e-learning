// for teacher assignment
import {takeLeading} from "redux-saga/effects";
import * as adminTable from "../../ActionType/__ActionTypeGlobal/TableActionType";
import {
    Teacher_Assignment,
    Teacher_Assignment_Create,
    Teacher_Assignment_Delete,
    Teacher_Exams,
    Teacher_Exams_Create,
    Teacher_Exams_Delete,
    Teacher_Lecture,
    Teacher_Lecture_Delete, Teacher_Quiz, Teacher_Quiz_Create, Teacher_Quiz_Delete,
    Teacher_Resource,
    Teacher_Resource_Delete,
    Teacher_Resource_Upload
} from "../../utils/Specify";
import {
    TeacherAssignmentCreate,
    TeacherAssignmentDelete,
    TeacherAssignmentTableDataInit,
    TeacherAssignmentTableNext
} from "./TeacherAssignmentMiddleware";
import * as adminDialog from "../../ActionType/__ActionTypeGlobal/DialogActionType";
import {
    TeacherResourceDataNext, TeacherResourceDelete,
    TeacherResourceTableDataInit,
    TeacherResourceUpload
} from "./TeacherResourceMiddleware";
import {
    DeleteLecture,
    TeacherLectureCreate,
    TeacherLectureDataNext,
    TeacherLectureTableDataInit
} from "./TeacherLectureMIddleWare";
import {
    TeacherExamsCreate,
    TeacherExamsDelete,
    TeacherExamsTableDataInit,
    TeacherExamsTableNext
} from "./TeacherExamsMiddleware";
import {
    TeacherQuizzesCreate,
    TeacherQuizzesDelete,
    TeacherQuizzesTableDataInit,
    TeacherQuizzesTableNext
} from "./TeacherQuizMIddleware";

export function* watchTeacherAssignmentInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Assignment), TeacherAssignmentTableDataInit)
}

export function* watchTeacherAssignmentSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Assignment), TeacherAssignmentTableDataInit)
}

export function* watchTeacherAssignmentTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Teacher_Assignment), TeacherAssignmentTableNext)
}

export function * watchTeacherAssignmentDelete() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Assignment_Delete), TeacherAssignmentDelete)
}

export function * watchTeacherAssignmentCreate() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Assignment_Create),TeacherAssignmentCreate)
}


// for resource teacher
export function* watchTeacherResourcesInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Resource), TeacherResourceTableDataInit)
}

export function* watchTeacherResourcesSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Resource), TeacherResourceTableDataInit)
}

export function* watchTeacherResourcesTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Teacher_Resource), TeacherResourceDataNext)
}

export function * watchTeacherUploadResource() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource_Upload), TeacherResourceUpload)
}

export function * watchDeleteResource() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource_Delete),TeacherResourceDelete)
}

// for lecture teacher

export function* watchTeacherLectureInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Lecture), TeacherLectureTableDataInit)
}

export function* watchTeacherLectureSearchChange(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Lecture), TeacherLectureTableDataInit)
}

export function* watchTeacherLectureTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Lecture), TeacherLectureDataNext)
}

export function * watchTeacherCreateLecture() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Lecture), TeacherLectureCreate)
}

export function * watchDeleteLecture() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Lecture_Delete),DeleteLecture)
}

// for exams teacher

export function* watchTeacherExamsInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Exams), TeacherExamsTableDataInit)
}

export function* watchTeacherExamsSearchChange(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Exams), TeacherExamsTableDataInit)
}

export function* watchTeacherExamsTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Exams), TeacherExamsTableNext)
}

export function * watchTeacherCreateExams() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Exams_Create), TeacherExamsCreate)
}

export function * watchDeleteExams() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Exams_Delete),TeacherExamsDelete)
}

// for quiz teacher

export function* watchTeacherQuizInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Quiz), TeacherQuizzesTableDataInit)
}

export function* watchTeacherQuizSearchChange(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Quiz), TeacherQuizzesTableDataInit)
}

export function* watchTeacherQuizTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Quiz), TeacherQuizzesTableNext)
}

export function * watchTeacherQuizExams() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Quiz_Create), TeacherQuizzesCreate)
}

export function * watchDeleteQuiz() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Quiz_Delete),TeacherQuizzesDelete)
}