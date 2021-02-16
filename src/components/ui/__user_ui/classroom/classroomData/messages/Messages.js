import Message from './Message/Message'
import style from '../GlobalStyle'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Messages({messages, current}) {

    const classes = style()

    return <ScrollToBottom className={classes.messagesTab}>
        {
            messages.map((message, index) => <Message key={index} message={{
                user: message.sender,
                text: message.message,
                time: message.time,
            }}
                                                      name={current} isAnnouncement={message.isAnnouncement}/>)
        }

    </ScrollToBottom>
}