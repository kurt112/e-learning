/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 24/08/2021, Tuesday
 **/

import {Fragment, useEffect, useState} from "react";
import {Box, Container, Divider, FormControl, Grid, InputLabel, Select} from "@material-ui/core";
import clsx from "clsx";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClassesStyle from "../../../_style/ClassesStyle";
import TeacherGradeCard from './TeacherGradeCard'
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {getTeacherAssignmentToGrade} from "../../../../../store/middleware/utils/GraphQlQuery/TeacherQuery/TeacherAssignmentQuery";
import {gradeAssignment} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";



const data = (id,url,type,description,highGrade,lowGrade,submittedOn,status,subject,grade,section,name,location) => {
    return {id,url,type,description,highGrade,lowGrade,submittedOn,status,subject,grade,section,name,location}
}


const TeacherGrade = ({
                        translation,
                        email
                      }) => {

    const style = ClassesStyle()
    const [filterIndex, setFilterIndex] = useState(0)

    // for getting the grade
    const [assignmentToGrade,setAssignmentToGrade] = useState([])
    const [examToGrade, setExamToGrade] = useState([])
    const [quizToGrade,setQuizToGrade]  = useState([])


    //  for graded
    const [assignmentGraded,setAssignmentGraded] = useState([])
    // const [examToGrade, setExamToGrade] = useState([])
    // const [quizToGrade,setQuizToGrade]  = useState([])

    const [all,setAll] = useState([])
    const [allGraded,setAllGraded] = useState([])
    const [filter, setFilter] = useState([])
    const filterType = [
        translation.language["label.global.all"],
        translation.language["label.global.exam"],
        translation.language["label.global.assignment"],
        translation.language["label.global.quiz"]
    ]

    const [filterValue, setFilterValue] = useState(filterType[filterIndex])
    const [toGrade, setToGrade] = useState(true)

    const filterData = () => {
        if (filterIndex === 0) {
            if(toGrade)setFilter(all)
            else setFilter(allGraded)
        } else if (filterIndex === 1) {
            setFilter(examToGrade)
        }
        else if (filterIndex === 2) {
            if(toGrade) setFilter(assignmentToGrade)
            else setFilter(assignmentGraded)
        } else if (filterIndex === 3) {
            setFilter(quizToGrade)
        }
    }

    const initData = async () => {
        await graphQlRequestAsync(getTeacherAssignmentToGrade(email)).then(response => {
            const tempAssignment = [], tempAll=[], tempAssignmentGraded = [], tempAllGraded=[]

            const {getTeacherAssignmentToGrade}  = response.data.data
            // id,url,type,description,highGrade,lowGrade,submittedOn,status
            getTeacherAssignmentToGrade.map(assignment => {

                const {teacherAssignment,student} = assignment
                const {roomShiftClass} = teacherAssignment
                const {roomShift,subject} =roomShiftClass
                const {user} = student
                const name = user.firstName + ' ' + user.lastName

                const input = data(assignment.id,gradeAssignment,translation.language["label.global.assignment"],teacherAssignment.description,
                    teacherAssignment.highGrade, teacherAssignment.lowGrade,assignment.submittedAt,assignment.response,subject.subjectName,
                    roomShift.grade,roomShift.section,name,assignment.location)

                if(assignment.grade ===0){
                    tempAll.push(input)
                    return tempAssignment.push(input)
                }

                tempAssignmentGraded.push(input)
                return tempAllGraded.push(input)
            })


            setAssignmentToGrade(tempAssignment)
            setAll(tempAll)
            setAssignmentGraded(tempAssignmentGraded)
            setAllGraded(tempAllGraded)
        })



        await filterData()
    }
    

    const filterChange = (data) => {
        data = parseInt(data)
        setFilterIndex(data)
        setFilterValue(data)
    }

    const gradedClick = () => {
        setToGrade(false)
    }

    const toGradeClick = () => {
        setToGrade(true )
    }



    useEffect(() => {
        initData().then(ignored => {})
    }, [])

    useEffect(() =>{
        filterData()
    }, [filterValue,filterIndex,toGrade,filterData])


    return (
        <Fragment>
            <Grid container component="main" justify={"space-around"}>
                <Box className={style.boxNavButtonContainer}>
                    <Box onClick={toGradeClick}
                         className={clsx(style.boxNavButton, toGrade === true ? style.active : null)}>
                        <span>{translation.language["label.to.grade"]}</span>
                        <br/>
                        <AccessTimeIcon/>

                    </Box>

                    <Box onClick={gradedClick}
                         className={clsx(style.boxNavButton, toGrade === false ? style.active : null)}>
                        <span>{translation.language["label.graded"]}</span>
                        <br/>
                        <AccessTimeIcon/>
                    </Box>
                </Box>

                <FormControl>
                    <InputLabel htmlFor="type-native-simple">{translation.language["label.global.type"]}</InputLabel>
                    <Select
                        fullWidth
                        native
                        value={filterValue}
                        onChange={(event) => filterChange(event.target.value)}
                        inputProps={{
                            name: translation.language["label.global.type"],
                            id: 'type-native-simple',
                        }}
                    >
                        {
                            filterType.map((filter, i) => <option key={i} value={i}>{filter}</option>)
                        }

                    </Select>
                </FormControl>

                <Divider/>

            </Grid>

            <Container>
                {
                    filter.map((e,i) =>
                        <TeacherGradeCard  toGrade={toGrade} key={i} translation={translation} data={e} initData={initData}/>
                    )
                }
            </Container>
        </Fragment>
    )
}

export  default TeacherGrade