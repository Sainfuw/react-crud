import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../actions/productsActions'

const ProductoLista = ({ product }) => {
  const dispatch = useDispatch()

  const eliminarProducto = (id) => {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'Un producto eliminado no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => result.value ? dispatch(deleteProduct(id)) : null)
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.amount}</td>
      <td className="text-right">
        <Link to={`/productos/${product.id}`} className="btn btn-primary mr-2">Detalle &oplus;</Link>
        <button type="button" onClick={() => eliminarProducto(product.id)} className="btn btn-warning">Eliminar &times;</button>
      </td>
    </tr>
  )
}
 
export default ProductoLista
