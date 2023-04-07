import "@fontsource/syne/800.css"
import './App.css'
import Nav from "./components/Nav/Nav.jsx";
import CatEmoji from './assets/emoji-cat.webp'

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="header">
            <div className="header_spacer"/>
            <div className="header_container">
                <img className="center-block" alt="emoji cat" src={CatEmoji}/>
                <h1 className="title">Cursed Cat</h1>
                <p style={{textAlign: "center"}}>"The real danger is not that computers will begin to think like men, but that men will begin to think like computers."</p>
            </div>

        </div>
    </div>
  )
}

export default App
