import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <div className='left-footer'>NelsonMees</div>
            <div className='center-footer'>
                <Link to="/" className='footer-link'>Home</Link>
                <Link to="/about" className='footer-link'>About</Link>
                <Link to="/works" className='footer-link'>Works</Link>
                <Link to="/contact" className='footer-link'>Contact</Link>
            </div>
            <div className='footer-text'>© All rights reserved by <span>Cenas</span></div>
        </>
    )
}

export default Footer