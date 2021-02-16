import { Box } from "@material-ui/core"
import style from './InputStyle'

import SendIcon from '@material-ui/icons/Send'
export default function Input({ message, setMessage, sendMessage }) {
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
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <SendIcon className="button" onClick={event => sendMessage(event)} />
            </form>
        </Box>
    </Box>
}