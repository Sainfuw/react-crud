import React from 'react'
import ProductForm from './ProductForm'

const EditarProducto = ({ getProduct, setUpdate}) => {

  return (
    <div className="col-8 mx-auto">
      <h1 className="text-center">Editar Producto</h1>
      <ProductForm setUpdate={setUpdate} getProduct={getProduct} />
    </div>
  )
}

export default EditarProducto