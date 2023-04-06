import "@fontsource/syne/800.css"
import './App.css'
import Nav from "./components/Nav/Nav.jsx";

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="header">
            <div className="header_spacer"/>
            <img alt="emoji cat" src="./assets/blushing_swearing_angry_cat_face.png"/>
            <h1 style={{fontWeight: 800}}>Cursed Cat</h1>
            <p>"The real danger is not that computers will begin to think like men, but that men will begin to think like computers."</p>
        </div>
    </div>
  )
}

export default App
