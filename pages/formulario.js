import {useRouter} from 'next/router'

import firebaseApp from '../firebase'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util'
import { useState } from 'react'
const db = getFirestore(firebaseApp)

const Formulario = () => {
    
    const valorInicial = {
        nombre: "",
        precio:"",
        cantidad:""
    }
    const [dato, setDato] = useState(valorInicial)
    const router = useRouter()

    const obtenerInputs = (e)=>{
        const {name, value} = e.target;
        setDato({...dato, [name]:value})
    }

    const enviarInfo = async(e)=>{
        e.preventDefault();
        //console.log(dato);
        try {
            await addDoc(collection(db,'producto'),{
                ...dato
            })
        } catch (error) {
            console.log(error);
        }
        //setDato({...valorInicial})
        router.push('/')
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Formulario de creacion de productos</h2>
      <div className='card card-body'>
        <form onSubmit={enviarInfo}>
            <div className='form-group'>
                <input type="text" placeholder='ingresar nombre' className='form-control mb-3' 
                name='nombre' value={dato.nombre} onChange={obtenerInputs} required  />
            </div>

            <div className='form-group'>
                <input type="text" placeholder='ingresar precio' className='form-control mb-3'
                name='precio' value={dato.precio} onChange={obtenerInputs} required />
            </div>

            <div className='form-group'>
                <input type="text" placeholder='ingresar cantidad' className='form-control mb-3'
                name='cantidad' value={dato.cantidad} onChange={obtenerInputs} required />
            </div>

            <button className='btn btn-primary'>
                Enviar
            </button>
            <button className='btn btn-secondary ms-2' onClick={()=>router.push('/')} >volver</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario
