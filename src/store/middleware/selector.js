/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
    AdminCurriculum = (state) => state.AdminCurriculum,
    AdminCreateCurriculum = (state) => state.CreateCurriculum,
    AdminDeleteCurriculum = (state) => state.DeleteCurriculum,

    // admin dialogs
    DeleteSubjectDialog = (state) => state.DeleteDialogSubject,
    DeleteTeacherDialog = (state) => state.DeleteDialogTeacher,
    DeleteStudentDialog = (state) => state.DeleteDialogStudent,
    DeleteRoomShiftDialog = (state) => state.DeleteDialogRoomShift,
    DeleteClassDialog =  (state) => state.DeleteDialogClass,
    DeleteRoomDialog = (state) => state.DeleteDialogRoom,

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
    TeacherExamsCreateDialog = (state) => state.TeacherExamsCreateDialog,
    TeacherExamsDeleteDialog = (state) => state.TeacherExamsDeleteDialog,
    TeacherExams = (state) => state.TeacherExams,
    TeacherQuizzes = (state) => state.TeacherQuizzes,
    TeacherQuizCreateDialog = (state) => state.TeacherQuizCreateDialog,
    TeacherQuizDeleteDialog = (state) => state.TeacherQuizDeleteDialog,

    // Login, Register State
    Login = (state) => state.Login,
    StudentRegister = (state) => state.StudentRegisterForm,
    TeacherRegister = (state) => state.TeacherRegisterForm,

    // Current User State
    CurrentUser = (state) => state.CurrentUser

