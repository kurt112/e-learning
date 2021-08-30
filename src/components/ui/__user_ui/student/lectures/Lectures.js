/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, useEffect, useState} from "react"
import {Box, Container, Divider, FormControl, Grid, InputLabel, Select} from "@material-ui/core"
import clsx from "clsx"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import ClassesStyle from "../../../_style/ClassesStyle"
import ProfileStyle from "../../profiles/ProfileStyle"
import TaskCard from "../../profiles/classes-profile/TaskCard";


const Lecture = ({translation, lecture,lectureArchive,filterArchive, filter}) => {

    const style = ClassesStyle()
    const taskCardStyle = ProfileStyle()
    const [archive, setArchive] = useState(false)
    const [filterValue, setFilterValue] = useState(filter[0].code)

    const [data,setData] = useState([])
    const [dataFilter,setDataFilter]  = useState([])

    const lectureClick = () => {
        setArchive(false)
        setData(lecture)
        setDataFilter(filter)
    }

    const archiveLectureClick = () => {
        setArchive(true)
        setData(lectureArchive)
        setDataFilter(filterArchive)
    }

    const filterChange = (data) => {
        setFilterValue(data)
    }

    useEffect(() => {
      //  if (dataFilter.length !== 0) setFilterValue()
    }, [dataFilter, filterValue,archive])

    useEffect(() => {
        setData(lecture)
    }, [])

    console.log(filterValue)
    console.log(lecture)


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
                    {/*<Box onClick={archiveLectureClick}*/}
                    {/*     className={clsx(style.boxNavButton, archive === true ? style.active : null)}>*/}
                    {/*    <span>{translation.language["label.global.lecture.archive"]}</span>*/}
                    {/*    <br/>*/}
                    {/*    <AccessTimeIcon/>*/}
                    {/*</Box>*/}
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
                                      resourceCode={e.resource.location}
                                      createdAt={e.createdAt}
                                      description={e.description}
                                      lecture={true}
                                      resourceName={e.resource.name}
                                      teacherName={`${e.resource.teacher.user.firstName} ${e.resource.teacher.user.lastName}`}
                                      type={e.resource.type}

                            />
                        )
                }
            </Container>
        </Fragment>
    )
}

export default Lecture