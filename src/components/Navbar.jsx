import { BiDownArrow } from "react-icons/bi";
import Logo from '../assets/img/Dunder_Mifflin,_Inc.svg'

const Navbar = () => {
	return (
		<div className="flex items-center gap-16 main--navbar bg-dark-blue">
			<div>
				<img src={Logo} alt="Hammermill Copy Plus Copy Paper" className="w-36"></img>
			</div>
			<div>
				<h2 className="text-white">About</h2>
			</div>
			<div>
				<h2 className="text-white">Our Team</h2>
			</div>
			<div>
				<h2 className="text-white">Partnerships</h2>
			</div>
			<div className="flex items-center gap-2">
				<h2 className="text-white">Shop </h2>
				<p className="text-white"><BiDownArrow/></p>
			</div>
		</div>
	)
}

export default Navbar