import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const MostrarProducto = ({ getProduct }) => {
  const { id } = useParams()
  const producto = getProduct(id) 

  return (
    <div className="jumbotron">
      <h1 className="display-4">Detalle Producto</h1>
      <div className="lead">
        <table className="table mt-4">
          <tbody>
            <tr>
              <th width="20%">Nombre</th>
              <td width="50%">{ producto ? producto.name : null }</td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>{ producto ? producto.price : null }</td>
            </tr>
            <tr>
              <th>Cantidad</th>
              <td>{ producto ? producto.amount : null }</td>
            </tr>
            <tr>
              <th>Categoría</th>
              <td>{ producto ? producto.category : null }</td>
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