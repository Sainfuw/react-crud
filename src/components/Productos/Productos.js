import React, { Fragment } from 'react'
import ProductoLista from './ProductoLista'

const Productos = ({ productos, setUpdate }) => {
  return (
    <Fragment>
      <h1 className="text-center">Productos</h1>
      <table className="table table-hover mt-5">
        <thead>
          <tr className="table-primary">
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map(producto => <ProductoLista key={producto.id} producto={producto} setUpdate={setUpdate} />)
          }
        </tbody>
      </table>
    </Fragment>
  )
}

export default Productos