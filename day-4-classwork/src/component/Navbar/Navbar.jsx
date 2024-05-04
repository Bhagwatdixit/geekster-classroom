import style from "./css.style.module.css";
import logo from "../../assets/logo.png"
import rocket from '../../assets/rocket.png'
import person from '../../assets/person.png'
import poster from '../../assets/poster.png'

function Navbar() {
  const navItems = [
    "platform",
    "Plans",
    "Enterprises",
    "Resources",
    "Education",
  ];
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <section style={{ display: "flex", textAlign: "center" }}>
          <img
            src= {logo}
            alt="logo"
            style={{ height: "50px" }}
          />
        </section>
        <section className="midSection">
          {navItems.map((item, index) => (
            <li style={{ listStyleType: "none", fontFamily: "sans-serif" }} key={index}>
              {item}
            </li>
          ))}
        </section>

        <section
          style={{
            display: "flex",
            gap: "20px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <li style={{ listStyleType: "none" }}>
            <a
              href=""
              style={{
                textDecoration: "none",
                marginRight: "15px",
                textAlign: "center",
              }}
            >
              Contact Us
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Log in
            </a>
          </li>

          <button className="btn1">Sign up</button>
        </section>
      </nav>

      <div className={style.heroSection}>
        <h1 className={style.heading}>See Value From Social Sooner</h1>

        <p className={style.para}>
          our training and strategic service have helped <br /> thousand of
          organizations succeed on social
        </p>
        <button className="btn2">Request a Demo</button>
      </div>

      <footer className={style.footer}>
        <section>
          <img
            src={rocket}
            alt="rocket"
            
          />
          <h4>2,500</h4>

          <p className="pp">enterprise organizations successfully launched</p>
        </section>
        <section>
          <img src={poster} alt="poster" />
          <h4>45,000</h4>
          <p className="pp">enterprise users onboard seamlessly</p>
        </section>
        <section>
          <img src={person} alt="person" />
          <h4>200,000+</h4>
          <p className="pp">professionals trained on product and startegy</p>
        </section>
      </footer>
    </div>
  );
}

export default Navbar;
