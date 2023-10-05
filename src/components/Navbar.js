import earth from '../earth.png';

export default function Navbar(){
    return(
    <nav className="nav-bar">
        <img src={earth} className="earth-icon" alt="earth"/>
        <p className="nav-title">my.travel.journal.</p>
    </nav>
    )
}