import {Box, Divider, Grid} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {useEffect, useState} from "react";
import clsx from "clsx";
import ClassesCard from "./ClassesCard";
import ClassesStyle from "../../../_style/ClassesStyle";

const ClassesList = ({classes}) => {

    console.log(classes)

    const currentStyle = ClassesStyle()
    const [currentClassActive, setCurrentClassActive] = useState(true)

    // classes data
    const [currentClass, setCurrentClass] = useState()
    const [archiveClass, setArchiveClass] = useState()

    useEffect(() => {
        const tempCurrentClass = []
        const tempArchiveClass = []

        if (classes !== undefined) {

            classes.map(e => {
                if (e.status === 1) tempCurrentClass.push(e)
                else tempArchiveClass.push(e)
            })

            setCurrentClass(tempCurrentClass)
            setArchiveClass(tempArchiveClass)
        }
    }, [classes])


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
                    <span>Current Class</span>
                    <br/>
                    <AccessTimeIcon/>

                </Box>

                <Box onClick={archiveClassClick}
                     className={clsx(currentStyle.boxNavButton, currentClassActive !== true ? currentStyle.active : null)}>
                    <span>Archive Classes</span>
                    <br/>
                    <AccessTimeIcon/>
                </Box>
            </Box>
            <Divider/>

            <div className={currentStyle.classesContainer}>
                {
                    currentClassActive ?
                        <ClassesCard style={currentStyle} classes={currentClass}/>
                        :
                        <ClassesCard style={currentStyle} classes={archiveClass}/>
                }
            </div>
        </Grid>

    )
}

export default ClassesList