import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import Form from '../components/Form'
const Contact =()=>{
    const [show, setShow] = useState(false);
    const [stateFromChild, setStateFromChild] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   return(
    <>
    <h3>this is contact </h3>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact form</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form setShow={setShow}/>
        </Modal.Body>
      </Modal>

    <Form/>
    </>
   )
}
export default Contact