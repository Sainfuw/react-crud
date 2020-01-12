import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { showProduct } from '../../actions/productsActions'

const MostrarProducto = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)

  useEffect(() => {
    dispatch(showProduct(id))
  }, [dispatch, id])

  return (
    <div className="jumbotron">
      <h1 className="display-4">Detalle Producto</h1>
      <div className="lead">
        <table className="table mt-4">
          <tbody>
            <tr>
              <th width="20%">Nombre</th>
              <td width="50%">{ product ? product.name : null }</td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>{ product ? product.price : null }</td>
            </tr>
            <tr>
              <th>Cantidad</th>
              <td>{ product ? product.amount : null }</td>
            </tr>
            <tr>
              <th>Categoría</th>
              <td>{ product ? product.category : null }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="my-4" />
      <p className="lead">
        <Link to={`/productos/${id}/editar`} className="btn btn-primary px-4">Editar Producto</Link>
        <Link to={`/productos`} className="btn btn-secondary px-4 ml-3">Volver</Link>
      </p>
    </div>
  )
}

export default MostrarProducto