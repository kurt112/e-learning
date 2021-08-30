/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import {connect} from 'react-redux'
import {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import Logs from './logs/Logs'
import Data from './data/Data'
import {Fragment} from 'react'
import * as action from '../../../../../store/action/__ActionGlobal/ProfileAction'
import {Student} from "../../../../../store/utils/Specify";
import {S3BucketEndPoint} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Grade from "../../student/grade/Grade";

const StudentProfile = ({
                            studentState,
                            match,
                            initData,
                            translation,
                            user
                        }) => {

    const style = ProfileStyle()

    const [name, setName] = useState('')

    const [update, setUpdate] = useState(false)
    const [canUpdate, setCanUpdate] = useState(false)

    const [dataComponent, setDataComponent] = useState(false)
    const [logsComponent, setLogsComponent] = useState(false)
    const [gradeComponent, setGradeComponent] =useState(false)


    // for changing the photo
    const [photo, setPhoto] = useState('')
    const [photoDisplay, setPhotoDisplay] = useState(null)

    useEffect(() => {
        getProfileData()
    }, [initData, match.params.id])

    useEffect(() => {
        if (studentState.profile !== null) {
            console.log(studentState)
            setName(`${studentState.profile.user.firstName} ${studentState.profile.user.lastName}`)
            setDataComponent(true)
            setPhoto(studentState.profile.user.picture)
        }

    }, [studentState])


    const data = () => {
        setDataComponent(true)
        setLogsComponent(false)
        setGradeComponent(false)
    }

    const logs = () => {
        setDataComponent(false)
        setLogsComponent(true)
        setGradeComponent(false)
    }

    const grade= () => {
        setDataComponent(false)
        setLogsComponent(false)
        setGradeComponent(true)
    }






    const editClick = () => {
        const isUpdate = !update
        setUpdate(isUpdate)
        setLogsComponent(false)
        setDataComponent(true)
    }

    const changePhoto = (event) => {
        const newPhoto = event.target.files[0]
        setPhoto(newPhoto)
        setPhotoDisplay(URL.createObjectURL(newPhoto))
    }

    const getProfileData = () => {
        const id = match.params.id;
        if (id === user.user.email) setCanUpdate(true)
        initData(id)
    }

    console.log(studentState)


    return (
        <Grid container>
            {studentState.loading === true && studentState.error === null ?
                <CircularProgress style={{margin: 'auto'}} disableShrink/> :
                <Fragment>
                    <Grid container className={style.profileHeader} component={Paper}>
                        <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                            <Avatar className={style.avatar} alt="Remy Sharp"
                                    style={{
                                        border: '.1px solid lightgray'
                                    }}
                                    src={studentState.profile.user.picture !== '' && photoDisplay === null ? S3BucketEndPoint + studentState.profile.user.picture : photoDisplay}
                            >
                                {`${studentState.profile.user.firstName.charAt(0).toUpperCase()} 
                                    ${studentState.profile.user.lastName.charAt(0).toUpperCase()}`}
                            </Avatar>

                        </Grid>
                        <Typography className={style.profileName} variant="h3" component="h2">

                            {
                                update === true ?
                                    <div className={style.button}>
                                        <input
                                            accept="image/*"
                                            id="contained-button-file"
                                            type="file"
                                            style={{display: 'none'}}
                                            onChange={changePhoto}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained"
                                                    color="primary"
                                                    component="span"
                                                    startIcon={<CloudUploadIcon/>}
                                                    disableElevation
                                            >
                                                Change Photo
                                            </Button>
                                        </label>
                                    </div>
                                    : name
                            }

                        </Typography>
                        <br/>
                        <Hidden smDown>
                            <Divider/>
                        </Hidden>
                        <Grid className={style.profileButton} container>
                            <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12}>
                                <Button color="primary"
                                        onClick={data}>{translation.language["label.global.details"]}</Button>
                                {
                                    update === true ? null :
                                        <Fragment>
                                            <Button color="primary"
                                                    onClick={logs}>{translation.language["label.global.class.logs"]}
                                            </Button>

                                            <Button color="primary" onClick={grade}>
                                                Grades
                                            </Button>

                                        </Fragment>
                                }
                            </Grid>
                            {
                                canUpdate ? <Button color="primary"
                                                    onClick={editClick}>{translation.language["label.button.edit"]}</Button> : null
                            }
                        </Grid>
                    </Grid>

                    <Grid container component={Container} className={style.profileData}>
                        <Grid container component={Paper}>
                            {
                                dataComponent ? <Data
                                        translation={translation}
                                        student={studentState.profile}
                                        photo={photo}
                                        canUpdate={canUpdate}
                                        update={update}
                                        cancel={() => setUpdate(false)}
                                        getProfileData={getProfileData}
                                    /> :
                                        logsComponent ? <Logs translation={translation} attendances={studentState.profile.classAttendances}/> :
                                            gradeComponent? <Grade translation={translation} grades={studentState.profile.studentGrades}/>:null
                            }
                        </Grid>
                    </Grid>
                </Fragment>

            }

        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        studentState: state.StudentProfile,
        user: state.CurrentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Student))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentProfile))