

function Navbar() {
  
  const navItems = ["Home", "Quote", "Restaurant", "Foods", "Contact"];



  return (
    <div id='navbar'>
    <div className="leftdiv">
    <img src="https://flowbite.com/docs/images/logo.svg" alt="img" />
    <span style={{color: "white"}}>GeekFoods</span>
    </div>

    <div id="rightdiv">
      <li><a href="">Home</a></li>
      <li><a href="">Quote</a></li>
      <li><a href="">Resturant</a></li>
      <li><a href="">Foods</a></li>
      <li><a href="">Contact</a></li>
      </div>

      <div className="btn">

      <button id='navbutton'>Get started</button>
      </div>
   
   
     
    </div>
  )
}

export default Navbar
