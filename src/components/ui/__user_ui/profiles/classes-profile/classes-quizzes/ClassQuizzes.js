import ProfileStyle from '../../ProfileStyle'
import Grid from "@material-ui/core/Grid";
import TaskCard from "../TaskCard";
const ClassQuizzes = ({quizzes}) => {
    const style = ProfileStyle()
    return (
        <Grid container>
            <Grid item container justify="center">
                <h1>Quizzes</h1>
                {
                    quizzes.map((e) =>
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
                        />)
                }
            </Grid>
        </Grid>


    )
}

export default ClassQuizzes;