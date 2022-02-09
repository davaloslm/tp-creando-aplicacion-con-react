import React from 'react'
import "../assets/css/app.css"
import SideBar from "./SideBar"
import ContentWrapper from "./ContentWrapper"

function App() {
    return (
        <div className='App'>
            <SideBar/>
            <ContentWrapper/>
        </div>
    )
}

export default App
