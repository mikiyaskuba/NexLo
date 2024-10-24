import { useState } from "react";
import { Link } from "react-router-dom";
import logoN from "../assets/logoN.png"; // Import the logo

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-900 fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						{/* Logo Image */}
						<div className="text-white font-bold text-2xl">
							<Link to="/">
								<img src={logoN} alt="Logo" className="h-20 w-auto" />{" "}
								{/* Correct way to render the logo */}
							</Link>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<Link
								to="/"
								className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium"
							>
								Home
							</Link>
							<Link
								to="/about"
								className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium"
							>
								About
							</Link>
							<Link
								to="/projects"
								className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium"
							>
								Projects
							</Link>
							<Link
								to="/team"
								className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium"
							>
								Team
							</Link>
							<Link
								to="/contact"
								className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-lg font-medium"
							>
								Contact
							</Link>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
						<Link
							to="/projects"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Projects
						</Link>
						<Link
							to="/contact"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
