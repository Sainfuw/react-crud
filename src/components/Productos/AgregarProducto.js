import React from 'react'
import ProductForm from './ProductForm'

const AgregarProducto = ({ setUpdate, getProduct }) => {
  return (
    <div className="col-8 mx-auto">
      <h1 className="text-center">Agregar Producto</h1>
      <ProductForm setUpdate={setUpdate} getProduct={getProduct} />
    </div>
  )
}

export default AgregarProducto