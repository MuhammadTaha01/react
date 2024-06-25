import React from 'react';
import Alert from 'react-bootstrap/Alert';

function CustomAlert({ variant, heading1, heading2, message1, message2 }) {
  return (
    <div className="d-flex justify-content-center">
      <Alert variant={variant} style={{ maxWidth: '900px', padding: '20px', paddingTop: '30px', paddingBottom: '30px', marginTop: '30px' }}>
        <Alert.Heading style={{ color: 'darkgreen', textAlign: 'center' }}>{heading1}</Alert.Heading>
        <p style={{ color: 'darkgreen', textAlign: 'center' }}>{message1}</p>
        <hr style={{ borderColor: 'black'}} />
        <Alert.Heading style={{ color: 'darkgreen', textAlign: 'center' }}>{heading2}</Alert.Heading>
        <p className="mb-0" style={{ color: 'darkgreen', textAlign: 'center' }}>{message2}</p>
      </Alert>
    </div>
  );
}

export default CustomAlert;
