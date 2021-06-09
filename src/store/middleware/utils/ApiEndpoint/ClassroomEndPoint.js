export const
    JavaEndpoint = 'https://eellearning.herokuapp.com',
    ExpressEndPoint = 'http://localhost:5000',
    GraphQlEndpoint = JavaEndpoint + '/Elearning',

    /**
     * for Admin end point
     * */

//Teacher Admin endpoint

    AdminTeacherRegister = 'teacherID-register',

//Student Admin endpoint
    AdminStudents = "admin/students",
    AdminStudentRegister = "/student-register",

// Room Admin endpoint
    AdminRooms = "admin/rooms",
    AdminRoomRegister = "admin/room-register",

// Subject Admin endpoint
    AdminSubjects = "admin/subjects",
    AdminSubjectRegister = "admin/subjectID-register",


    // Room Shift Admin endpoint
    AdminRoomShiftRegister = "admin/register-roomShift",
    AdminRoomShift = "admin/roomShift",

    // RoomClass Admin JavaEndpoint
    AdminRoomClassRegister = "admin/classes/register",
    AdminRoomClass = "admin/classes/roomClass",

    // Activity Admin Enpoint
    AdminActivityUpload = "admin/activity/upload",
    AdminActivityDownload = "admin/activity/download",
    AdminActivityList = "admin/activity/list",


    /**
     * for Student end point
     */


    /**
     * for Teacher End Point
     */
    TeacherResourceUpload = 'teacher/upload/resource',
    TeacherResourceDelete = 'teacher/delete/resource',
    TeacherAssignmentDelete = 'teacher/assignment/delete',
    TeacherAssignmentCreate = 'teacher/assignment/create',
    TeacherLectureCreate = 'teacher/lecture/create',
    TeacherLectureDelete = 'teacher/lecture/delete',
    TeacherExamCreate = 'teacher/exam/create',
    TeacherExamDelete ='teacher/exam/delete',
    TeacherQuizCreate = 'teacher/quiz/create',
    TeacherQuizDelete = 'teacher/quiz/delete',

    /**
     * for Auto Complete API
     * */

    autoComplete = 'autocomplete/',
    autoCompleteTeacher = autoComplete + 'teacher',
    autoCompleteRoom = autoComplete + 'room',
    autoCompleteSubject = autoComplete + 'subject',
    autoCompleteRoomShift = autoComplete + 'roomShift',
    autoCompleteRoomClass = autoComplete + 'classes',
    autoCompleteSubjectBasedOnRoomShift = autoComplete + 'subjectBaseOnRoomShift',
    autoCompleteGetTeacherAssignment = autoComplete + 'getTeacherAssignment',
    autoCompleteGetTeacherClass = autoComplete + 'getTeacherClass',
    autoCompleteGetTeacherLecture = autoComplete + 'getTeacherLectures',
    autoCompleteGetTeacherExams = autoComplete + 'getTeacherExam',
    autoCompleteGetTeacherQuiz = autoComplete + 'getTeacherQuizzes'

