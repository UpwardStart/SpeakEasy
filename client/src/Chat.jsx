import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"


const chatStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem'
 }

const Chat = ({socket, chat, username}) => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if(message){
    socket.emit('chat message', message)
  }
  setMessage('')

}
  return(
    <Box sx={chatStyle}>
      <Box component="div">
          <TextField onChange={e => {
            setMessage(e.target.value)
          }}
          value={message}
          variant="outlined"
          placeholder="Say 'Hello...'" />
          <Button
          onClick={sendMessage}
          variant="contained"
          sx={{height: 56}}>Send</Button>
        </Box>
      </Box>
  )
}

export default Chat
