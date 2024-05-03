import './style.css'
import style from "./css.style.module.css"
// import reactImg from '../../assets/react.svg'
import logo from '../../assets/logo.svg'


function Navbar() {
  
  const navItems = [
    {
      // link: "https://www.youtube.com/watch?v=EHTWMpD6S_0",
      name: "Home"
  },

  {
    // link: "https://classroom.google.com/c/NjYwNjQwNzE5NzEy/a/NjYwNjQwNzE5Nzcz/details",
    name: "Quote"
},

{
  // link: "https://www.geekster.in/course/66141dbfe0d0fd0a7d62db3c/?lecture=6626199e7a596f30132d55a6",
  name: "Restaurants"
},

{
  // link: "https://zoom.us/postattendee?mn=DX4XaChQNPp-55VFnAoLjJHo6y26E--dpx6Y.PA06bEqWrgcltMw5",
  name: "Foods"
},

{
  // link: "https://www.freecodecamp.org/learn/front-end-development-libraries/react/use-proptypes-to-define-the-props-you-expect",
  name: "Contact"
},








];



  return (
    <div style={{backgroundColor: "#0e131f", color: "#fff", padding: "20px"}}>


    <nav className="navItems">
      <section className={`${style.sectionContainer} ${style.sectionBg}`}>
      <img src={logo} alt="logo" className='logoImg'/>
      <h2>GeekFood</h2>
      </section>


      <section >
      <ul className={style.navChild}>
    {
      navItems.map(({link, name}, index)=> (
        <li key={index}><a href={link}>{name}</a></li>
      ))
    }
  
      </ul>
      </section>


      <section className={style.sectionContainer}>
      <button className='btn'>Get Started</button>
      </section>
    </nav>
   
   
     
    </div>
  )
}

export default Navbar
