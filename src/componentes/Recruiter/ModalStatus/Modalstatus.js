import React from "react";
import { Button, Modal, Container, Row, Col, Dropdown } from "react-bootstrap";
import {FaEdit, FaEye} from 'react-icons/fa'
import "./scss/style.scss"
const Modalstatus = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <Container className="container">
      <Row>
        <Col className="text-center d-flex align-content-center">
          <Button className="button-edit d-flex mt-0" onClick={handleOpenModal}>
          <FaEdit className="icon_edit"/>
            {/* Click to open Modal */}
          </Button>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        aria-labelledby="basicModal"
        className="modal"
      >
        <Modal.Header className="modal-head">
          <div className="status">
            <Modal.Title id="myModalLabel" className="modal-title">
              Status de la Vacante
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <Dropdown className="dropdown ">
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="drop-toggle"
            >
              Seleccionar opción
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/action-1" className='drop-items' >Aplicando</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className='drop-items'>Match</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='drop-items'>
                Aceptado 1era Fase
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='drop-items'>Aceptado 2da Fase</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='drop-items'>Contratado</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="success" onClick={handleCloseModal} className="success-btn">
            Aceptar
          </Button>
          <Button variant="danger" onClick={handleCloseModal} className="cancel-btn">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Modalstatus;

