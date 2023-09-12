import { Route, Routes } from "react-router-dom";
import NuevoProducto from "./components/NuevoProducto";
import TodosProductos from "./components/TodosProductos";
import VerProducto from "./components/VerProducto";


const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/nuevo" element={<NuevoProducto/>}></Route>
        <Route path="/" element={<TodosProductos/>}/>
        <Route path="/producto/:id" element={<VerProducto/>}/>
      </Routes>
    </div>
  )
}

export default App;