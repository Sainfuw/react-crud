import React, { Fragment, useState, useEffect } from 'react'
import ProductoLista from './ProductoLista'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { showProducts } from '../../actions/productsActions'

const Productos = () => {
  const [ update, setUpdate ] = useState(true)
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(showProducts())
    setUpdate(false)
  }, [dispatch, update])

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
            products.map(product => <ProductoLista key={product.id} product={product} />)
          }
        </tbody>
      </table>
    </Fragment>
  )
}

export default Productos