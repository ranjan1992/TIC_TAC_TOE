import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'bootstrap/dist/css/bootstrap.css'

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'

const App = () => {
  const itemArray = new Array(9).fill('empty')
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState('')
  
// Reloading the Game
  const reloadGame = () => {}

//Check the Winner
  const checkWinner = () => {}

//change the Item if there is no Item present  
  const changeItem = () => {}
  return (
    <div className="App">
      <Icon />
    </div>
  )
}

export default App
