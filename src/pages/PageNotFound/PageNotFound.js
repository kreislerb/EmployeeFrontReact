import {React, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

const PageNotFound = (props) => {

    useEffect( () => {
        alert("Página não encontrada!")
    },[])

    return (
        <>
            <Redirect to="/"/>
        </>
    )
}

export default PageNotFound;