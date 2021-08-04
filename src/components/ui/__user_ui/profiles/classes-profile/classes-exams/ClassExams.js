/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import ProfileStyle from '../../ProfileStyle'
import Grid from "@material-ui/core/Grid"
import TaskCard from "../TaskCard"

const ClassExam = ({exams, translation}) => {
    const style = ProfileStyle()
    return (
        <Grid container>
            <Grid item container justify="center">
                <h1>{translation.language["label.global.exam"]}</h1>
                {
                    exams.length === 0 ?
                        <Grid container justify={"center"}>
                            <h1>No Post Currently</h1>
                        </Grid> :
                        exams.map((e) =>
                            <TaskCard style={style}
                                      key={e.code}
                                      description={e.resource.description}
                                      lowGrade={e.lowGrade}
                                      highGrade={e.highGrade}
                                      deadLine={e.deadLine}
                                      createdAt={e.createdAt}
                                      teacherName={`${e.resource.teacher.user.firstName} ${e.resource.teacher.user.lastName}`}
                                      code={e.code}
                                      resourceCode={e.resource.code}
                                      resourceName={e.resource.name}
                                      lecture={false}
                                      translation={translation}
                            />)
                }
            </Grid>
        </Grid>


    )
}

export default ClassExam;