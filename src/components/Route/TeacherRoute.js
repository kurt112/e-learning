/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {lazy, Fragment, useState, useEffect} from "react";
import {Redirect, Route} from "react-router";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {
    getTeacherClasses,
    getTeacherDataByEmail
} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery/TeacherDataQuery";
import {TeacherInsertStudent as insertStudent, TeacherInsertSubject as insertSubject} from '../ui/utils/tableColumn'
import { useLocation } from 'react-router-dom'
import ClassesList from "../ui/__user_ui/roomClasses/ClassList/ClassesList";
import ProfileRoute from "./ProfileRoute";


// import {get} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery";
const TeacherSubjects = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherSubject})))
const TeacherStudent = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherStudents})))
const TeacherLectures = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherLecture})))
const TeacherResources = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherResources})))
const TeacherAssignments = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherAssignments})))
const TeacherExams = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherExams})))
const TeacherQuizzes = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherQuizzes})))

const TeacherRoute = ({email, translation}) => {

    const [teacher, setTeacher] = useState(null)
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()
    const location = useLocation();

    useEffect(() => {
        fetchData().then(r => {
            console.log(r)
            setTeacher(r.data.data.getTeacherByUserEmail)
        })
    }, [])

    async function fetchData() {
        return await graphQlRequestAsync(getTeacherDataByEmail(email))
    }

    useEffect(() => {

        if (teacher) {
            const tempStudent = []
            const tempSubject = []

            graphQlRequestAsync(getTeacherClasses(teacher.id, 1)).then(e => {
                const classes = e.data.data.getTeacherClasses
                setCurrentClass(classes)

                // eslint-disable-next-line array-callback-return

                for (const class_ of classes) {
                    const students = class_.students
                    const roomShift = class_.roomShift
                    const subject = class_.subject
                    for (const student of students) {
                        const user = student.user
                        tempStudent.push(insertStudent(user.firstName, user.lastName, roomShift.grade,
                            roomShift.section, subject.subjectName, roomShift.teacher !== null ? `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}` : translation.language["label.global.tba"], user.email))
                    }
                    tempSubject.push(insertSubject(subject.subjectName, subject.subjectCode, subject.subjectMajor))
                }
                setSubjects(tempSubject)
                setStudents(tempStudent)
            })


            graphQlRequestAsync(getTeacherClasses(teacher.id, 0)).then(e => {
                const classes = e.data.data.getTeacherClasses
                setDoneClass(classes)
            })

        }
    }, [teacher])

    return (
        <Fragment>
            <Route path={translation.language["route.teacher.subjects"]} exact
                   render={() => <TeacherSubjects translation={translation} subjects={subjects}/>}/>
            <Route path={translation.language["route.teacher.students"]} exact
                   render={() => <TeacherStudent translation={translation} students={students}/>}/>
            <Route path={translation.language["route.teacher.lectures"]} exact
                   render={() => <TeacherLectures translation={translation}/>}/>
            <Route path={translation.language["route.teacher.classes"]} exact
                   render={() => <ClassesList translation={translation}
                                          currentClass={currentClass}
                                          archiveClass={doneClass}/>}/>
            <Route path={translation.language["route.teacher.resources"]} exact
                   render={() => <TeacherResources translation={translation}/>}/>
            <Route path={translation.language["route.teacher.assignments"]} exact
                   render={() => <TeacherAssignments translation={translation}/>}/>
            <Route path={translation.language["route.teacher.exams"]} exact
                   render={() => <TeacherExams translation={translation}/>}/>
            <Route path={translation.language["route.teacher.quizzes"]} exact
                   render={() => <TeacherQuizzes translation={translation}/>}/>

            <ProfileRoute translation={translation}/>

            {
                location.pathname === '/'? <Redirect to={translation.language["route.teacher.classes"]}/>:null
            }

        </Fragment>
    )
}

export default TeacherRoute
