import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
function Login(){
    const [formSend, setFormSubmit] = useState(false);
    return(
        <Formik 
        initialValues={{
            email:"",
            password:''
        }}
        validate={(val)=>{
            let errors = {};

                if(!val.email){
                    errors.email = 'Por favor ingresa un correo'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)){
                    errors.email = 'El email solo puede contener letras, numeros, puntos, guiones o guion bajo'
                }
                if(!val.password){
                    errors.password = 'Por favor ingresa una contraseña'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.password)){
                    errors.password = 'La contraseña debe tener letras solamente'
                }

                return errors;
        }}
        onSubmit={(val, {resetForm})=>{
            resetForm();
            console.log('Formulario enviado');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false), 5000);

        }}
        >
            {( {errors} ) => (
                <div className="contenedor">
                <div className="formulario">
            <Form>
                <div>
                    <label for="exampleInputEmail1" className="form-label">Dirección de mail</label>
                    <Field 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    name='email' 
                    aria-describedby="emailHelp" 
                    placeholder='email@email.com'
                     />                   
                    
                </div>
                <ErrorMessage name='email' component={()=> (
                         <div className="error">{errors.email}</div>
                     )} />
                <div>
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <Field
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    name='password' 
                    
                      
                    />
                    <ErrorMessage name='email' component={()=> (
                         <div className="error">{errors.password}</div>
                     )} />
                </div>
  
            <button type="submit" >Submit</button>
            {formSend && <p className="exito">Formulario enviado con exito!</p>}
            </Form>
        </div>    
        </div>    
            ) }

        </Formik>

        
    );
}

export default Login;
