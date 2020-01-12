import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'

// Redux
import { useDispatch } from 'react-redux'
import { updateProduct, addProduct } from '../../actions/productsActions'

// Custom
import Error from '../Error'

const ProductForm = ({checkProduct}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [ error, setError ] = useState(false)
  let product = checkProduct ? checkProduct : { name: '', price: '', amount: '', category: '0' }

  useEffect(() => {
    if (id) {
      document.getElementById("name").value = product.name
      document.getElementById("price").value = product.price
      document.getElementById("amount").value = product.amount
      document.getElementById("category").value = product.category
    }
  }, [id, product.name, product.price, product.amount, product.category])

  const guardarProducto = async (event) => {
    event.preventDefault()
    if (product.name === '' || product.price === '' || product.amount === '') {
      setError(true)
      return
    }
    setError(false)

    try {
      if (id) {
        dispatch(updateProduct(product))
      } else {
        dispatch(addProduct(product))
      }
    } catch (error) {
      console.log(error)
    }
    history.push('/productos')
  }

  return (
    <form onSubmit={guardarProducto} className="mt-4">
      { (error) ? <Error message={'Todos los campos son obligatorios'} /> : null }
      <fieldset>
        <legend>Formulario creación de Producto:</legend>
        <div className="form-group">
          <label htmlFor="name">Nombre Producto</label>
          <input type="text" className="form-control" id="name" placeholder="Ingrese nombre del producto" onChange={e => product.name = e.target.value} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input type="text" className="form-control" id="price" placeholder="Ingrese precio del producto" onChange={e => product.price = e.target.value} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Cantidad Productos</label>
          <input type="text" className="form-control" id="amount" placeholder="Ingrese cantidad de productos" onChange={e => product.amount = e.target.value} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select className="form-control" id="category" onChange={e => product.category = e.target.value}>
            <option value="0">Argentina</option>
            <option value="1">Chilena</option>
            <option value="2">Italiana</option>
            <option value="3">Koreana</option>
            <option value="4">Otros</option>
          </select>
        </div>
      </fieldset>
      <input type="submit" className="btn btn-primary btn-block" value="Guardar Producto"></input>
    </form>
  )
}
 
export default ProductForm