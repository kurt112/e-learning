export const

    // Production endpoint https://eellearning.herokuapp.com/
    JavaEndpoint = 'http://localhost:8080',
    ExpressEndPoint = 'http://localhost:5000',
    GraphQlEndpoint = JavaEndpoint + '/Elearning',

    /**
     * for Admin end point
     * */

    //Teacher Admin endpoint
    AdminTeacherRegister = 'teacherID-register',
    DeleteTeacher = 'delete/teacher',

    //Student Admin endpoint
    AdminStudentRegister = "student-register",
    DeleteStudent = 'delete/student',

    // Room Admin endpoint
    AdminRoomRegister = "admin/room-register",
    DeleteRoom = 'admin/delete/room',

    // Subject Admin endpoint
    AdminSubjectRegister = "admin/subjectID-register",
    DeleteSubject = 'admin/delete/subject',


    // Room Shift Admin endpoint
    AdminRoomShiftRegister = "admin/register-roomShift",
    AdminRoomShift = "admin/roomShift",
    DeleteRoomShift = 'admin/delete/roomShift',

    // RoomClass Admin JavaEndpoint
    AdminRoomClassRegister = "admin/classes/register",
    AdminRoomClass = "admin/classes/roomClass",
    DeleteRoomClass = 'admin/classes/delete/class',


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
    TeacherExamDelete = 'teacher/exam/delete',
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

