import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleAdd= ()=>{
        setCounter(parseInt((counter)+1))

        
    }
    const handleDelete= ()=>{
        setCounter(parseInt((counter)-1))

    }
    return (
        <Container>
            <h1>Counter 1</h1>
            <ButtonGroup>
                <Button variant='danger' onClick={handleAdd}>+</Button>
                <Button variant='secondary' >{counter}</Button>
                <Button variant='success ' onClick={handleDelete}>-</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Counter






