import React from 'react'

function Row(props) {
    return (
        <>
        
        {props.filas ? props.filas.map(fila => 
            <tr>
                <td>{fila.titulo}</td>
                <td>{fila.duracion}</td>
                <td>{fila.rating}</td>
                <td>
                    {fila.genero.map(genero =>
                    <ul>
                        <li>{genero}</li>
                    </ul>
                    )}
                </td>
                <td>{fila.premios}</td>
            </tr>
        ) : null}
        
        </>
    )
}

export default Row
