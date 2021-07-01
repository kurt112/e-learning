import {Fragment, useEffect, useState} from "react"
import {Box, Container, Divider, FormControl, Grid, InputLabel, Select} from "@material-ui/core"
import clsx from "clsx"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import ClassesStyle from "../../../_style/ClassesStyle"
import ProfileStyle from "../../profiles/ProfileStyle"
import TaskCard from "../../profiles/classes-profile/TaskCard";


const Lecture = ({translation, lecture, filter}) => {
    const style = ClassesStyle()
    const taskCardStyle = ProfileStyle()
    const [archive, setArchive] = useState(false)
    const [filterValue, setFilterValue] = useState('')

    const lectureClick = () => {
        setArchive(false)
    }

    const archiveLectureClick = () => {
        setArchive(true)
    }

    const filterChange = (data) => {
        setFilterValue(data)
    }

    useEffect(() => {
        if (filter.length !== 0) setFilterValue(filter[0].code)
    }, [])

    return (
        <Fragment>
            <Grid container component="main" justify={"space-around"}>
                <Box className={style.boxNavButtonContainer}>
                    <Box onClick={lectureClick}
                         className={clsx(style.boxNavButton, archive !== true ? style.active : null)}>
                        <span>{translation.language["label.global.lecture.current"]}</span>
                        <br/>
                        <AccessTimeIcon/>
                    </Box>
                    <Box onClick={archiveLectureClick}
                         className={clsx(style.boxNavButton, archive === true ? style.active : null)}>
                        <span>{translation.language["label.global.lecture.archive"]}</span>
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
                            filter.map((e) => <option key={e.code} value={e.code}>{e.name}</option>)
                        }

                    </Select>
                </FormControl>

                <Divider/>

            </Grid>

            <Container>
                {

                    lecture.filter(data => data.subjectCode === filterValue)
                        .map((e, i) =>
                            <TaskCard key={i}
                                      style={taskCardStyle}
                                      translation={translation}
                                      resourceCode={e.resource.code}
                                      createdAt={e.createdAt}
                                      description={e.description}
                                      lecture={true}
                                      resourceName={e.resource.name}
                                      teacherName={`${e.resource.teacher.user.firstName} ${e.resource.teacher.user.lastName}`}
                            />
                        )
                }
            </Container>
        </Fragment>
    )
}

export default Lecture