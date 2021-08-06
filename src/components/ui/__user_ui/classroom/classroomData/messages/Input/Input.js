/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box } from "@material-ui/core"
import style from './InputStyle'

import SendIcon from '@material-ui/icons/Send'
import {useState} from "react";
import moment from "moment";
export default function Input({socket}) {
    const [message, setMessage] = useState('')
    const classes = style()

    const send = (event) => {
        event.preventDefault()
        if(message.trim() !== ''){
            const m = moment()
            if (message) {
                socket.current.emit('sendMessage', message, m.format('h:mm a'), false, () => setMessage(''))
            }
        }
    }

    return <Box className={classes.rightMessageTool}>
        <Box>
            <form >
                <input
                    className="input"
                    text="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? send(event) : null}
                />
                <SendIcon className="button" onClick={event => send(event)} />
            </form>
        </Box>
    </Box>
}