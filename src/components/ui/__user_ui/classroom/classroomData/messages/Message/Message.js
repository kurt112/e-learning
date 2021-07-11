/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import style from './MessageStyle'
import ReactEmoji from 'react-emoji'
import clsx from 'clsx'
import {Tooltip} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";

const StyledTooltip = withStyles({
    tooltipPlacementLeft: {
        marginRight: -20,
        fontSize: 12
    },
    tooltipPlacementBottom: {
        marginTop: 0,
        fontSize: 12
    },


})(Tooltip);


export default function Message({message: {user, text, time}, name, isAnnouncement}) {

    const classes = style()
    let isSentByCurrentUser = false

    if (user.localeCompare(name) === 0) {
        isSentByCurrentUser = true
    }



    return (
        isAnnouncement ?
            <StyledTooltip title={time} placement="bottom">
                <div className={clsx(classes.announcementBox)}>
                    <p className={clsx(classes.announcementText)}>{text}</p>
                </div>
            </StyledTooltip>
            :
            isSentByCurrentUser ?
                (
                    <StyledTooltip title={time} placement="bottom-end">
                        <div className={clsx(classes.messageContainer, classes.justifyEnd)}>
                            <p className={clsx(classes.sentText, classes.prTen)}>{name}</p>
                            <div className={clsx(classes.messageBox, classes.backgroundBlue)}>
                                <p className={clsx(classes.messageText, classes.colorWhite)}>{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                    </StyledTooltip>
                )
                :
                (
                    <StyledTooltip title={time} placement="left-end">
                        <div className={clsx(classes.messageContainer, classes.justifyStart)}>
                            <div className={clsx(classes.messageBox, classes.backgroundLight)}>
                                <p className={clsx(classes.messageText, classes.colorDark)}>{ReactEmoji.emojify(text)}</p>
                            </div>
                            <p className={clsx(classes.sentText, classes.plTen)}>{user}</p>
                        </div>
                    </StyledTooltip>
                )

    )
}