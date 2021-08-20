/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {useState, Fragment, useEffect} from "react";
import {
    Box,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    Select,
} from "@material-ui/core";
import clsx from "clsx";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClassesStyle from "../../../_style/ClassesStyle";
import ProfileStyle from '../../profiles/ProfileStyle'
import TaskCard from "../../profiles/classes-profile/TaskCard";


const Todo = ({
                  translation,
                  exams,
                  all,
                  assignments,
                  quiz,
                  finishAssignments,
                  finishAll,
                  initData
              }) => {
    const style = ClassesStyle()
    const taskCardStyle = ProfileStyle()
    const [todos, setTodo] = useState(true)
    const [filterIndex, setFilterIndex] = useState(0)
    const [filter, setFilter] = useState(all)

    const filterType = [
        translation.language["label.global.all"],
        translation.language["label.global.exam"],
        translation.language["label.global.assignment"],
        translation.language["label.global.quiz"]
    ]

    const [filterValue, setFilterValue] = useState(filterType[filterIndex])

    const classWorkClick = () => {
        setTodo(true)
    }

    const finishWorkClick = () => {
        setTodo(false)
    }


    const filterChange = (data) => {
        data = parseInt(data)
        setFilterIndex(data)
        setFilterValue(data)
    }

    const filterData = () => {
        if (filterIndex === 0) {
            if (todos === true) setFilter(all)
            else setFilter(finishAll)
        } else if (filterIndex === 1) setFilter(exams)
        else if (filterIndex === 2) {
            if (todos === true) setFilter(assignments)
            else setFilter(finishAssignments)
        } else if (filterIndex === 3) setFilter(quiz)
    }

    const refreshData = async () => {
        await initData()
        filterData()
    }

    useEffect(() => {
        filterData()
    }, [todos, filterIndex, filterData])


    return (
        <Fragment>
            <Grid container component="main" justify={"space-around"}>
                <Box className={style.boxNavButtonContainer}>
                    <Box onClick={classWorkClick}
                         className={clsx(style.boxNavButton, todos === true ? style.active : null)}>
                        <span>{translation.language["label.global.classwork"]}</span>
                        <br/>
                        <AccessTimeIcon/>

                    </Box>

                    <Box onClick={finishWorkClick}
                         className={clsx(style.boxNavButton, todos !== true ? style.active : null)}>
                        <span>{translation.language["label.global.finished.work"]}</span>
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
                    filter.map((e, i) =>
                        <TaskCard
                            initData={refreshData}
                            id={e.id}
                            todo={todos}
                            key={i}
                            style={taskCardStyle}
                            translation={translation}
                            resourceCode={e.location}
                            createdAt={e.todoCreated}
                            deadLine={e.todoDeadline}
                            lowGrade={e.lowGrade}
                            highGrade={e.highGrade}
                            description={e.description}
                            lecture={e.isLecture}
                            resourceName={e.name}
                            teacherName={e.teacherName}
                            type={e.type}
                            url={e.url}
                            unSubmitUrl={e.unSubmitUrl}
                            response={e.response}
                        />
                    )
                }
            </Container>
        </Fragment>
    )
}

export default Todo