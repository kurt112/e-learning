import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {convertDateTime} from "../../../utils/dateFormat/DateTimeFormatToDateWord";
import {Fragment, useState} from "react";
import {Button} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {S3BucketEndPoint} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import GradeIcon from '@material-ui/icons/Grade';
import ProfileStyle from '../../profiles/ProfileStyle'
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputGradeDialog from "../InputGradeDialog";
import DeleteIcon from '@material-ui/icons/Delete';
import {baseUrl} from "../../../../../store/middleware/axios";
/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 25/08/2021, Wednesday
 **/
const TeacherGradeCard = ({translation,data,initData,toGrade}) => {

    const style = ProfileStyle()

    const [grade,setGrade] = useState(false)

    const removeGrade = async () => {


        const params = new URLSearchParams()
        params.append('id', data.id)
        params.append('grade', '0')
        await baseUrl.post(data.url, params).then(ignored => {})
        initData()
        alert("Grade Remove Success")

    }
    return <Fragment>
        <InputGradeDialog highGrade={data.highGrade} lowGrade={data.lowGrade} id={data.id} initData={initData} url={data.url} dialog={grade} handleClose={() => setGrade(false)}/>
        <Grid component={Paper} container style={{padding: 10, marginBottom: 10}}>
            <Grid item container>
                <Grid item md={12} container
                      direction="row" justify="space-between">
                    <h2 className={style.marginZero}>
                        {`Grade Section: ${data.grade} ${data.section}`}
                    </h2>
                    <h2 className={style.marginZero}>{data.type}</h2>
                    <p className={style.marginZero}>
                        <b>{translation.language["label.global.submitted.on"]}: </b>
                        {convertDateTime(data.submittedOn)}
                    </p>
                </Grid>
                <Grid item md={12} container
                      direction="row" justify="space-between">
                    <h4 className={style.marginZero}>
                        {translation.language['label.global.submitted.by']}: {data.name}
                    </h4>

                    <p className={style.marginZero}>
                        <b>{translation.language["label.global.status"]}: </b>
                        {data.status}
                    </p>

                </Grid>
                <Grid item md={12} container
                      direction="row" justify="space-between">

                    <h4>
                        {translation.language['label.global.subject']}: {data.subject}
                    </h4>
                </Grid>

                <Grid item md={12} container>
                    <p>
                        {data.description}
                    </p>
                </Grid>

                <Divider style={{width: '100%'}}/>

                <Grid container
                      direction="row" justify="space-between">

                    <Grid item>
                        <Grid item md={12} container>
                            <p style={{marginBottom: 0, marginRight: 10}}>
                                <b>{translation.language["label.global.high.grade"]}:</b>{data.highGrade}</p>
                            <p style={{marginBottom: 0, marginRight: 10}}>
                                <b>{translation.language["label.global.low.grade"]}: </b>{data.lowGrade}</p>
                            {
                                toGrade === false?
                                    <p style={{marginBottom: 0, marginRight: 10}}>
                                        <b>Grade: </b>{data.grade}</p>:null
                            }
                        </Grid>
                        {/*{*/}
                        {/*    lecture === true ? null :*/}
                        {/*      */}
                        {/*}*/}
                    </Grid>

                    <Grid item>
                        <Grid container alignItems="center" style={{marginTop: 10}}>
                            {
                                toGrade?<Button
                                    onClick={() => setGrade(true)}
                                    disableElevation
                                    variant="contained"
                                    style={{backgroundColor: '#228B22', color: 'white'}}
                                    startIcon={<GradeIcon/>}
                                    component={'a'}
                                    target="_blank"
                                >
                                    {translation.language["label.global.grade"]}
                                </Button>:
                                    <Button
                                        onClick={removeGrade}
                                        disableElevation
                                        variant="contained"
                                        startIcon={<DeleteIcon/>}
                                        component={'a'}
                                        color={'secondary'}
                                    >
                                        Remove Grade
                                    </Button>
                            }

                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container alignItems="center" style={{marginTop: 10}}>
                            <a href={S3BucketEndPoint +data.location}
                               target="_blank"
                               style={{textDecoration: 'none'}}
                               rel="noopener noreferrer">
                                <Button   disableElevation
                                          variant="contained"
                                          color="primary"
                                          startIcon={<VisibilityIcon/>}
                                          component={'span'}>
                                    View
                                </Button>
                            </a>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Fragment>
}

export default TeacherGradeCard
