import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import UserCard from './UserCard';

const BASE_URL = process.env.REACT_APP_API_URL;
const Fetch2 = () => {
    const [users, setUsers] = useState([]);

    console.log(BASE_URL);

    useEffect(() => {
        fetch(`${BASE_URL}/react-basics/users`)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, []);

    return (
        <Container className='my-5'>
            <h1>MOCK API</h1>
            <Row>
                
                <UserCard />
            </Row>
            <Button>UPDATE USER</Button>
        </Container>
    )
}

export default Fetch2





