import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {Chip} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import {JavaEndpoint} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import PublishIcon from "@material-ui/icons/Publish";

const TaskCard = ({
                      style,
                      resourceName,
                      deadLine,
                      description,
                      createdAt,
                      teacherName,
                      highGrade,
                      lowGrade,
                      resourceCode,
                      lecture,
                      translation
                  }) => {
    return <Grid component={Paper} container style={{padding: 10, marginBottom: 10}}>
        <Grid item container>
            <Grid item md={12} container
                  direction="row" justify="space-between">
                <h2 className={style.marginZero}>
                    {resourceName}
                </h2>
                <p className={style.marginZero}>
                    <b>{translation.language["label.global.date.upload"]}: </b>
                    {createdAt}
                </p>
            </Grid>
            <Grid item md={12} container
                  direction="row" justify="space-between">
                <h4 className={style.marginZero}>
                    {teacherName}
                </h4>
                <p className={style.marginZero}>
                    <b>{translation.language["label.global.date.deadline"]}: </b>
                    {deadLine}
                </p>
            </Grid>

            <Grid item md={12} container>
                <p>
                    {description}
                </p>
            </Grid>
            <Divider style={{width: '100%'}}/>

            <Grid container
                  direction="row" justify="space-between">

                <Grid item>
                    {
                        lecture === true ? null :
                            <Grid item md={12} container>
                                <p style={{marginBottom: 0, marginRight: 10}}>
                                    <b>{translation.language["label.global.high.grade"]}:</b>{highGrade}</p>
                                <p style={{marginBottom: 0, marginRight: 10}}>
                                    <b>{translation.language["label.global.low.grade"]}: </b>{lowGrade}</p>
                                <p style={{marginBottom: 0, marginRight: 10}}>
                                    <b>{translation.language["label.global.your.grade"]} </b></p>
                            </Grid>
                    }
                </Grid>

                <Grid item>
                    <Grid container alignItems="center" style={{marginTop: 10}}>
                        <Chip icon={<GetAppIcon style={{color: 'white'}}/>}
                              label={translation.language["label.global.download"]}
                              component="a"
                              href={JavaEndpoint + translation.language["route.teacher.resource.download"] + resourceCode}
                              target="_blank"
                              clickable
                              style={{backgroundColor: 'green', color: 'white'}}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" style={{marginTop: 10}}>
                        <Chip
                            icon={<PublishIcon/>}
                            label={translation.language["label.global.submit"]}
                            component="a"
                            href="#chip" clickable
                            color={'primary'}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}


export default TaskCard