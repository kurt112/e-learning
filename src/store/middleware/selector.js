import {DeleteAssignmentDialog, UploadResource} from "../reducers/Teacher";

export const

    // Admin State
    AdminSubject = (state) => state.AdminSubject,
    AdminSubjectDialog = (state) => state.AdminSubjectDialog,
    AdminTeacher = (state) => state.AdminTeacher,
    AdminTeacherDialog = (state) => state.AdminDialogTeacher,
    AdminStudent = (state) => state.AdminStudent,
    AdminStudentDialog = (state) => state.AdminStudentDialog,
    AdminRoomDialog = (state) => state.AdminRoomDialog,
    AdminRoom = (state) => state.AdminRoom,
    AdminRoomShift = (state) => state.AdminRoomShift,
    AdminRoomShiftDialog = (state) => state.AdminRoomShiftDialog,
    AdminRoomClassDialog = (state) =>state.AdminClassDialog,
    AdminClass = (state) => state.AdminClass,
    AdminActivity = (state) => state.AdminActivity,
    AdminActivityDialog = (state) => state.AdminActivityDialog,

    // Teacher User
    TeacherResource = (state) => state.TeacherResource,
    TeacherResourceUploadDialog = (state) => state.UploadResource,
    TeacherResourceDeleteDialog = (state) => state.DeleteResource,
    TeacherAssignment = (state) => state.TeacherAssignment,
    TeacherAssignmentDeleteDialog = (state) => state.DeleteAssignmentDialog,
    TeacherAssignmentCreateDialog = (state) => state.TeacherAssignmentCreateDialog,
    TeacherLecture = (state) => state.TeacherLectures,
    TeacherLectureCreate = (state) => state.TeacherLectureCreateDialog,
    TeacherLectureDelete = (state) => state.TeacherLectureDeleteDialog,

    // Login, Register State
    Login = (state) => state.Login,
    StudentRegister = (state) => state.StudentRegisterForm,
    TeacherRegister = (state) => state.TeacherRegisterForm,

    // Current User State
    CurrentUser = (state) => state.CurrentUser

