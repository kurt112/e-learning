/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

/**
*
*
*
*   The upper part of the object is
*   for the column
*
*
*   The lower part of the object
*   for the insertion of data in table
*
*
*/

export {
    AdminStudentTable,
    AdminTeacherTable,
    AdminRoomTable,
    AdminSubjectTable,
    AdminRoomClassTable,
    AdminRoomShiftTable,
    AdminCurriculumTable,

    AdminInsertCurriculum,
    AdminInsertRoomClass,
    AdminInsertSubject,
    AdminInsertRoom,
    AdminInsertStudentTable,
    AdminInsertTeacherTable,
    AdminInsertRoomShift
} from './AdminTable'

export {
    StudentRoomTable,
    StudentActivityTable,
    StudentTeacherTable,
    StudentSubjectTable,

    StudentInsertRoom,
    StudentInsertTeacher,
    StudentInsertSubject,
    StudentInsertActivity
} from './StudentTable'

export {
    TeacherRoomTable,
    TeacherSubjectTable,
    TeacherStudentTable,
    TeacherLectureTable,
    TeacherAttendace,
    ClassLogs,
    TeacherResources,
    TeacherAssignments,
    TeacherExams,
    TeacherQuiz,

    TeacherInsertQuiz,
    TeacherInsertExam,
    TeacherInsertAssignment,
    TeacherInsertResources,
    TeacherInsertAttendace,
    ClassInsertLogs,
    TeacherInsertLecture,
    TeacherInsertStudent,
    TeacherInsertSubject,
    TeacherInsertRoom,
} from './TeacherTable'