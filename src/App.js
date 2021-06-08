import './App.css';
import { Card, Button, Spinner } from 'react-bootstrap'
import React, { useState } from 'react';
import { DATA_SET } from './dataset'

const App = () => {
  const [testArr, setTestArr] = useState(DATA_SET)

  const [loading, setLoading] = useState(false)

  const buttonCLick = (idx) => {
    const newData = testArr.find((e) => e.index === idx)
    const restData = testArr.filter((e) => e.index !== idx)

    if (JSON.stringify(restData.concat([newData])) !== JSON.stringify(testArr)) {
      setLoading(true)
      setTestArr(restData.concat([newData]))
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  const renderFunction = (el, idx) => (
    <Card style={{ width: '18rem', margin: 'auto', marginTop: idx * 30 }} onClick={() => buttonCLick(el.index)} className={"active"} key={el.index}>
      <Card.Img variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
            the card's content from card {el.index}.
            </Card.Text>
        <Button variant="primary">click on card {el.index}</Button>
      </Card.Body>
    </Card>
  )

  return (
    <div className="App">
      {loading && <Spinner animation="border" role="status" className="spinner_class" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
      {
        testArr?.map((el, idx) => (
          renderFunction(el, idx)
        ))
      }
    </div>
  );
}

export default App;
