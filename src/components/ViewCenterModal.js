import React, { useRef} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {MDBCol} from "mdbreact";


function ViewCenterModal(props) {
  // const mapContainerRef = useRef(null);
  let {center} = props

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {center.name_1}
      </Modal.Title>
    </Modal.Header>
      
    <Modal.Body>
      {/* <center> */}
      <h4>{center.name_2}</h4>
      <h6>{center.street_1}</h6>
      <h6>{center.city}, {center.zip}</h6>
      <h7>{center.phone}</h7><br></br>
      <a href={center.website} target="_blank">{center.website}</a>
      {/* </center> */}
  
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          </MDBCol>  
    </Modal.Body>
      
    <Modal.Footer>
      <Button variant="light" onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
  );
}



export default ViewCenterModal;