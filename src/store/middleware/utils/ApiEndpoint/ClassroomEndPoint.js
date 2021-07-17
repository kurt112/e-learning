/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    S3BucketEndPoint = 'https://g-learn-files.s3.us-west-2.amazonaws.com/',
    JavaEndpoint = process.env.NODE_ENV==='development'? 'http://localhost:8080':'https://eellearning.herokuapp.com',
    ExpressEndPoint = process.env.NODE_ENV==='development'?'http://localhost:5000':'https://e-learning-classroom-server.herokuapp.com',
    GraphQlEndpoint = JavaEndpoint + '/Elearning',
    /**
     * for Admin end point
     * */

    // Curriculum admin endpoint
    CreateCurriculum = 'admin/curriculum-register',
    DeleteCurriculum = 'admin/delete/curriculum',

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
    AddStudentInRoomShift = 'admin/room-shift/add/student',

    // RoomClass Admin Endpoint
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
    autoCompleteGetTeacherQuiz = autoComplete + 'getTeacherQuizzes',
    autoCompleteGetCurriculum = autoComplete + 'curriculum'

