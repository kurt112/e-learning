/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box } from "@material-ui/core"
import style from './InputStyle'

import SendIcon from '@material-ui/icons/Send'
import {useState} from "react";
export default function Input({  sendMessage }) {
    const [message, setMessage] = useState('')
    const classes = style()
    return <Box className={classes.rightMessageTool}>
        <Box>
            <form >
                <input
                    className="input"
                    text="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event,setMessage,message) : null}
                />
                <SendIcon className="button" onClick={event => sendMessage(event,setMessage,message)} />
            </form>
        </Box>
    </Box>
}