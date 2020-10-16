import React from 'react';
import ViewCenterModal from '../components/ViewCenterModal';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const Center = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  let {center} = props
  return (
  <div className='cardcontainer'>
    <Card >
      <Card.Header as="h5">{center.name_1}</Card.Header>
      <Card.Body>
        <Card.Title>{center.name_2}</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="light" onClick={() => setModalShow(true)}>
          View
        </Button>
        <ViewCenterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          key={center.id} 
          center={center}
        />
      </Card.Body>
    </Card>
  </div>
  )
}

export default Center;
