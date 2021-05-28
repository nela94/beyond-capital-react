
import './NavBar.css';

function NavBar() {

  return (
    <nav>
        <ul>
            <li><a href='/' className="logo">The Vitoria</a></li>
            <li><a href='/Astoria'>The Neighborhood</a></li>
            <li><a href="/Availability">Availability</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
