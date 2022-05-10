import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
<div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">SCP</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <p class="p-2 text-dark" >Features</p>
        <p class="p-2 text-dark" >Enterprise</p>
        <p class="p-2 text-dark" >Support</p>
        <p class="p-2 text-dark" >Pricing</p>
      </nav>
      <p class="btn btn-outline-primary">Sign up</p>
    </div>
</div>
        );
    }
}

export default Header;