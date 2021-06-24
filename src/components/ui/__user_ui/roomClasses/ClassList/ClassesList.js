import {Box, Divider, Grid} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useState} from "react";
import clsx from "clsx";
import ClassesCard from "./ClassesCard";
import ClassesStyle from "../../../_style/ClassesStyle";

const ClassesList = ({currentClass,archiveClass,translation}) => {


    const currentStyle = ClassesStyle()
    const [currentClassActive, setCurrentClassActive] = useState(true)


    const currentClassClick = () => {
        setCurrentClassActive(true)
    }

    const archiveClassClick = () => {
        setCurrentClassActive(false)
    }

    return (
        <Grid component="main">
            <Box className={currentStyle.boxNavButtonContainer}>
                <Box onClick={currentClassClick}
                     className={clsx(currentStyle.boxNavButton, currentClassActive === true ? currentStyle.active : null)}>
                    <span>{translation.language["label.global.current.class"]}</span>
                    <br/>
                    <AccessTimeIcon/>

                </Box>

                <Box onClick={archiveClassClick}
                     className={clsx(currentStyle.boxNavButton, currentClassActive !== true ? currentStyle.active : null)}>
                    <span>{translation.language["label.global.archive.class"]}</span>
                    <br/>
                    <AccessTimeIcon/>
                </Box>
            </Box>
            <Divider/>

            <div className={currentStyle.classesContainer}>
                {
                    currentClassActive ?
                        <ClassesCard translation={translation} style={currentStyle} classes={currentClass}/>
                        :
                        <ClassesCard translation={translation} style={currentStyle} classes={archiveClass}/>
                }
            </div>
        </Grid>

    )
}

export default ClassesList