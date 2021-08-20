/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Redirect, Route} from "react-router";
import {Fragment, lazy, useEffect, useState} from "react";
import {
    getStudentAssignment,
    getStudentClasses
} from "../../store/middleware/utils/GraphQlQuery/StudentQuery/StudentDataQuery";
import {graphQlRequestAsync} from "../../store/middleware/utils/HttpRequest";

import {useLocation} from 'react-router-dom'

import ClassesList from "../ui/__user_ui/roomClasses/ClassList/ClassesList";
import ProfileRoute from "./ProfileRoute";
import {passAssignment, unSubmitAssignment} from "../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const StudentLecture = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentLecture})))
const StudentTodo = lazy(() => import('../ui/__user_ui/student/Student').then(module => ({default: module.StudentTodo})))

const todoData = (id,todoCreated, todoDeadline, location, description, highGrade, lowGrade, isLecture, teacherName, type, name, status,url,unSubmitUrl,response) => {
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
        response
    }
}

const StudentRoute = ({email, translation}) => {

    const location = useLocation()

    const [student, setStudent] = useState(null);

    const [currentClass, setCurrentClass] = useState([])
    const [doneClass, setDoneClass] = useState([])

    // for classwork filter
    const [exam, setExam] = useState([])
    const [quiz, setQuiz] = useState([])
    const [lecture, setLecture] = useState([])
    const [filterSubject, setFilterSubject] = useState([])

    // assignment status
    const [assignment, setAssignment] = useState([])
    const [finishAssignment, setFinishAssignment] = useState([])

    // all status
    const [all, setAll] = useState([])
    const [finishAll, setFinishAll] = useState([])


    useEffect(() => {
        initData().then(ignored => {})
    }, [email])

    const initData = async () => {
        const tempFinishAll = [] , tempAll = []

        await graphQlRequestAsync(getStudentAssignment(email)).then(assignment => {

            const assignments = assignment.data.data.getStudentAssignment

            const tempAssignment = [], tempFinishAssignment = []
            assignments.map(e => {
                const {teacherAssignment} = e
                const {resource} = teacherAssignment
                const {teacher} = resource
                const {user} = teacher
                const location = e.location === null? resource.location:e.location

                const data = todoData(e.id,teacherAssignment.createdAt, teacherAssignment.deadLine, location , teacherAssignment.description,
                    teacherAssignment.high, teacherAssignment.lowGrade, false, `${user.firstName} ${user.lastName}`,
                    'Assignment', resource.name, e.status,passAssignment,unSubmitAssignment, e.response)


                if(e.status ===1){
                    tempFinishAll.push(data)
                    return tempFinishAssignment.push(data)
                }

                tempAll.push(data)
                return tempAssignment.push(data)

            })


            setAssignment(tempAssignment)
            setFinishAssignment(tempFinishAssignment)
        })


        // archive
        await graphQlRequestAsync(getStudentClasses(email, 0)).then(classes => {
            const tempDoneClass = []

            classes.data.data.getStudentClass.map(Class => {
                tempDoneClass.push(Class)
            })

            setDoneClass(tempDoneClass)
        })

        // current
        await graphQlRequestAsync(getStudentClasses(email, 1)).then(classes => {
            const tempCurrentClass = []
            classes.data.data.getStudentClass.map(Class => {
                tempCurrentClass.push(Class)
            })
            setCurrentClass(tempCurrentClass)
        })

        setAll(tempAll)
        setFinishAll(tempFinishAll)
    }



    return <Fragment>
        <Route path={translation.language["route.student.classes"]} exact
               render={() => <ClassesList translation={translation} currentClass={currentClass}
                                          archiveClass={doneClass}/>}/>
        <Route path={translation.language["route.student.todos"]} exact
               render={() =>
                   <StudentTodo
                       initData={initData}
                       finishAll={finishAll}
                       all={all}
                       exams={exam}
                       assignments={assignment}
                       finishAssignments={finishAssignment}
                       quiz={quiz}
                       translation={translation}
                   />
               }
        />
        <Route
            path={translation.language["route.student.lectures"]} exact
            render={() => <StudentLecture filter={filterSubject} translation={translation} lecture={lecture}/>}

        />

        <ProfileRoute translation={translation}/>
        {
            location.pathname === '/' ? <Redirect to={translation.language["route.student.classes"]}/> : null
        }
    </Fragment>

}

export default StudentRoute