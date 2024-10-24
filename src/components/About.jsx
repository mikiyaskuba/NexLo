import React from "react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<div className="relative min-h-screen py-20 px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
			{/* Animated Stars Background */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.5, 0.8, 0.5] }}
					transition={{ duration: 10, repeat: Infinity }}
				>
					<div className="relative w-full h-full">
						{/* Add a cosmic star particle effect here */}
					</div>
				</motion.div>
			</div>

			{/* Main Content */}
			<div className="relative max-w-5xl mx-auto text-center z-10">
				<motion.h1
					className="text-5xl font-bold mb-8"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					About NexLo
				</motion.h1>
				<motion.p
					className="text-xl mb-12 leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 1 }}
				>
					At NexLo, our mission is to simplify the complex. We bring
					breakthrough ideas to life through innovation, technology, and smart
					solutions. From revolutionizing healthcare with Healthgrid and
					Medlink, to rethinking urban mobility with Mela smart taxi systems, we
					are at the forefront of innovation.
				</motion.p>

				<div className="space-y-12">
					<motion.div
						className="bg-gray-800 p-6 rounded-lg shadow-lg"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						<h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
						<p>
							We envision a future where technology not only solves problems but
							also improves lives. Our startups are designed with a focus on
							making life simpler and more efficient for people everywhere.
						</p>
					</motion.div>

					<motion.div
						className="bg-gray-800 p-6 rounded-lg shadow-lg"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 1 }}
					>
						<h2 className="text-3xl font-semibold mb-4">Our Values</h2>
						<div className="flex flex-col space-y-3 ">
							<div className="flex items-center space-x-2 list-style-type:none">
								<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span>Innovation that matters</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span>Impact-driven technology</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span>Customer-first approach</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span>Excellence through collaboration</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Floating Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-20 blur-3xl absolute"
					animate={{ x: [0, 200, -200, 0], y: [0, -200, 200, 0] }}
					transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
					style={{ top: "10%", left: "5%" }}
				/>
				<motion.div
					className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 to-teal-600 opacity-20 blur-3xl absolute"
					animate={{ x: [0, -200, 200, 0], y: [0, 200, -200, 0] }}
					transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
					style={{ bottom: "10%", right: "5%" }}
				/>
			</div>
		</div>
	);
}
