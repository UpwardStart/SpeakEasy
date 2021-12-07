import { Box, TextField, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"


const chatStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem'
 }

const Chat = ({socket, chat: room, username: author}) => {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList ] = useState([])
  const sendMessage = async () => {
    if(message){
    const messageData = {
      room,
      author,
      message,
      time: Date.now()
    }
    await socket.emit('send_message', messageData)
    setMessageList(list => [...list, messageData])
    setMessage('')
  }
}
  useEffect(() => {
    socket.on('receive_message', messageData => {
      setMessageList(list =>  [...list, messageData])
    })
  }, [socket])
  return(
    <Box sx={chatStyle}>
      <Box component="div">
        <Box component="div" sx={{bgcolor: 'gray'}}>
          <Typography variant="h6" sx={{color: 'whitesmoke'}}>Live Chat</Typography>
        </Box>
        <Box component="div">
          <Box component="div" sx={{ overflow: 'scroll', maxHeight:'10rem', height:'10rem', maxWidth:400, display:'flex', flexWrap:'wrap'}}>
          {messageList.map(messages => {
          return (
            <Box component="div" sx={{width: '100%'}}>
            <Typography variant="p" fullWidth>{messages.message}</Typography>
            </Box>
          )})}
        </Box>
        </Box>
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
