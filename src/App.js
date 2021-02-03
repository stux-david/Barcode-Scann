import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import './assets/estilos/pop.css'
import escan from './assets/sounds/escaner.wav'
import Camera from '@material-ui/icons/CameraAlt';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";


const App = (props) => {
  //variable que contiene el dato escaneado
  const [datos, setDatos] = useState()
  //variable que contiene el estado del Modal
  const [abierto, setAbierto] = useState(false)
  const escanAudio = new Audio(escan)

  //estado del Modal, On - Off
  const abrirEscaner = () =>{
    setAbierto(!abierto)
  }
  //audio al escanear
  const playSound = (audioFile) => {
    audioFile.play();
  };
 
  //ubicacion del Modal
  const modalStyle = {
    position: "absolute",
    top: "8%",
    left: "55%",
  }

  return (
    <>
      <div className="container">
        <header className="navbar navbar-dark bg-primary">
          <h1 className="text-center header">Escaner Codigo de Barras</h1>
        </header>
        <div className="content">
          <div className="col-5 align-items-center input-group form">
            <input className="form-control producto" value={datos} type="text" name="liga"/>
            <span className="input-group-btn">
                <Button color="primary" onClick={abrirEscaner}><Camera/></Button>
            </span>  
          </div>
        </div>
        
      </div>
      
      <Modal isOpen={abierto} style={modalStyle}>
        <ModalHeader>
          Codigo de Barras
        </ModalHeader>
        <ModalBody className="camara">
          <div className="col-12 align-items-center">
            <BarcodeScannerComponent
              width={430}
              height={300}
              onUpdate={(err, result) => {
                if (result) {
                  setDatos(result.text)
                  playSound(escanAudio)
                  abrirEscaner()
                }
              }}
            />
          </div>

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={abrirEscaner}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </>    
  )
}

export default App;