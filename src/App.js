import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Productos from './components/Productos/Productos'
import Producto from './components/Productos/Producto'
import AgregarProducto from './components/Productos/AgregarProducto'
import EditarProducto from './components/Productos/EditarProducto';

const App = () => {
  const [ productos, setProductos ] = useState([])
  const [ updateProductos, setUpdate ] = useState(true)

  const consultarApi = async () => {
    const result = await axios.get("http://192.168.1.94:3001/api/products")
    setProductos(result.data)
    setUpdate(false)
  }

  const getProduct = (id) => {
    return productos.filter((p) => p.id === parseInt(id))[0]
  }

  useEffect(() => {
    if (updateProductos) {
      consultarApi()
    }
  }, [updateProductos])

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos/nuevo" render={() => <AgregarProducto getProduct={getProduct} setUpdate={setUpdate} />} />
          <Route exact path="/productos/:id/editar" render={() => <EditarProducto getProduct={getProduct} setUpdate={setUpdate} />} />
          <Route exact path="/productos/:id" render={() => <Producto getProduct={getProduct} />} />
          <Route exact path="/productos"  render={() => <Productos productos={productos} setUpdate={setUpdate} />} />
          <Route exact path="/"  render={() => <Productos productos={productos} setUpdate={setUpdate} />} />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos Reservados</p>
    </Router>
  );
}

export default App;