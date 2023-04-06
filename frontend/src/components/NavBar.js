import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar(){
    return(
        
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" href="/">Mission 14</Link>

  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/podcasts">My Podcasts</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movielist">Movie Collection</Link>
      </li>
    </ul>

  </div>
</nav>
        </>

        
        )
}
export default Navbar