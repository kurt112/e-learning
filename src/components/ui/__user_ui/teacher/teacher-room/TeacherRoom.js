import {Box, Button, ButtonGroup, Divider, Grid, Paper, Toolbar} from "@material-ui/core"
import {TeacherRoomTable as columns, TeacherInsertRoom as insert} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";
import clsx from "clsx";


const classesStyle = makeStyles(() => ({
    boxNavButtonContainer: {
        marginLeft: 10,
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
    },
    boxNavButton: {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 10,
        paddingLeft: 10,
    },

    active: {
        borderBottom: '3px solid orange'
    },

    classesContainer: {
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    className: {
        '& p': {
            fontSize: 25,
            textShadow: '0px 0px 9px #000000',
            padding:0,
            margin: 0,

        }
    },

    classGradeSection: {
        '& p': {
            fontSize: 15,
            padding:0,
            margin: 0,
            fontWeight: "bold"

        }
    },

    classDescription: {
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1
    },

    classTeacher: {

    },

    classSubject:{

    },

    classes:{
        width: 300,
        height:300,
        textOverflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        borderTopRightRadius: '40%',
        marginLeft: 20,
        marginBottom: 20
    },

    classesTop: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight:10,
        color:'white',

        borderBottomLeftRadius: '20%',
        borderTopRightRadius: '40%',

    },

    classFooter: {
        paddingLeft: 10,
        paddingRight: 10,
    }

}))

export default function TeacherRoom() {

    const classes = style()
    const currentStyle = classesStyle()
    const [currentClassActive, setCurrentClassActive] = useState(true)

    const currentClassClick = () => {
        setCurrentClassActive(true)
    }

    const doneClassesClick = () => {
        setCurrentClassActive(false)
    }

    return (
        <Grid component="main" className={classes.root}>
            <Box  className={currentStyle.boxNavButtonContainer}>
                <Box  onClick={currentClassClick} className={clsx(currentStyle.boxNavButton, currentClassActive === true? currentStyle.active: null)}>
                    <span>Current Class</span>
                    <br/>
                    <AccessTimeIcon/>
                </Box>

                <Box onClick={doneClassesClick}  className={clsx(currentStyle.boxNavButton, currentClassActive !== true? currentStyle.active: null)}>
                    <span>Done Classes</span>
                    <br/>
                    <AccessTimeIcon/>
                </Box>
            </Box>
            <Divider />

            <div className={currentStyle.classesContainer}>
                <Box component={Paper} className={currentStyle.classes}>
                    <div className={currentStyle.classesTop} style={{backgroundColor: '#b71c1c'}}>

                        <div className={currentStyle.className}>
                            <p>IT ELECTIVES</p>
                        </div>
                        <div className={currentStyle.classGradeSection}>
                            <p>11 - Alien</p>
                        </div>

                        <div className={currentStyle.classTeacher}>
                            <p>Kurt Oriouqe</p>
                        </div>
                    </div>

                    <div className={currentStyle.classDescription}>
                        <p>orem Ipsum is sunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    </div>

                    <Divider/>

                    <div className={currentStyle.classFooter}>
                        <p>asdk;ao </p>
                    </div>
                </Box>

                <Box component={Paper} className={currentStyle.classes}>
                    <div className={currentStyle.classesTop} style={{backgroundColor: '#bf360c'}}>

                        <div className={currentStyle.className}>
                            <p>Java Programming</p>
                        </div>
                        <div className={currentStyle.classGradeSection}>
                            <p>12 - CS</p>
                        </div>

                        <div className={currentStyle.classTeacher}>
                            <p>Kurt Oriouqe</p>
                        </div>
                    </div>

                    <div className={currentStyle.classDescription}>
                        <p>orem Ipsum is sunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    </div>

                    <Divider/>

                    <div className={currentStyle.classFooter}>
                        <p>asdk;ao </p>
                    </div>
                </Box>

                <Box component={Paper} className={currentStyle.classes}>
                    <div className={currentStyle.classesTop} style={{backgroundColor: '#d50000'}}>

                        <div className={currentStyle.className}>
                            <p>C++ Programming</p>
                        </div>
                        <div className={currentStyle.classGradeSection}>
                            <p>BSCS</p>
                        </div>

                        <div className={currentStyle.classTeacher}>
                            <p>Kurt Oriouqe</p>
                        </div>
                    </div>

                    <div className={currentStyle.classDescription}>
                        <p>orem Ipsum is sunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    </div>

                    <Divider/>

                    <div className={currentStyle.classFooter}>
                        <p>asdk;ao </p>
                    </div>
                </Box>

                <Box component={Paper} className={currentStyle.classes}>
                    <div className={currentStyle.classesTop} style={{backgroundColor: '#c51162'}}>

                        <div className={currentStyle.className}>
                            <p>Capstone 1</p>
                        </div>
                        <div className={currentStyle.classGradeSection}>
                            <p>BSIT</p>
                        </div>

                        <div className={currentStyle.classTeacher}>
                            <p>Kurt Oriouqe</p>
                        </div>
                    </div>

                    <div className={currentStyle.classDescription}>
                        <p>orem Ipsum is sunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    </div>

                    <Divider/>

                    <div className={currentStyle.classFooter}>
                        <p>asdk;ao </p>
                    </div>
                </Box>

                <Box component={Paper} className={currentStyle.classes}>
                    <div className={currentStyle.classesTop} style={{backgroundColor: '#212121'}}>

                        <div className={currentStyle.className}>
                            <p>Capstone 2</p>
                        </div>
                        <div className={currentStyle.classGradeSection}>
                            <p>BSIS</p>
                        </div>

                        <div className={currentStyle.classTeacher}>
                            <p>Kurt Oriouqe</p>
                        </div>
                    </div>

                    <div className={currentStyle.classDescription}>
                        <p>orem Ipsum is sunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    </div>

                    <Divider/>

                    <div className={currentStyle.classFooter}>
                        <p>asdk;ao </p>
                    </div>
                </Box>


            </div>

        </Grid>

    )
}