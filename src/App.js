import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

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
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
