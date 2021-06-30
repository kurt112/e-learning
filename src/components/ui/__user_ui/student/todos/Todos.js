import {useState, Fragment} from "react";
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
import TaskCard from "../../profiles/classes-profile/TaskCard";
import ProfileStyle from '../../profiles/ProfileStyle'


const Todo = ({translation, exams, all, assignments, quiz}) => {
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
        if (data === 0) setFilter(all)
        else if (data === 1) setFilter(exams)
        else if (data === 2) setFilter(assignments)
        else if (data === 3) setFilter(quiz)
        setFilterIndex(data)
        setFilterValue(data)
    }


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
                        <TaskCard key={i}
                                  style={taskCardStyle}
                                  translation={translation}
                                  resourceCode={e.resource.code}
                                  createdAt={e.createdAt}
                                  deadLine={e.deadLine}
                                  lowGrade={e.lowGrade}
                                  highGrade={e.highGrade}
                                  description={e.description}
                                  lecture={false}
                                  resourceName={e.resource.name}
                                  teacherName={`${e.resource.teacher.user.firstName} ${e.resource.teacher.user.lastName}`}
                        />
                    )
                }
            </Container>
        </Fragment>
    )
}

export default Todo