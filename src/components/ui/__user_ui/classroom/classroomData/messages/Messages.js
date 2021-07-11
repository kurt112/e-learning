/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import Message from './Message/Message'
import style from '../GlobalStyle'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Messages({messages, current}) {

    const classes = style()

    return <ScrollToBottom className={classes.messagesTab}>
        {
            messages.map((message, index) =>
                <Message key={index} message={{
                    user: message.message.sender,
                    text: message.message.message,
                    time: message.message.time,
                }}
                         name={current} isAnnouncement={message.isAnnouncement}/>)
        }

    </ScrollToBottom>
}