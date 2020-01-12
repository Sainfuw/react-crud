import React, { Fragment, useEffect } from 'react'
import ProductoLista from './ProductoLista'
import Swal from 'sweetalert2'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { showProducts, removeStatus } from '../../actions/productsActions'

const Productos = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const status = useSelector(state => state.products.status)

  useEffect(() => {
    dispatch(showProducts())
  }, [dispatch])

  useEffect(() => {
    if (status === 200) {
      Swal.fire('Producto Actualizado', 'El producto se ha actualizado correctamente.', 'success')
    }
    if (status === 201) {
      Swal.fire('Producto Creado', 'El producto se ha creado correctamente.', 'success')
    }
    if (status === 204) {
      Swal.fire(
        'Producto Eliminado!',
        'El producto se ha eliminado del listado',
        'success'
      )
    }
    dispatch(removeStatus())
  }, [dispatch, status])

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