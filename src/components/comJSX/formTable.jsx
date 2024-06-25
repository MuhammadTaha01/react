import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../comCSS/formTable.css' // Import your custom CSS if needed
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function GridComplexExample() {
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [msg, setMsg] = useState(''); // State for success message

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Message has been sent');
    setMsg('Your Message Has Been Sent To Hackunia\'s Administration');
    setShowForm(!showForm); // Hide the form after successful submission
  };

  return (
    <div className="tableContainer">
      <ToastContainer />
      {showForm ? ( // Use ternary operator for conditional rendering
        <Form onSubmit={handleSubmit}>
          <Row className="my-5">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Second Name" />
            </Form.Group>
          </Row>

          <Form.Group className="my-5" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" required />
          </Form.Group>

          <Form.Group className="my-5" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="my-5">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>NeoHaven - Destroyed</option>
                <option>NovaPort - Destroyed</option>
                <option>Astrareach - Destroyed</option>
                <option>Cosmopolis - Destroyed</option>
                <option>Zenith - Destroyed</option>
                <option>StarFall - Destroyed</option>
                <option>TerraPolis - Safe</option>
                <option>Skyheaven - Safe</option>
                <option>Cosmoburg - Safe</option>
                <option>Lunaris - Safe</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button className="btn" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <p className="success-message">{msg}</p>
      )}
    </div>
  );
}

export default GridComplexExample;
