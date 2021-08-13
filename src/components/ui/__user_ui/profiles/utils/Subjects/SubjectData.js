/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 14/08/2021, Saturday
 **/
import ProfileStyle from "../../ProfileStyle";
import {Avatar} from "@material-ui/core";


const SubjectData = ({index,border, subject,translation}) => {
    const style = ProfileStyle()


    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar className={index % 2 === 0? style.blue: style.orange}>{subject.subjectName.substring(0,1).toUpperCase()}</Avatar>
                <p>{subject.subjectName}</p>
            </div>
        </div>
    )
}

export default SubjectData