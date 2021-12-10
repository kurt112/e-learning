/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const

    S3BucketEndPoint = 'https://alfredafdfa.s3.ap-southeast-1.amazonaws.com/',
    JavaEndpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://eellearning.herokuapp.com',
    ExpressEndPoint = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://e-learning-classroom-server.herokuapp.com',
    GraphQlEndpoint = JavaEndpoint + '/Elearning',
    /**
     * for Admin end point
     * */

        // Curriculum admin endpoint
    CreateCurriculum = 'admin/curriculum-register',
    DeleteCurriculum = 'admin/delete/curriculum',
    OnCurriculum = 'admin/on/curriculum',
    OffCurriculum = 'admin/off/curriculum',

    //Teacher Admin endpoint
    AdminTeacherRegister = 'teacherID-register',
    DeleteTeacher = 'delete/teacher',

    //Student Admin endpoint
    AdminStudentRegister = "student-register",
    DeleteStudent = 'delete/student',
    UploadManyStudent = 'upload/csv',

    // Room Admin endpoint
    AdminRoomRegister = "admin/room-register",
    DeleteRoom = 'admin/delete/room',
    OnRoom = 'admin/on/room',
    OffRoom = 'admin/off/room',

    // Subject Admin endpoint
    AdminSubjectRegister = "admin/subjectID-register",
    DeleteSubject = 'admin/delete/subject',
    OnSubject = 'admin/on/subject',
    OffSubject = 'admin/off/subject',


    // Room Shift Admin endpoint
    AdminRoomShiftRegister = "admin/register-roomShift",
    AdminRoomShift = "admin/roomShift",
    DeleteRoomShift = 'admin/delete/roomShift',
    AddStudentInRoomShift = 'admin/room-shift/add/student',
    OnRoomShift = 'admin/on/roomShift',
    OffRoomShift = 'admin/off/roomShift',

    // RoomClass Admin Endpoint
    AdminRoomClassRegister = "admin/classes/register",
    AdminRoomClass = "admin/classes/roomClass",
    DeleteRoomClass = 'admin/classes/delete/class',
    AddStudentInRoomClass = 'admin/classes/add/student',
    OnClass = 'admin/classes/on',
    OffClass = 'admin/classes/off',


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
    TeacherGradeStudent ='teacher/grade/student',
    onTeacher = 'on/teacher',
    offTeacher = 'off/teacher',

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
    autoCompleteGetCurriculum = autoComplete + 'curriculum',

    /**
     * for User Endpoint
     */

    updateAccount = 'update-account',

    /**
     * for Attendance Endpoint
     */
    attendance = 'attendance/',
    studentAttendance = attendance + 'student',
    teacherAttendance = attendance + 'teacher',

    /**
     * for admin
     */

    admin = 'admin',
    adminOn = '/on/user',
    adminOff = '/off/user',

    /**
     * for student
     */
    student = 'student/',
    passAssignment = student+'upload/assignment',
    unSubmitAssignment=student+'unsubmit/assignment',
    passExam = student+'upload/exam',
    unSubmitExam=student+'unsubmit/exam',
    passQuiz = student+'upload/quiz',
    unSubmitQuiz=student+'unsubmit/quiz',
    onStudent = 'on/student',
    offStudent = 'off/student',
    gradeExam = student+'grade/exam',
    gradeQuiz = student+'grade/quiz',
    gradeAssignment = student+'grade/assignment'

