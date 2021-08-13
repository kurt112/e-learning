import {Fragment} from "react";
import {Avatar, Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SubjectData from "../Subjects/SubjectData";
import ProfileStyle from "../../ProfileStyle";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 14/08/2021, Saturday
 **/

const CurriculumData = ({index,border, curriculum}) => {
    const style = ProfileStyle()

    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar className={index % 2 === 0? style.blue: style.orange}>{curriculum.name.substring(0,1).toUpperCase()}</Avatar>
                <p>{curriculum.name}</p>
            </div>
        </div>
    )
}

export default CurriculumData