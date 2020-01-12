import React, { useEffect } from 'react'
import ProductForm from './ProductForm'
import { useParams } from 'react-router'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { showProduct } from '../../actions/productsActions'

const EditarProducto = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)

  useEffect(() => {
    dispatch(showProduct(id))
  }, [dispatch, id])

  return (
    <div className="col-8 mx-auto">
      <h1 className="text-center">Editar Producto</h1>
      <ProductForm checkProduct={product} />
    </div>
  )
}

export default EditarProducto