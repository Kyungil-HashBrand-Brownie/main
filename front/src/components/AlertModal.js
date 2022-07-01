import { Button, Modal } from "react-bootstrap";


function AlertModal({show, content, onHide}) {
    return (
      <Modal
        {...{show,onHide}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Alert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{content}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default AlertModal;