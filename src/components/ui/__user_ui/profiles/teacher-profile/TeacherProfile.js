/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import {connect} from 'react-redux'
import {useEffect, useState} from "react";
import Logs from './logs/Logs'
import Data from './data/Data'
import {withRouter} from 'react-router-dom';
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Teacher} from "../../../../../store/utils/Specify";
import {Fragment} from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {S3BucketEndPoint} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


const TeacherProfile = ({
                            teacherState,
                            initData,
                            match,
                            translation,
                            user}) => {


    const style = ProfileStyle()
    const [name, setName] = useState('')

    const [update, setUpdate] = useState(false)
    const [canUpdate, setCanUpdate] = useState(false)

    const [dataComponent, setDataComponent] = useState(false)
    const [logsComponent, setLogsComponent] = useState(false)


    // for changing the photo
    const [photo, setPhoto] = useState('')
    const [photoDisplay, setPhotoDisplay] = useState(null)

    useEffect(() => {
        getProfileData()
    }, [initData, match.params.id])


    useEffect(() => {

        if (teacherState.profile !== null) {
            setName(`${teacherState.profile.user.firstName} ${teacherState.profile.user.lastName}`)
            setDataComponent(true)
            setPhoto(teacherState.profile.user.picture)
        }

    }, [teacherState])


    const data = () => {
        setDataComponent(true)
        setLogsComponent(false)
    }

    const logs = () => {
        setDataComponent(false)
        setLogsComponent(true)
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

    console.log(teacherState)


    return (
        <Grid container className={style.container}>
            {
                teacherState.loading === true && teacherState.error === null && teacherState.profile === null ?
                    <CircularProgress style={{margin: 'auto'}} disableShrink/> :
                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper}>
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp"
                                        style={{
                                            border: '.1px solid lightgray'
                                        }}
                                        src={teacherState.profile.user.picture !== '' && photoDisplay ===null ? S3BucketEndPoint + teacherState.profile.user.picture: photoDisplay}
                                >
                                    {`${teacherState.profile.user.firstName.charAt(0).toUpperCase()} 
                                    ${teacherState.profile.user.lastName.charAt(0).toUpperCase()}`}
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
                                            <Button color="primary"
                                                    onClick={logs}>{translation.language["label.global.class.logs"]}</Button>
                                    }
                                </Grid>

                                {
                                    canUpdate ? <Button color="primary"
                                                        onClick={editClick}>{translation.language["label.button.edit"]}</Button> : null
                                }
                            </Grid>
                        </Grid>


                        <Grid container component={Container} className={style.profileData}>
                            <Grid className={style.profileInfo} container component={Paper}>
                                {
                                    dataComponent ?
                                        <Data translation={translation}
                                              teacher={teacherState.profile}
                                              cancel={() => setUpdate(false)}
                                              canUpdate={canUpdate}
                                              update={update}
                                              photo={photo}
                                              getProfileData={getProfileData}
                                        />
                                        :
                                        logsComponent ?
                                            <Logs translation={translation}
                                                  attendances={teacherState.profile.classAttendances}
                                                  teacher={teacherState.profile.teacher}/> : null
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
        teacherState: state.TeacherProfile,
        user: state.CurrentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Teacher))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeacherProfile))