import React, { useState } from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {useForm} from 'react-hook-form';

const Escaner = (props) => {

  const [datos, setDatos] = useState()

  const {register, errors, handleSubmit, getValues} = useForm(); 
  
  const onSubmit = (data, e) =>{
    //cargar informacion
  }
  return (
    <div className="container">
        <header className="navbar navbar-dark bg-primary">
            <h1 className="text-center header">Escaner Codigo de Barras</h1>
        </header>
        <div className="col-4 align-items-center camara">
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                    setDatos(result.text)
                    //agregar(result.text)
                    }
                }}
            />
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="justify-content-center align-items-center texto">
                <label><strong>Producto</strong></label>
                <input className="form-control producto" value={datos} type="text" name="liga" disabled/>
                </div>
            
            </form>
        </div>
      </div>
      
    </div>
      
  )
}

export default Escaner;