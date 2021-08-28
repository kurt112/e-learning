/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Redirect, Route} from "react-router";
import {lazy, Fragment, useState, useEffect} from "react";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";
import {
    getTeacherClasses,
    getTeacherDataByEmail
} from "../../store/middleware/utils/GraphQlQuery/TeacherQuery/TeacherDataQuery";
import {TeacherInsertStudent as insertStudent, TeacherInsertSubject as insertSubject} from '../ui/utils/tableColumn'
import {useLocation} from 'react-router-dom'
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
const TeacherGrade = lazy(() => import('../ui/__user_ui/teacher').then(module => ({default: module.TeacherGrade})))

const TeacherRoute = ({email, translation}) => {

    const location = useLocation();

    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        initData().then(ignored => {
        })
    }, [email])


    const initData = async () => {
        const tempStudent = [], tempSubject = []

        setLoading(true)
        const data = await graphQlRequestAsync(getTeacherDataByEmail(email))
            .then(response => response.data.data.getTeacherByUserEmail.id)


        await graphQlRequestAsync(getTeacherClasses(data, 1)).then(e => {
            const classes = e.data.data.getTeacherClasses
            // eslint-disable-next-line array-callback-return

            classes.map((class_) => {
                const students = class_.students
                const roomShift = class_.roomShift
                const subject = class_.subject

                students.map(student => {
                    const {user} = student
                    tempStudent.push(insertStudent(user.firstName, user.lastName, roomShift.grade,
                        roomShift.section, subject.subjectName, roomShift.teacher !== null ? `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}` : translation.language["label.global.tba"], user.email))
                })

                tempSubject.push(insertSubject(subject.subjectName, subject.subjectCode, subject.subjectMajor))

            })

            setSubjects(tempSubject)
            setStudents(tempStudent)
            setCurrentClass(classes)
        })

        setLoading(false)

        graphQlRequestAsync(getTeacherClasses(data, 0)).then(e => {
            const classes = e.data.data.getTeacherClasses
            setDoneClass(classes)
        })

    }


    return (
        <Fragment>
            <Route path={translation.language["route.teacher.classes"]} exact
                   render={
                       () =>
                           <ClassesList
                               translation={translation}
                               currentClass={currentClass}
                               archiveClass={doneClass}
                               loading={loading}
                           />
                   }
            />
            <Route path={translation.language["route.teacher.subjects"]} exact
                   render={() => <TeacherSubjects translation={translation} subjects={subjects}/>}/>
            <Route path={translation.language["route.teacher.students"]} exact
                   render={() => <TeacherStudent translation={translation} students={students}/>}/>
            <Route path={translation.language["route.teacher.lectures"]} exact
                   render={() => <TeacherLectures translation={translation}/>}/>

            <Route path={translation.language["route.teacher.resources"]} exact
                   render={() => <TeacherResources translation={translation}/>}
            />
            <Route path={translation.language["route.teacher.assignments"]} exact
                   render={() => <TeacherAssignments translation={translation}/>}
            />
            <Route path={translation.language["route.teacher.exams"]} exact
                   render={() => <TeacherExams translation={translation}/>}
            />
            <Route path={translation.language["route.teacher.quizzes"]} exact
                   render={() => <TeacherQuizzes translation={translation}/>}
            />
            <Route path={translation.language["route.teacher.to.grade"]}
                   render={() => <TeacherGrade translation={translation} email={email}/>}
            />

            <ProfileRoute translation={translation}/>

            {
                location.pathname === '/' ? <Redirect to={translation.language["route.teacher.classes"]}/> : null
            }

        </Fragment>
    )
}

export default TeacherRoute
