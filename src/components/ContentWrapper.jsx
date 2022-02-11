import React from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Table from './Table'

function ContentWrapper() {

    const genres = ["Musical", "Infantiles", "Fantasia", "Drama", "Documental", "Comedia", "Ciencia Ficcion", "Accion", "Aventuras", "Terror", "Suspenso", "Animacion"]

    return (
        <div>
            <TopBar/>
            <ContentRowTop genres={genres}/>
            <Table/>
            <Footer/>
        </div>
    )
}

export default ContentWrapper
