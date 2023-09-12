import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const VerProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        console.log("entro")
        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res => {
                console.log(res.data);
                setProducto(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div className="card">
            <h1>{producto.nombre}</h1>
            <h1>{producto.precio}</h1>
            <p>
                {producto.descripcion}
            </p>
            <Link to="/" className="btn btn-primary">Regresar</Link>
        </div>
    );
}

export default VerProducto;
