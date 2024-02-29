import { useState } from 'react'
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './changepassword.css'

const ChangePassword = (id) => {
    const {t} = useTranslation();
    const [password, setPassword] = useState("");
    return(
<Container fluid className='bgcolorgray'>
    <Form className='bg-white text-align-left width-50 padding-20px margin-auto border-radius-5px'>
        <h3>Change Password</h3>
        <Row>
            <Col md={12} className='padding-topbot-20px'>   
                Old Password <span className='color-red'>*</span>
                <FormControl type='text' placeholder='Old password'/>
            </Col>
            <Col md={12} className='padding-topbot-20px'>    
                New Password<span className='color-red'>*</span>
                <FormControl type='text' placeholder='New Password'/>
            </Col>
            <Col md={12} className='padding-topbot-20px'>    
                Verify New Password
                <FormControl type='text' placeholder='Verify New Password'/>
            </Col>
        </Row>
    </Form>

</Container>
);

    
}

export default ChangePassword;