import React from 'react'
import {useRouter} from 'next/router'
import { async } from '@firebase/util'
import firebaseApp from '../../firebase'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'

import { useState } from 'react'
const db = getFirestore(firebaseApp)

const Product = ({producto}) => {
    //console.log(producto);
    const {query} = useRouter();

    const deleteProduct = async()=>{
        const {product} = query
        console.log(product);
        await deleteDoc(doc(db, 'producto',product))
        router.push('/')
    }

    const router = useRouter()
  return (
    <div>
        <div className='container'>
            <div className='card'>
                <div className='card card-header'>
                    <h5>{producto.nombre}</h5>
                </div>

                <div className='card car-body'>
                    <p>{producto.precio}$</p>
                    <p>{producto.cantidad}unid.</p>
                    <button className='btn btn-danger' onClick={deleteProduct}>Eliminar</button>
                    <button className='btn btn-secondary mt-2' onClick={()=>router.push('/')}>Volver</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product

export async function getServerSideProps({query: {product}}){

        console.log(product);
            const docRef = doc(db, 'producto', product)
            const docSnap = await getDoc(docRef)
            const producto = docSnap.data()
   

    return {
        props:{
            producto:producto
        }
    }
    
    
}
