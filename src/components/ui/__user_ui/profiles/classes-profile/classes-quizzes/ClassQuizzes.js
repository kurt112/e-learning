/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import ProfileStyle from '../../ProfileStyle'
import Grid from "@material-ui/core/Grid";
import TaskCard from "../TaskCard";
import {Fragment} from 'react'
import {Box, Divider} from "@material-ui/core";

const ClassQuizzes = ({quizzes, translation}) => {
    const style = ProfileStyle()
    console.log(quizzes)
    return (
        <Box textAlign={'center'}>
            <h1>{translation.language["label.global.quiz"]}</h1>
            <Divider className={style.classPeopleDivider} style={{margin: '0px 30px'}}/>
            <br/>
            <div>
                <Divider/>
            </div>
            {
                quizzes.length === 0 ?
                    <Grid container justify={"center"}>
                        <h1>No Post Currently</h1>
                    </Grid>
                    :
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
                                  resourceCode={e.resource.location}
                                  resourceName={e.resource.name}
                                  lecture={false}
                                  translation={translation}
                        />)
            }
        </Box>


    )
}

export default ClassQuizzes;