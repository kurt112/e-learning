import {Fragment} from "react";
import {Box, Divider, Paper, Tooltip} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Link} from "react-router-dom";

const CurrentClasses = ({style, classes}) => {
    console.log(classes)
    return classes.map((e) => {
        return (
            <Fragment key={e.id}>
                <Box component={Paper} className={style.classes}>
                    <div className={style.classesTop} style={{backgroundColor: '#b71c1c'}}>

                        <div className={style.className}>
                            <p>{e.subject.subjectName}</p>
                        </div>
                        <div className={style.classGradeSection}>
                            <p>{
                                `${e.roomShift.grade} - ${e.roomShift.section} ( ${e.startTime} - ${e.endTime} )`
                            }</p>
                        </div>

                        <div className={style.classTeacher}>
                            <p>
                                {
                                    `${e.teacher.user.firstName} 
                                    ${e.teacher.user.lastName}`
                                }
                            </p>
                        </div>
                    </div>

                    <img className={style.image}
                         src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.0-9/56702378_2655041071233365_7647132881902370816_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGItDxV3T4oe7J0G3Gfa5nrGwkl7KZk1xMbCSXspmTXE99H00QSzkLF2NBIA860lVasMjmcmjOtyN-7jyaErtut&_nc_ohc=XM3EyyZVxaAAX8bfeW6&_nc_ht=scontent.fmnl17-1.fna&oh=2c4c7c3cb26de44e4a33ebd4eaa006bb&oe=6055DF8D"
                    />

                    <div className={style.classDescription}>
                        <p>orem Ipsum is sunchanged. It was asdas popularised inasdfasdfasdf the 1960s with the release
                            of Letraset
                            sheets containing
                            Lorem Ipsum passa Ipsum is sunchanged. It was asdas popularisedIt was asdas popularisedIt
                            was asdas
                            popularisedIt was asdas popularisedIt was asdas popularisedIt was asdas popularised</p>
                    </div>

                    <Divider/>

                    <div className={style.classFooter}>
                        <div className={style.schedule}>
                            <p>{`${e.day} `}</p>
                        </div>
                       <Link to={`/roomShiftClass/profile/${e.id}`}>
                           <div className={style.iconsFooter}>

                               <Tooltip title="View Activity" aria-label="add">

                                   <MenuBookIcon style={{fontSize: 30}}/>

                               </Tooltip>
                           </div>
                       </Link>
                        <Link to={`/classroom/${e.roomShift.room.id}${e.id}${e.subject.subjectCode}`}>
                            <div className={style.iconsFooter}>
                                <Tooltip title="Join Class" aria-label="add">
                                    <VideoCallIcon fontSize={'large'}/>

                                </Tooltip>

                            </div>
                        </Link>
                    </div>
                </Box>
            </Fragment>
        )
    })
}

export default CurrentClasses