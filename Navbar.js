import React from 'react'
// import '../App.css';
import Navbar from './Navbar.css'
import logo from './images/logo.jpg'
import monitor from './images/monitor.png'
import office from './images/office.jpeg'
import vision from './images/vision.jpg'



function navbar() {
  return (
    <div  className="backgr">
    <div className='main container'style={{width:'100%'}}>
      <div className=' stick navbar'>

     <div className="try"> <li className="nav-item">
      <span> <img src={logo}/></span>
    <a className="try"  href="#">SpectaCode</a>
          

        </li></div>
    <div className=" p-4 stick">
    <ul className="nav ">


  <li className="nav-item">
    
    <a className=" right"  href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="right" href="#about">About</a>
  </li>
  <li className="nav-item">
    <a className="right" href="#">Projects</a>
  </li>
  <li className="nav-item">
    <a className="right" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="right" href="#">Contact Us</a>
  </li>
</ul> 
 
     
    </div>
    </div>

    <div className="body">
      <h1>SpectaCode</h1>
      <h3>We love technology. </h3>
      <p>What we all share is our love for technology - in all its facets.</p>
    {/* <video width="100%" height="auto" autoplay muted playsinline >

<source src="soon.mp4" type="video/mp4"></source>
</video> */}
    </div>
    </div>
    <section id="about">
      <h1>About</h1>
      <div className="content">
        <div className='img-cls'><img src={logo} alt="img"/></div>
        <div className='data-cls'>
          <p>About Company</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo ab earum velit voluptatem. Iure exercitationem impedit voluptatibus voluptatem in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore mollitia dolorum consequuntur optio minus, voluptate nulla dolorem recusandae, at officia error aut veniam deleniti rem facere esse debitis blanditiis!
        </div>
      </div>
      <div className="content-2">
        <div className='img-cls2'><img src={vision}  alt="img"/></div>
        <div className='data-cls'>
        <p>Aim to Be....</p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo ab earum velit voluptatem. Iure exercitationem impedit voluptatibus voluptatem in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore mollitia dolorum consequuntur optio minus, voluptate nulla dolorem recusandae, at officia error aut veniam deleniti rem facere esse debitis blanditiis!
        </div>
      </div>
      <div className="content-3">
        <div className='img-cls3'><img src={office} alt="img"/></div>
        <div className='data-cls'>
        <p>Achievment</p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo ab earum velit voluptatem. Iure exercitationem impedit voluptatibus voluptatem in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore mollitia dolorum consequuntur optio minus, voluptate nulla dolorem recusandae, at officia error aut veniam deleniti rem facere esse debitis blanditiis!
        </div>
      </div>

    </section>
    </div>
    
  
  )
}

export default navbar;
