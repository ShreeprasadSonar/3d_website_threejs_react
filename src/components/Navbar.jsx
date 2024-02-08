//rafce
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='header' style={{ backgroundColor: '#4D148C'}}>
        <NavLink to="/" className="h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            {/* Replace the placeholder text with the FedEx logo */}
            <img src="./src/assets/images/FedEx_logo_Shree.png" alt="FedEx Logo" className="h-full" />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/Track" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Track
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar