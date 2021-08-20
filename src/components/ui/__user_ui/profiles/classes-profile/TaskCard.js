/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {Button, Chip} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
    S3BucketEndPoint
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {Fragment} from "react";
import {convertDateTime} from "../../../utils/dateFormat/DateTimeFormatToDateWord";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {deleteToS3, uploadToS3} from "../../../../../store/middleware/utils/S3bukcet/s3";
import {baseUrl} from "../../../../../store/middleware/axios";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {checkStringEmpty} from "../../../utils/validation";
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';

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
                      translation,
                      type,
                      todo,
                      id,
                      url,
                      unSubmitUrl,
                      initData,
                      response
                  }) => {


    const upload = async (event) => {
        const file = event.target.files[0]

        const fileName = await uploadToS3(file)
        const params = new URLSearchParams()
        params.append('fileName', fileName)
        params.append('id', id)
        await baseUrl.post(url, params).then(e => {
            alert("Uploaded Successful")
        })
        initData()
    }

    const unSubmit = async () => {
        await deleteToS3(resourceCode)
        const params = new URLSearchParams()
        params.append('id', id)
        await baseUrl.post(unSubmitUrl, params).then(ignored => {
            alert("Un-submit Success")
        })
        initData()

    }


    return <Grid component={Paper} container style={{padding: 10, marginBottom: 10}}>
        <Grid item container>
            <Grid item md={12} container
                  direction="row" justify="space-between">
                <h2 className={style.marginZero}>
                    {resourceName}
                </h2>
                <h2 className={style.marginZero}>{type}</h2>
                <p className={style.marginZero}>
                    <b>{translation.language["label.global.date.upload"]}: </b>
                    {convertDateTime(createdAt)}
                </p>
            </Grid>
            <Grid item md={12} container
                  direction="row" justify="space-between">
                <h4 className={style.marginZero}>
                    {teacherName}
                </h4>

                <p className={style.marginZero}>
                    {
                        lecture === true ? null :
                            <Fragment>
                                <b>{translation.language["label.global.date.deadline"]}: </b>
                                {convertDateTime(deadLine)}
                            </Fragment>
                    }
                </p>

            </Grid>
            {
                checkStringEmpty(response) && lecture !== true ? null :
                    <Grid item md={12} container
                          direction="row" justify="space-between">
                        {response === 'Late' ?
                            <Chip
                                label={response}
                                variant="outlined"
                                size={'small'}
                                color={'secondary'}
                                icon={<ErrorIcon/>}/> :
                            <Chip
                                label={response}
                                variant="outlined" size={'small'}
                                style={{borderColor: 'green', color: 'green'}}
                                icon={<CheckIcon style={{color: 'green'}}/>}/>
                        }

                    </Grid>
            }

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
                        <Button
                            disableElevation
                            variant="contained"
                            style={{backgroundColor: '#228B22', color: 'white'}}
                            startIcon={<GetAppIcon/>}
                            component={'a'}
                            target="_blank"
                            href={S3BucketEndPoint + resourceCode}
                        >
                            {translation.language["label.global.download"]}
                        </Button>

                    </Grid>
                </Grid>

                {
                    todo ?
                        <Grid item>
                            <Grid container alignItems="center" style={{marginTop: 10}}>
                                <div>
                                    <input
                                        style={{display: 'none'}}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={(event) => upload(event)}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button
                                            disableElevation
                                            variant="contained"
                                            color="primary"
                                            startIcon={<CloudUploadIcon/>}
                                            component={'span'}
                                        >
                                            Upload
                                        </Button>
                                    </label>

                                </div>

                            </Grid>
                        </Grid> :

                        <Grid item>
                            <Grid container alignItems="center" style={{marginTop: 10}}>
                                <Button
                                    disableElevation
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<HighlightOffIcon/>}
                                    component={'span'}
                                    onClick={unSubmit}
                                >
                                    UnSubmit
                                </Button>

                            </Grid>
                        </Grid>

                }
            </Grid>
        </Grid>
    </Grid>
}


export default TaskCard