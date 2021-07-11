const Create = '_CREATE', Delete = '_DELETE', Update = '_UPDATE'

export const
    // For Curriculum
    Curriculum = "CURRICULUM",
    Curriculum_Create = Curriculum+Create,
    Curriculum_Delete = Curriculum+Delete,
    Curriculum_Insert_Subject = Curriculum+"_INSERT_SUBJECT",

    // For Teacher
    Teacher = "TEACHER",
    Teacher_Create = Teacher+Create,
    Teacher_Delete = Teacher+Delete,

    // For STUDENT
    Student = "STUDENT",
    Student_Create = Student+Create,
    Student_Delete = Student+Delete,

    // FOR ADMIN
    Admin = "ADMIN",

    // For RoomShift
    RoomShift = 'ROOM_SHIFT',
    RoomShift_Create =RoomShift+Create,
    RoomShift_Delete=RoomShift+Delete,

    // For Subject
    Subject = "SUBJECT",
    Subject_Create =Subject+Create,
    Subject_Delete = Subject+Delete,

    // For RoomShiftClass
    RoomShiftClass = "ROOM_SHIFT_CLASS",
    RoomShiftClass_Create = RoomShiftClass+Create,
    RoomShiftClass_Delete = RoomShiftClass+Delete,


    // For Room
    Room = "ROOM",
    Room_Create = Room+Create,
    Room_Delete = Room+Delete,
    Room_Update = Room+Update,


    // Teacher User Resource
    Teacher_Resource = Teacher+'_RESOURCE',
    Teacher_Resource_Upload = Teacher_Resource+'_UPLOAD',
    Teacher_Resource_Delete = Teacher_Resource+Delete,

    // Teacher User Assignment,
    Teacher_Assignment = Teacher+'_ASSIGNMENT',
    Teacher_Assignment_Create = Teacher_Assignment+Create,
    Teacher_Assignment_Delete = Teacher_Assignment+Delete,

    // Teacher User  Lecture
    Teacher_Lecture = Teacher+'_LECTURE',
    Teacher_Lecture_Create = Teacher+'_LECTURE',
    Teacher_Lecture_Delete = Teacher+Delete,

    // Teacher User Exams,
    Teacher_Exams = Teacher+'_EXAMS',
    Teacher_Exams_Create = Teacher_Exams+Create,
    Teacher_Exams_Delete = Teacher_Exams+Delete,

    // Teacher User Quizzes,
    Teacher_Quiz = Teacher+'_QUIZZES',
    Teacher_Quiz_Create = Teacher_Quiz+Create,
    Teacher_Quiz_Delete = Teacher_Quiz+Delete