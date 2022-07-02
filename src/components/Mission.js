import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Mission = ()=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="dtr-btn wow fadeInUp mr-5" data-wow-delay="0.8s" onClick={handleShow}> 
            <a href="#">Mission<span><i className="icon-arrow-right" aria-hidden="true"></i></span> </a>
        </div>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Our Mission</Modal.Title>
            </Modal.Header>
            <Modal.Body>By providing academic and moral training through technologically enchanced human and material resourse, we produce visionary and God fearing leaders</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default Mission