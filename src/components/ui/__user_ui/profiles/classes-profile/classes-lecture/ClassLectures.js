import ProfileStyle from '../../ProfileStyle'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {Chip} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import TaskCard from "../TaskCard";

const ClassLecture = ({lectures}) => {
    const style = ProfileStyle()
    return (
        <Grid container>
            <Grid item container justify="center">
                <h1>Lectures</h1>
                {
                    lectures.map((e) =>
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
                                  lecture={true}
                        />)
                }

            </Grid>
        </Grid>


    )
}

export default ClassLecture;