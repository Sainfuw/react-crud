import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const eliminarProducto = (id, setUpdate) => {
  Swal.fire({
    title: '¿Estas Seguro?',
    text: 'Un producto eliminado no se puede recuperar!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(async (result) => {
    if (result.value) {
      try {
        const result = await axios.delete(`http://192.168.1.94:3001/api/products/${id}`)
        console.log(result)
        if (result.status === 204) {
          Swal.fire(
            'Producto Eliminado!',
            'El producto se ha eliminado del listado',
            'success'
          )
          setUpdate(true)
        } else {
          Swal.fire(
            'Ha ocurrido un error!',
            'El producto no se ha podido eliminar',
            'error'
          )
        }
      } catch (error) {
        console.log(error)
      }
    }
  })
}

const ProductoLista = ({ producto, setUpdate }) => {
  return (
    <tr>
      <td>{producto.name}</td>
      <td>{producto.price}</td>
      <td>{producto.amount}</td>
      <td className="text-right">
        <Link to={`/productos/${producto.id}`} className="btn btn-primary mr-2">Detalle &oplus;</Link>
        <button type="button" onClick={() => eliminarProducto(producto.id, setUpdate)} className="btn btn-warning">Eliminar &otimes;</button>
      </td>
    </tr>
  )
}
 
export default ProductoLista