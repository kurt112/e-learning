import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {getStudentDataByEmail} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";

const StudentLecture = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentLecture})))
const StudentTodo = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTodo})))
const Classes = lazy(() => import(`../ui/__user_ui/roomClasses/ClassList/ClassesList`))

const StudentRoute = ({email, translation}) => {

    const [student, setStudent] = useState(null);

    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()

    // for classwork filter
    const [all, setAll] = useState([])
    const [exam, setExam] = useState([])
    const [assignment, setAssignment] = useState([])
    const [quiz, setQuiz] = useState([])

    useEffect(() => {

        async function fetchData() {
            return await graphQlRequestAsync(getStudentDataByEmail(email))
        }

        fetchData().then(r => {
            setStudent(r.data.data.getStudentByUserEmail)
        })


    }, [email])

    useEffect(() => {
        if (student !== null) {
            const tempAssignment = [], tempExam = [], tempQuiz = [], tempAll = []

            const tempDoneClass = student.roomShiftClasses.filter(e => e.status === 0)
            const tempCurrentClass = student.roomShiftClasses.filter(e => e.status === 1)

            setCurrentClass(tempCurrentClass)
            setDoneClass(tempDoneClass)

            student.roomShiftClasses.map(classes => {

                classes.teacherAssignments.map(assignment => {
                    tempAssignment.push(assignment)
                    return tempAll.push(assignment)
                })

                classes.teacherQuizzes.map(quiz => {
                    tempQuiz.push(quiz)
                    return tempAll.push(quiz)
                })

                return classes.teacherExams.map(exam => {
                    tempExam.push(exam)
                    return tempAll.push(exam)
                })

            })

            setAssignment(tempAssignment)
            setExam(tempExam)
            setQuiz(tempQuiz)
            return setAll(tempAll)
        }
    }, [student])

    return student === null ? null :
        <Fragment>
            <Route path={translation.language["route.student.todos"]} exact
                   render={() => <StudentTodo all={all} exams={exam} assignments={assignment} quiz={quiz} translation={translation}/>}/>
            <Route path={translation.language["route.student.lectures"]} exact
                   render={() => <StudentLecture translation={translation}/>}/>
            <Route path={translation.language["route.student.classes"]} exact
                   render={() => <Classes translation={translation} currentClass={currentClass}
                                          archiveClass={doneClass}/>}/>
            <Redirect to={translation.language["route.student.classes"]}/>
        </Fragment>
}

export default StudentRoute