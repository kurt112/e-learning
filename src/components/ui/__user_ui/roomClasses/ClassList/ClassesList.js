import {Box, Divider, Grid} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {useState} from "react";
import clsx from "clsx";
import CurrentClasses from "./CurrentClasses";
import DoneClasses from "./DoneClasses";
import ClassesStyle from "../../../_style/ClassesStyle";

const ClassesList= () => {

    const currentStyle = ClassesStyle()
    const [currentClassActive, setCurrentClassActive] = useState(true)



    const [Classes, setClasses] = useState(<CurrentClasses style={currentStyle}/>)

    const currentClassClick = () => {
        setCurrentClassActive(true)
        setClasses(<CurrentClasses style={currentStyle}/>)
    }

    const doneClassesClick = () => {
        setCurrentClassActive(false)
         setClasses(<DoneClasses style={currentStyle}/>)
    }

    return (
        <Grid component="main" >
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
                {Classes}
            </div>

        </Grid>

    )
}

export default ClassesList