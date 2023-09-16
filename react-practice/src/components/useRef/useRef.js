import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const UseRef = () => {
    const inputRef = useRef(null);

    // console.log("Render gerceklesti");

    const handleIncrease = () => {
        // console.log("calisti");
        inputRef.current.value = +(inputRef.current.value) + 1;
    }

    return (
        <Container>
            <h1>useRef Hook'u</h1>
            <p>useRef Hook'u, React uygulamalarinda DOM elemanlari uzerinde islem yapmak icin kullanilir.</p>
            <input type="text" value={0} ref={inputRef} />
            <button onClick={handleIncrease}>TIKLA</button>
            <p>{inputRef.current.value}</p>
        </Container>
    )
}

export default UseRef










