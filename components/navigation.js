    import React, {useEffect} from 'react';
    import {useDispatch} from 'react-redux';
    import FetchOneAsync from '../redux/actions/firstFetch';
    import Link from 'next/link';
    
    //Este es el header, que contiene la navigation
    //Aqui es muy largo porque contiene las funciones de busqueda de la api


    const Navigation = () => {

    //3. HOOKS
    //Para fijar el parametro default para la accion
    //Es la funcion usada para el dispatch pasandole un valor
    //por default (en este caso Buenos Aires)
    //UseEffect es componentDidMount
    useEffect(() => {
      getOneAsync("Portland");        
    }, []);

    //2. Creamos el metodo que se va a disparar cuando subirmos
    //algo a traves del input (2)
    const getWeatherInfo = (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      if(city === ""){
          console.log("no city to search")
      } else {
          //Llamamos al creador de acciones conectado (3)
          getOneAsync(city);
      }
  };

    //1. HOOKS
    //Este un creador de acciones "conectado": es una funcion
    //que recibe el parametro "city" y que cuando sea llamada
    //Despachara (disparara) otra funcion "fetchweather" (que es
    //la accion que recoge la API)
    const dispatch = useDispatch();
    //Debajo tenemos una funcion asyncrona (una vez ejecutada
    //no devuelve una accion, sino otra funcion. Ver accion FetchOneAsync)
    const getOneAsync = (city) => dispatch(FetchOneAsync(city));




        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/*Los links deben tener el href que indica a que archivo de la carpeta
            pages queremos ir (aqui vamos al home). La <a> va a contener la palabra
            que usamos como link*/}
            <Link href="/">
                <a className='nav-link'>Home</a>
            </Link>

            <Link href="/test">
                <a className='nav-link'>Test</a>
            </Link>
            <Link href="/styling">
                <a className='nav-link'>Styling</a>
            </Link>
            <Link href="/therouter">
                <a className='nav-link'>Router</a>
            </Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"  onSubmit={getWeatherInfo}>
            <input className="form-control mr-sm-2" type="text" name='city' placeholder="Search City..."  aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        )
    }

    export default Navigation;