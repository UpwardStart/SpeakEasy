import io from 'socket.io-client'
import {Box, TextField, Button} from '@mui/material'
import { useState } from 'react'
import Chat from './Chat'
const socket = io.connect("http://localhost:3003")


const centerStyle  = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
  }

export default function ChatRoom() {
  const [username, setUsername]  = useState('');
  const [chat, setChat] = useState('')

  const joinRoom = () => {
    if(username !== '' && chat !== ''){
      socket.emit('join_room', chat)
    }
  }

  return (
    <Box sx={centerStyle}>
      <Box component="div" sx={{height: 100}}>
      <TextField
      variant="outlined"
      label="Chat Room"
      sx={{width: 500, marginTop: '2rem'}}
      value={chat}
      onChange={e => setChat(e.target.value)}
      />
      </Box>
      <Box component="div">
        <TextField
        variant="outlined"
        label="Username"
        sx={{width: 500}}
        value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Box>
      <Box component="div" sx={{ marginTop: '2rem'}}>
        <Button variant="contained" onClick={joinRoom} sx={{width: '10rem', height: '3rem' }}>Join</Button>
      </Box>
      <Box>
        <Chat socket={socket} username={username} chat={chat}/>
      </Box>
    </Box>
  )
}
