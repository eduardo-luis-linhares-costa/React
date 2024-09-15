import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='container'>
      <div className='leftBox'>NelsonMees</div>
      <div className='centerBox'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className='rightBox'>
        <button>Let's talk</button>
      </div>
    </div>
  );
}

export default NavBar;
