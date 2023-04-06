import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import headshot from '../JoelHiltonHeadshot.jpg';


function App() {
return(
<MainLayout>
  <br></br>
  <div>
    <h1>Welcome to Joel Hiltons Movie Collection Website!</h1>
  </div>
  <div>
    <img src={headshot} className=".img-fluid" alt='Hilton'></img>
    <br></br>
  </div>
    <div>
    
    <p className = "text-left">
      This website exists to show to the world the amazing movie collection of Joel Hilton, a.k.a the Gordan Ramsey of Movie critique.<br></br>
      Gordon had his Kitchen Nightmares, Joel has his Theater Nightmares
    </p>
  </div>
</MainLayout>
)
}

export default App;

