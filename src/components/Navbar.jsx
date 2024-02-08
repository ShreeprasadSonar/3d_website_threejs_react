//rafce
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='header' style={{ backgroundColor: '#660099'}}>
        <NavLink to="/" className="h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            {/* Replace the placeholder text with the FedEx logo */}
            <img src="./src/assets/images/FedEx_logo.png" alt="FedEx Logo" className="h-full" />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Contact
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Track
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar