import { useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Table } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import './userprofile.css';

const UserProfile = () => {
    const {t} = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState(false);
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");

    return (
        <Container fluid className='bgcolorgray'>
            <Form className='bg-white text-align-left width-50 padding-20px margin-auto border-radius-5px'>
                <h3>User Profile</h3>
                <Row>
                    <Col md={6}>   
                        Full name <span className='color-red'>*</span>
                        <FormControl type='text' placeholder='Full name'/>
                    </Col>
                    <Col md={6}>    
                        Phone number<span className='color-red'>*</span>
                        <FormControl type='text' placeholder='Phone number'/>
                    </Col>
                    <Col md={12} className='padding-topbot-20px'>    
                        Address
                        <FormControl type='text' placeholder='Address'/>
                    </Col>
                </Row>
                <h3>Private profile</h3>
                <Row className='margin-top-10px'>
                    <Col md={6}>   
                        User Name <span className='color-red'>*</span>
                        <FormControl type='text' placeholder='User Name'/>
                    </Col>
                    <Col md={6}>    
                        Password<span className='color-red'>*</span>
                        <FormControl type='password' placeholder='Password'/>
                    </Col>
                    <Col md={12} className='padding-topbot-20px'>    
                        Address
                        <FormControl type='text' placeholder='Address'/>
                    </Col>
                    <Col md={12} className='padding-topbot-20px'>    
                        Email
                        <FormControl type='text' placeholder='Email'/>
                    </Col>
                    <Col md={6}>   
                        Gender
                        <Table>
                            <tr>
                                <td><input type={'radio'} value='Male'/> Male</td>
                                <td><input type={'radio'} value='Female'/> Female</td>
                            </tr>
                        </Table>
                    </Col>
                    <Col md={6}>    
                        Date of birth
                        <FormControl type='date' placeholder='Password'/>
                    </Col>
                    <Col md={12} className='padding-topbot-20px'>    
                        <Button>
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>

        </Container>
     );
}
 
export default UserProfile;