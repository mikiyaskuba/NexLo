import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Us Section */}
					<div>
						<h3 className="text-lg font-bold mb-4">About NextLow</h3>
						<p className="text-gray-400">
							NextLow is a technology-driven company focused on bringing the
							best solutions to industries such as healthcare, transport, and
							more. We innovate for the future.
						</p>
						<Link
							to="/about"
							className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
						>
							Learn More
						</Link>
					</div>

					{/* Quick Links Section */}
					<div>
						<h3 className="text-lg font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="hover:text-yellow-400">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="hover:text-yellow-400">
									About Us
								</Link>
							</li>
							<li>
								<Link to="/projects" className="hover:text-yellow-400">
									Projects
								</Link>
							</li>
							<li>
								<Link to="/contact" className="hover:text-yellow-400">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div>
						<h3 className="text-lg font-bold mb-4">Contact Us</h3>
						<p className="text-gray-400">
							Have any questions or want to get in touch? Reach out to us!
						</p>
						<p className="mt-4">
							<a
								href="mailto:info@nextlow.com"
								className="text-yellow-400 hover:text-yellow-500"
							>
								infonextlow@gmail.com
							</a>
						</p>
						<p>+251933773934</p>
						<div className="flex space-x-4 mt-6">
							<a
								href="https://facebook.com"
								className="text-gray-400 hover:text-white"
							>
								<FaFacebookF size={24} />
							</a>
							<a
								href="https://twitter.com"
								className="text-gray-400 hover:text-white"
							>
								<FaTwitter size={24} />
							</a>
							<a
								href="https://instagram.com"
								className="text-gray-400 hover:text-white"
							>
								<FaInstagram size={24} />
							</a>
							<a
								href="https://linkedin.com"
								className="text-gray-400 hover:text-white"
							>
								<FaLinkedin size={24} />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 mt-8 pt-6 text-center">
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} NextLow. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
