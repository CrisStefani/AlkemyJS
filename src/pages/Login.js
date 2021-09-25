import React from 'react'

function Login(){
    return(
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Dirección de mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">No compartir los datos</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}

export default Login;
