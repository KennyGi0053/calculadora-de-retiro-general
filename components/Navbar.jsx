import logo from "../src/assets/logo calculadora.jpeg"
const Navbar = () => {
  return (
    <div>
        <nav className="w-full h-30 bg-black">
            <img 
            src={logo} alt="logo"
            className="h-26 w-30 md:ml-60 md:items-center md:justify-center pt-2"
            />
        </nav>
    </div>
  )
}

export default Navbar
