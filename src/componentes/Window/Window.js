import React from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

const Window = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <Container>
      <Row >
        <Col className="">
         
          <Button variant="danger" size="lg" onClick={handleOpenModal} >
            Click to open Modal
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="basicModal">
        <Modal.Header closeButton>
          <Modal.Title id="myModalLabel">Close</Modal.Title>
        </Modal.Header>

        <Modal.Body className=''>
          <h3 className='d-flex justify-content-center'>Aplicación Aceptada</h3>
          <div className='icon d-flex justify-content-center mb-4'>
          <IoCheckmarkCircleSharp style={{width:'200px', height: '200px', color: '#1DD75B' }}/>
          </div>
        </Modal.Body>

        
      </Modal>
    </Container>
  );
};

export default Window;
