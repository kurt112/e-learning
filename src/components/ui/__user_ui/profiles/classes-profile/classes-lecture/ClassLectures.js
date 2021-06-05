import ProfileStyle from '../../ProfileStyle'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {Chip} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
const ClassLecture = ({lectures}) => {
    const style = ProfileStyle()
    return (
        <Grid container>
            <Grid item container justify="center">
                <h1>Lectures</h1>
                <Grid component={Paper} container style={{padding: 10,  marginBottom: 10}}>
                    <Grid item container>
                        <Grid item md={12} container
                              direction="row" justify="space-between">
                            <h2 className={style.marginZero}>
                                Sample title
                            </h2>
                            <p className={style.marginZero}>
                                <b>Date Upload:</b>
                            </p>
                        </Grid>
                        <Grid item md={12} container
                              direction="row" justify="space-between">
                            <h4 className={style.marginZero}>
                                Teacher
                            </h4>
                            <p className={style.marginZero}>
                                <b>DeadLine:</b>
                            </p>
                        </Grid>

                        <Grid item md={12} container>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non.
                            </p>
                        </Grid>
                        <Divider style={{width: '100%'}}/>

                        <Grid container
                              direction="row" justify="space-between">

                            <Grid item>
                                <Grid item md={12} container>
                                    <p style={{marginBottom: 0}}><b>Low Grade: </b></p>
                                    <p style={{marginBottom: 0}}><b>High Grade: </b></p>
                                    <p style={{marginBottom: 0}}><b>Your Grade: </b></p>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container alignItems="center" style={{marginTop: 10}}>
                                    <Chip icon={<GetAppIcon style={{color: 'white'}}/>}
                                          label="Download"
                                          component="a"
                                          href="#chip"
                                          clickable
                                          style={{backgroundColor: 'green', color: 'white'}}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center" style={{marginTop: 10}}>
                                    <Chip
                                        icon={<PublishIcon/>}
                                        label="Submit"
                                        component="a"
                                        href="#chip" clickable
                                        color={'primary'}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>


    )
}

export default ClassLecture;