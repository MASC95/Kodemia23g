//import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasCandidate({showOffcanvas,handleShowOffcanvas}) {
  

 

  return (
    <>
      

      <Offcanvas show={showOffcanvas} onHide={handleShowOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCandidate;