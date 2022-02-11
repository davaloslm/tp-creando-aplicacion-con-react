import React from 'react'
import PropTypes from "prop-types"

function ContentRowMovies(props) {

    return (
        
            <div className="row">

            {props.data.map(dato=>
                <div key={dato.titulo} className="col-md-4 mb-4">
                    <div className={"card border-left-"+dato.color+" shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{dato.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{dato.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={dato.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

                
            </div>
       
    )
}

ContentRowMovies.propTypes= {
    data: PropTypes.array,
    customProp: function(data){
        for (let i = 0; i < data.data.length; i++) {
            if (typeof data.data[i].color !== "string" || typeof data.data[i].cifra !== "number" || typeof data.data[i].titulo !== "string") {
                return new Error ("Invalid props, color and titulo must be an string and cifra must be a number")
            }

        }
    }
}

ContentRowMovies.defaultProps = {
    data: []
}

export default ContentRowMovies
