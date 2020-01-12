import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Components
import Header from './components/Header'
import Productos from './components/Productos/Productos'
import Producto from './components/Productos/Producto'
import EditarProducto from './components/Productos/EditarProducto';
import AgregarProducto from './components/Productos/AgregarProducto'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="container mt-5">
          <Switch>
            <Route exact path="/productos/nuevo" component={AgregarProducto} />
            <Route exact path="/productos/:id/editar" component={EditarProducto} />
            <Route exact path="/productos/:id" component={Producto} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/" component={Productos} />
          </Switch>
        </main>
        <p className="mt-4 p2 text-center">Todos los derechos Reservados</p>
      </Router>
    </Provider>
  );
}

export default App;