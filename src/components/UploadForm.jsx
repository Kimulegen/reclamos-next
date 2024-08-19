"use client"
import React, { FormEvent, useState } from 'react';
import ImagePreview from "./ImagePreview";
import Image from 'next/image';

const UploadForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fecha_reclamo: '',
        rut: '',
        razon_social: '',
        telefono: '',
        email: '',
        fecha_entrega: '',
        vendedor: '',
        fecha_visita: '',
        factura_asociada: '',
        numero_orden: '',
        producto: '',
        cantidad: '',
        numero_lote: '',
        fecha_vencimiento: '',
        descripcion_problema: '',
        fotos_producto : [],
      });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target
        setFormData({
            ...formData,
            [name]: type == 'file' ? files : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData()
        for (const key in formData){
            if (key == 'fotos_producto') {
                for (let i = 0; i < formData[key].length; i++) {
                    formDataObj.append('fotos_producto', formData[key][i]);
                }
            } else {
                formDataObj.append(key, formData[key]);
            }
        }

        const apiUrl = '/api/submit'

        const fetchOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(formDataObj)
        }

        try {
            const response = await fetch(apiUrl, fetchOptions);
            // const data = await response.json();
            setIsModalOpen(true);
        } catch(err) {
            console.error(err);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const today = new Date().toISOString().split('T')[0]

    return (
        <section>
          <div className="header">
            <span className="logo">
                <Image src={"/logo.svg"} alt='logo' width={60} height={60}/>
            </span>
            <h1>Formulario de Reclamo</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fecha-reclamo">Fecha de Recepción:</label>
              <input 
                type="date"
                id="fecha-reclamo" 
                name="fecha_reclamo" 
                defaultValue={today} 
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="rut">RUT:</label>
              <input 
                type="text" 
                id="rut" 
                name="rut" 
                placeholder='11.111.111-1'
                defaultValue={"11.111.111-1"} 
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="razon-social">Razón Social:</label>
              <input 
                type="text" 
                id="razon-social" 
                name="razon_social" 
                placeholder='11.111.111-1' 
                defaultValue={"11.111.11-1"}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="telefono">Número de Teléfono:</label>
              <input 
                type="tel"  
                id="telefono" 
                name="telefono" 
                placeholder='98765432'
                defaultValue={'98765432'} 
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='tuemail@dominio.com' 
                defaultValue={'email@email.com'}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="fecha-entrega">Fecha de Entrega:</label>
              <input 
                type="date" 
                id="fecha-entrega" 
                name="fecha_entrega" 
                defaultValue={today}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="vendedor">Vendedor:</label>
              <input 
                type="text"  
                id="vendedor" 
                name="vendedor" 
                defaultValue={'vendedor'}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="fecha-visita">Fecha de visita del Vendedor:</label>
              <input 
                type="date" 
                id="fecha-visita" 
                name="fecha_visita" 
                defaultValue={today}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="factura-asociada">Factura asociada:</label>
              <input 
                type="text" 
                id="factura-asociada" 
                name="factura_asociada" 
                defaultValue={'1234'}
                required 
                onChange={handleChange} />
            <div className="form-group"></div></div>
    
            <div className="form-group">
              <label htmlFor="numero-orden">Número de orden:</label>
              <input 
                type="text" 
                id="numero-orden" 
                name="numero_orden" 
                defaultValue={'1'}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="producto">Producto:</label>
              <input 
                type="text" 
                id="producto" 
                name="producto" 
                defaultValue={'producto'}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="cantidad">Cantidad:</label>
              <input 
                type="number" 
                id="cantidad" 
                name="cantidad" 
                defaultValue={10}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="numero-lote">Número de Lote:</label>
              <input 
                type="text" 
                id="numero-lote" 
                name="numero_lote" 
                defaultValue={'1a'}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="fecha-vencimiento">Fecha de Vencimiento del Producto:</label>
              <input 
                type="date" 
                id="fecha-vencimiento" 
                name="fecha_vencimiento" 
                defaultValue={today}
                required 
                onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label htmlFor="descripcion-problema">Descripción Detallada del Problema:</label>
              <textarea 
                id="descripcion-problema" 
                name="descripcion_problema" 
                rows="4" 
                cols="50" 
                placeholder='Detalla aquí tu problema'
                defaultValue={'detalle del problema'} 
                required 
                onChange={handleChange}></textarea>
            </div>
    
            <div className="form-group">
              <label htmlFor="fotos-producto">Adjuntar Fotos del Producto:</label>
              <input 
                type="file" 
                id="fotos-producto" 
                name="fotos_producto" 
                accept="image/*" 
                multiple 
                required 
                onChange={handleChange} />
            </div>
    
            <ImagePreview images={Array.from(formData.fotos_producto)} />
            <input type="submit" value="Enviar" />
          </form>
    
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <p>Formulario enviado con éxito</p>
              </div>
            </div>
          )}
        </section>
      );
}

export default UploadForm;