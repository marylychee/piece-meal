import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Text } from 'react-bootstrap';

const CreateProfileButton = () => {
  return (
    <Navbar.Text pullRight>
        <a href="#">Create Profile</a>
    </Navbar.Text>
  )
};

export default CreateProfileButton;