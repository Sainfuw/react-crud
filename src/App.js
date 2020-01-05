import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Components
import Header from './components/Header'
import Productos from './components/Productos/Productos'
// import Producto from './components/Productos/Producto'
// import AgregarProducto from './components/Productos/AgregarProducto'
// import EditarProducto from './components/Productos/EditarProducto';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="container mt-5">
          <Switch>
            {/* <Route exact path="/productos/nuevo" render={() => <AgregarProducto getProduct={getProduct} setUpdate={setUpdate} />} />
            <Route exact path="/productos/:id/editar" render={() => <EditarProducto getProduct={getProduct} setUpdate={setUpdate} />} />
            <Route exact path="/productos/:id" render={() => <Producto getProduct={getProduct} />} />
            <Route exact path="/productos"  render={() => <Productos productos={productos} setUpdate={setUpdate} />} /> */}
            <Route exact path="/" component={Productos} />
          </Switch>
        </main>
        <p className="mt-4 p2 text-center">Todos los derechos Reservados</p>
      </Router>
    </Provider>
  );
}

export default App;