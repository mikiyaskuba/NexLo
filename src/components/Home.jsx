import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Home() {
	const particleOptions = {
		fpsLimit: 60,
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.3,
					sync: false,
				},
			},
			size: {
				value: 2,
				random: true,
			},
			line_linked: {
				enable: false,
			},
			move: {
				enable: true,
				speed: 1,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "out",
				bounce: false,
			},
		},
		interactivity: {
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
		},
		retina_detect: true,
	};

	return (
		<div className="relative overflow-auto min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black">
			{/* Particle Background */}
			<Particles
				id="tsparticles"
				options={particleOptions}
				className="absolute inset-0"
			/>

			{/* Main Content */}
			<div className="relative z-10 text-center max-w-2xl mx-auto px-6 pt-20 pb-20">
				{/* Heading */}
				<motion.h1
					className="text-white font-extrabold text-6xl md:text-8xl"
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
				>
					Welcome to NexLo
				</motion.h1>

				{/* Subheading */}
				<motion.p
					className="text-gray-300 mt-4 text-lg md:text-2xl leading-relaxed"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
				>
					Where innovation meets purpose to create a brighter future.
				</motion.p>

				{/* Mission Statement */}
				<motion.div
					className="mt-8"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
						Our Mission
					</h2>
					<p className="text-gray-300 text-base md:text-lg leading-relaxed">
						At NexLo, we’re committed to driving progress through visionary
						projects and strategic partnerships. Our mission is to harness the
						power of technology, creativity, and collaboration to build
						solutions that redefine industries and uplift communities.
					</p>
				</motion.div>

				{/* Why Partner Section */}
				<motion.div
					className="mt-10 text-left"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 1 }}
				>
					<h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
						Why Partner with NexLo?
					</h2>
					<ul className="text-gray-300 space-y-3">
						<li>
							🌟 <strong>Visionary Leadership:</strong> We bring groundbreaking
							ideas to life with a bold and forward-thinking approach.
						</li>
						<li>
							🌐 <strong>Global Impact:</strong> Together, we can shape the
							future by creating solutions that matter on a global scale.
						</li>
						<li>
							💡 <strong>Innovative Excellence:</strong> We leverage
							cutting-edge technologies to deliver exceptional results.
						</li>
						<li>
							🌱 <strong>Sustainable Growth:</strong> Our projects are designed
							to create long-lasting value for communities and ecosystems.
						</li>
					</ul>
				</motion.div>

				{/* Call-to-Action Buttons */}
				<div className="mt-12 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="inline-block"
					>
						<Link
							to="/projects"
							className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
						>
							Explore Our Projects
						</Link>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="inline-block"
					>
						<Link
							to="/contact"
							className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
						>
							Connect with Us
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
