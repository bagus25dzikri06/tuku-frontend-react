import React from 'react';
//import React, { useState, useEffect } from 'react';
//import Card from './components/Card'
import Router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  /*const [name, setName] = useState('tono')
  const [email, setEmail] = useState('tono@gmail.com')
  const [num, setNum] = useState(0)
  const changeName = (param) => {
    setName(param)
  }
  const terimaDataDariChild = (data) => {
    alert(data)
  }

  useEffect(() => {
    console.log('Dijalankan saat e-mail berubah')
  }, [email])

  useEffect(() => {
    setName('heru')
  }, [num])

  return (
    <div>
      <h1>Tuku Shop {name} - {email} - {num}</h1>
      <Card harga='12000' background='blue' kirimData={(param) => terimaDataDariChild(param)}/>
      <button 
        type='' 
        onClick={() => changeName('tona')}
      >Change Name</button>
      <button 
        type='' 
        onClick={() => setEmail('tona@gmail.com')}
      >Set Email</button>
      <button 
        type='' 
        onClick={() => setNum(num + 1)}
      >Set Angka</button>
      <Router />
    </div>
  );*/

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
