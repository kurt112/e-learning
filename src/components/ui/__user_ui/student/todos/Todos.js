import {useState, Fragment} from "react";
import {
    Avatar,
    Box,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    Paper,
    Select,
    Tooltip
} from "@material-ui/core";
import clsx from "clsx";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClassesStyle from "../../../_style/ClassesStyle";
import {Link} from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import TaskCard from "../../profiles/classes-profile/TaskCard";

const Todo = ({translation, exams, all, assignments, quiz}) => {
    const style = ClassesStyle()
    const [todos, setTodo] = useState(true)

    const currentClassClick = () => {
        setTodo(true)
    }

    const archiveClassClick = () => {
        setTodo(false)
    }

    console.log(all)

    return (
        <Fragment>
            <Grid container component="main" justify={"space-around"}>
                <Box className={style.boxNavButtonContainer}>
                    <Box onClick={currentClassClick}
                         className={clsx(style.boxNavButton, todos === true ? style.active : null)}>
                        <span>{translation.language["label.global.classwork"]}</span>
                        <br/>
                        <AccessTimeIcon/>

                    </Box>

                    <Box onClick={archiveClassClick}
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
                        // value={state.age}
                        // onChange={handleChange}
                        inputProps={{
                            name: translation.language["label.global.type"],
                            id: 'type-native-simple',
                        }}
                    >
                        <option
                            value={translation.language["label.global.all"]}>{translation.language["label.global.all"]}</option>
                        <option
                            value={translation.language["label.global.exam"]}>{translation.language["label.global.exam"]}</option>
                        <option
                            value={translation.language["label.global.assignment"]}>{translation.language["label.global.assignment"]}</option>
                        <option
                            value={translation.language["label.global.quiz"]}>{translation.language["label.global.quiz"]}</option>
                    </Select>
                </FormControl>

                <Divider/>

            </Grid>

            <Container>
                {
                    all.map((e,i) =>
                        <TaskCard key={i} style={style}
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