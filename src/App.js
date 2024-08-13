import './App.css'
import FileUpload from './FileUpload'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://avatars.githubusercontent.com/u/98181553?v=4"
          className="App-logo"
          alt="logo"
        />
        <p>Faça upload de um arquivo no AWS S3!</p>
        <FileUpload />
      </header>
    </div>
  )
}

export default App
