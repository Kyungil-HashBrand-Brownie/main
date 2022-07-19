import { Button, Modal } from "react-bootstrap";

function AlertModal({show, content, onHide}) {
    return (
        <Modal
          {...{show,onHide}}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          className='alert-modal'
        >
          <Modal.Header closeButton className='modal-header'>
            {/* <Modal.Title id="contained-modal-title-vcenter">
              Alert
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body className='modal-body'>
            {content}
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button className='modal-btn' onClick={() => onHide(content)}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default AlertModal;