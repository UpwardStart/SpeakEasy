import io from 'socket.io-client'

const socket = io.connect("http://localhost:3003")


function App() {
return (
  <h1>Hello World</h1>
)
}

export default App;
