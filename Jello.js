import React from 'react'
import "./style.css";
// import bootstrap from 'bootstrap'

const Jello = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="mynav">
  <div className="container-fluid">
    <a className="navbar-brand text-light text-center" id="logo" href="/">YourFood.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">BreakFast</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Lunch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Evening-Snacks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Dinner</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Desserts</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-light" type="submit"  id="mybtn1">Search</button>
      </form>
    </div>
  </div>
</nav>
    
  )
}

export default Jello