import {Fragment} from "react";
import {Box, Divider, Fab, Paper, Tooltip} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VideoCallIcon from '@material-ui/icons/VideoCall';

const CurrentClasses = ({style}) => <Fragment>
    <Box component={Paper} className={style.classes}>
        <div className={style.classesTop} style={{backgroundColor: '#b71c1c'}}>

            <div className={style.className}>
                <p>IT ELECTIVES</p>
            </div>
            <div className={style.classGradeSection}>
                <p>11 - Alien</p>
            </div>

            <div className={style.classTeacher}>
                <p>Kurt Oriouqe</p>
            </div>
        </div>

        <img className={style.image}
             src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.0-9/56702378_2655041071233365_7647132881902370816_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGItDxV3T4oe7J0G3Gfa5nrGwkl7KZk1xMbCSXspmTXE99H00QSzkLF2NBIA860lVasMjmcmjOtyN-7jyaErtut&_nc_ohc=XM3EyyZVxaAAX8bfeW6&_nc_ht=scontent.fmnl17-1.fna&oh=2c4c7c3cb26de44e4a33ebd4eaa006bb&oe=6055DF8D"
        />

        <div className={style.classDescription}>
            <p>orem Ipsum is sunchanged. It was asdas popularised inasdfasdfasdf the 1960s with the release of Letraset
                sheets containing
                Lorem Ipsum passa Ipsum is sunchanged. It was asdas popularisedIt was asdas popularisedIt was asdas
                popularisedIt was asdas popularisedIt was asdas popularisedIt was asdas popularised</p>
        </div>

        <Divider/>

        <div className={style.classFooter}>


            <div className={style.iconsFooter}>
                <Tooltip title="View Activity" aria-label="add">

                    <MenuBookIcon style={{fontSize: 30}}/>

                </Tooltip>
            </div>

            <div className={style.iconsFooter}>
                <Tooltip title="Start Class" aria-label="add">
                    <VideoCallIcon fontSize={'large'}/>

                </Tooltip>

            </div>
        </div>
    </Box>
</Fragment>

export default CurrentClasses