/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {
    getStudentAssignment,
    getStudentClasses, getStudentExam, getStudentQuiz
} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";

import {useLocation} from 'react-router-dom'

import ClassesList from "../ui/__user_ui/roomClasses/ClassList/ClassesList";
import ProfileRoute from "./ProfileRoute";
import {
    passAssignment,
    passExam, passQuiz,
    unSubmitAssignment,
    unSubmitExam, unSubmitQuiz
} from "../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const StudentLecture = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentLecture})))
const StudentTodo = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTodo})))

const todoData = (id, todoCreated, todoDeadline, location, description, highGrade, lowGrade, isLecture, teacherName, type, name, status, url, unSubmitUrl, response, grade, file) => {
    return {
        id,
        todoCreated,
        todoDeadline,
        location,
        description,
        highGrade,
        lowGrade,
        isLecture,
        teacherName,
        type,
        name,
        status,
        url,
        unSubmitUrl,
        response,
        grade,
        file
    }
}

const StudentRoute = ({email, translation}) => {

    const location = useLocation()

    const [currentClass, setCurrentClass] = useState([])
    const [doneClass, setDoneClass] = useState([])
    const [loading, setLoading] = useState(false)

    // for classwork filter
    const [lecture, setLecture] = useState([])
    const [filterSubject, setFilterSubject] = useState([])
    const [lectureArchive, setLectureArchive] = useState([])
    const [filterSubjectArchive, setFilterSubjectArchive] = useState([])


    // assignment status
    const [assignment, setAssignment] = useState([])
    const [finishAssignment, setFinishAssignment] = useState([])

    // all status
    const [all, setAll] = useState([])
    const [finishAll, setFinishAll] = useState([])

    // exam status
    const [exam, setExam] = useState([])
    const [finishExam, setFinishExam] = useState([])

    // quiz status
    const [quiz, setQuiz] = useState([])
    const [finishQuiz, setFinishQuiz] = useState([])

    useEffect(() => {
        initData().then(ignored => {
        })
    }, [email])


    useEffect(() => {

    }, [filterSubjectArchive,filterSubject,lecture,filterSubjectArchive])

    const initData = async () => {
        const tempFinishAll = [], tempAll = [], tempLecture =[],tempLectureArchive=[],tempFilterSubject=[],tempFilterSubjectArchive=[]

        setLoading(true)
        // current
        await graphQlRequestAsync(getStudentClasses(email, 1)).then(classes => {
            const tempCurrentClass = []
            classes.data.data.getStudentClass.map(Class => {

                Class.teacherLectures.map(lecture => {
                    tempLecture.push({...lecture, subjectCode:Class.subject.subjectCode})
                })

                tempFilterSubject.push({code: Class.subject.subjectCode, name: Class.subject.subjectName})

                tempCurrentClass.push(Class)
            })


            setFilterSubject(tempFilterSubject)
            setCurrentClass(tempCurrentClass)
        })

        setLecture(tempLecture)


        // archive
        await graphQlRequestAsync(getStudentClasses(email, 0)).then(classes => {
            const tempDoneClass = []

            classes.data.data.getStudentClass.map(Class => {
                Class.teacherLectures.map(lecture => {
                    tempLectureArchive.push({...lecture, subjectCode:Class.subject.subjectCode})
                })
                tempFilterSubjectArchive.push({code: Class.subject.subjectCode, name: Class.subject.subjectName})
                tempDoneClass.push(Class)
            })

            setFilterSubjectArchive(tempFilterSubjectArchive)
            setDoneClass(tempDoneClass)
        })


        setLectureArchive(tempLectureArchive)



        setLoading(false)


        await graphQlRequestAsync(getStudentAssignment(email)).then(assignment => {
            const assignments = assignment.data.data.getStudentAssignment

            const tempAssignment = [], tempFinishAssignment = []
            assignments.map(e => {
                const {teacherAssignment} = e
                const {resource} = teacherAssignment
                const {teacher} = resource
                const {user} = teacher
                const location = e.location === null ? resource.location : e.location

                const data = todoData(e.id, teacherAssignment.createdAt, teacherAssignment.deadLine, location, teacherAssignment.description,
                    teacherAssignment.highGrade, teacherAssignment.lowGrade, false, `${user.firstName} ${user.lastName}`,
                    'Assignment', resource.name, e.status, passAssignment, unSubmitAssignment, e.response, e.grade, null)

                if (e.status === 1) {
                    tempFinishAll.push(data)
                    return tempFinishAssignment.push(data)
                }

                tempAll.push(data)
                return tempAssignment.push(data)

            })

            setAssignment(tempAssignment)
            setFinishAssignment(tempFinishAssignment)
        })

        await graphQlRequestAsync(getStudentExam(email)).then(exam => {
            const exams = exam.data.data.getStudentExam
            const tempExam = [], tempFinishExam = []
            exams.map(e => {
                const teacherExam = e.exam
                const {resource} = teacherExam
                const {teacher} = resource
                const {user} = teacher
                const location = e.location === null ? resource.location : e.location

                const data = todoData(e.id, teacherExam.createdAt, teacherExam.deadLine, location, teacherExam.description,
                    teacherExam.highGrade, teacherExam.lowGrade, false, `${user.firstName} ${user.lastName}`,
                    'Exam', resource.name, e.status, passExam, unSubmitExam, e.response, e.grade, null)


                if (e.status === 1) {
                    tempFinishAll.push(data)
                    return tempFinishExam.push(data)
                }

                tempAll.push(data)
                return tempExam.push(data)
            })

            setExam(tempExam)
            setFinishExam(tempFinishExam)

        })

        // quiz
        await graphQlRequestAsync(getStudentQuiz(email)).then(quiz => {
            const quizzes = quiz.data.data.getStudentQuiz
            const tempQuiz = [], tempFinishQuiz = []

            quizzes.map(e => {
                console.log(e)
                const teacherQuiz = e.quiz
                const {resource} = teacherQuiz
                const {teacher} = resource
                const {user} = teacher
                const location = e.location === null ? resource.location : e.location

                const data = todoData(e.id, teacherQuiz.createdAt, teacherQuiz.deadLine, location, teacherQuiz.description,
                    teacherQuiz.highGrade, teacherQuiz.lowGrade, false, `${user.firstName} ${user.lastName}`,
                    'Quiz', resource.name, e.status, passQuiz, unSubmitQuiz, e.response, e.grade, null)


                if (e.status === 1) {
                    tempFinishAll.push(data)
                    return tempFinishQuiz.push(data)
                }

                tempAll.push(data)
                return tempQuiz.push(data)
            })

            setQuiz(tempQuiz)
            setFinishQuiz(tempFinishQuiz)
        })


        setAll(tempAll)
        setFinishAll(tempFinishAll)
    }


    return <Fragment>
        <Route path={translation.language["route.student.classes"]} exact
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
        <Route path={translation.language["route.student.todos"]} exact
               render={() =>
                   <StudentTodo
                       initData={initData}
                       finishAll={finishAll}
                       all={all}
                       exams={exam}
                       finishExam={finishExam}
                       assignments={assignment}
                       finishAssignments={finishAssignment}
                       quiz={quiz}
                       finishQuiz={finishQuiz}
                       translation={translation}
                   />
               }
        />
        <Route
            path={translation.language["route.student.lectures"]} exact
            render={() => <StudentLecture
                translation={translation}
                lecture={lecture}
                filter={filterSubject}
                lectureArchive={lectureArchive}
                filterArchive={filterSubjectArchive}
            />}

        />

        <ProfileRoute translation={translation}/>
        {
            location.pathname === '/' ? <Redirect to={translation.language["route.student.classes"]}/> : null
        }
    </Fragment>

}

export default StudentRoute