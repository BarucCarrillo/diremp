import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
        App
        <button className='btn btn-primary'>BOTON</button>
    </div>
  )
}

export default App

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
