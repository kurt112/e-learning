/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {getStudentDataByEmail} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";

import { useLocation } from 'react-router-dom'

import ClassesList from "../ui/__user_ui/roomClasses/ClassList/ClassesList";
import ProfileRoute from "./ProfileRoute";

const StudentLecture = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentLecture})))
const StudentTodo = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTodo})))

const StudentRoute = ({email, translation}) => {

    const location = useLocation()

    const [student, setStudent] = useState(null);

    const [currentClass, setCurrentClass] = useState()
    const [doneClass, setDoneClass] = useState()

    // for classwork filter
    const [all, setAll] = useState([])
    const [exam, setExam] = useState([])
    const [assignment, setAssignment] = useState([])
    const [quiz, setQuiz] = useState([])
    const [lecture, setLecture] = useState([])
    const [filterSubject, setFilterSubject] = useState([])


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
            const tempAssignment = [], tempExam = [], tempQuiz = [], tempAll = [], tempLecture = [],
                tempFilterSubject = []

            const tempDoneClass = student.roomShiftClasses.filter(e => e.status === 0)
            const tempCurrentClass = student.roomShiftClasses.filter(e => e.status === 1)

            setCurrentClass(tempCurrentClass)
            setDoneClass(tempDoneClass)

            tempCurrentClass.map(classes => {

                classes.teacherAssignments.map(assignment => {
                    tempAssignment.push(assignment)
                    return tempAll.push(assignment)
                })

                classes.teacherQuizzes.map(quiz => {
                    tempQuiz.push(quiz)
                    return tempAll.push(quiz)
                })

                classes.teacherLectures.map(lecture => {
                    tempLecture.push({...lecture, subjectCode:classes.subject.subjectCode})
                })

                tempFilterSubject.push({code: classes.subject.subjectCode, name: classes.subject.subjectName})

                return classes.teacherExams.map(exam => {
                    tempExam.push(exam)
                    return tempAll.push(exam)
                })

            })


            setFilterSubject(tempFilterSubject)
            setLecture(tempLecture)
            setAssignment(tempAssignment)
            setExam(tempExam)
            setQuiz(tempQuiz)
            console.log(filterSubject)
            return setAll(tempAll)
        }
    }, [student])

    return student === null ? null :
        <Fragment>
            <Route path={translation.language["route.student.classes"]} exact
                   render={() => <ClassesList translation={translation} currentClass={currentClass}
                                              archiveClass={doneClass}/>}/>
            <Route path={translation.language["route.student.todos"]} exact
                   render={() => <StudentTodo all={all} exams={exam} assignments={assignment} quiz={quiz}
                                              translation={translation}/>}/>
            <Route
                path={translation.language["route.student.lectures"]} exact
                render={() => <StudentLecture filter={filterSubject} translation={translation} lecture={lecture}/>}

            />

            <ProfileRoute translation={translation}/>
            {
                location.pathname === '/'?<Redirect to={translation.language["route.student.classes"]}/>: null
            }
        </Fragment>
}

export default StudentRoute