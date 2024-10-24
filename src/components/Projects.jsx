import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Img from "../assets/one.jpg";
import Two from "../assets/two.jpg";

const projects = [
	{
		name: "medLink",
		description:
			"medLink is a mobile med service for rural Ethiopians, ensuring access to essential medical services and information.",
		image: Img,
		technologies: ["Health Care", "Mobile Service"],
		url: "https://medlinket.netlify.app/", // GitHub repo or project website
	},
	{
		name: "Mela Smart Taxi System",
		description:
			"Mela Smart Taxi System is a time-saving, EV-based taxi service designed for residents of Addis Ababa.",
		image: "https://mikokubaportfolio.netlify.app/imgs/mela.png",
		technologies: ["Transportation", "Sustainability"],
		url: "https://github.com/mikiyaskuba/STSAddisAbaba", // GitHub repo or project website
	},
	{
		name: "Agricredit",
		description:
			"Agricredit provides financial solutions tailored for the agricultural sector, helping farmers access loans and support.",
		image: Two,
		technologies: ["Financial", "Agriculture"],
		url: "https://github.com/mikiyaskuba/agricredit", // GitHub repo or project website
	},
];

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter((project) =>
					project.technologies.includes(activeCategory)
			  );

	return (
		<div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen overflow-hidden">
			{/* Animated Particle Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
				<motion.div
					className="w-full h-full bg-fixed"
					style={{ backgroundImage: "url(https://example.com/stars.jpg)" }}
					animate={{ opacity: [0.4, 0.6, 0.4] }}
					transition={{ duration: 20, repeat: Infinity }}
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto py-16 px-4 text-center">
				<h1 className="text-5xl font-extrabold mb-4">Our Projects</h1>
				<p className="text-lg">
					Explore our groundbreaking innovations and solutions changing
					industries worldwide.
				</p>
			</div>

			{/* Categories Filter */}
			<div className="relative text-center z-10 mt-12">
				<div className="inline-block mb-8">
					{["All", "Health Care", "Transportation", "Financial"].map(
						(category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 py-2 ${
									activeCategory === category
										? "text-yellow-400 border-b-2 border-yellow-400"
										: ""
								} transition duration-300 hover:text-yellow-400`}
							>
								{category}
							</button>
						)
					)}
				</div>
			</div>

			{/* Projects Grid */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{filteredProjects.map((project, index) => (
					<motion.div
						key={index}
						className="group relative bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: index * 0.1 }}
					>
						<div className="absolute inset-0 bg-black opacity-50 z-0 rounded-lg transition-opacity group-hover:opacity-75"></div>
						<img
							src={project.image}
							alt={project.name}
							className="w-full h-48 object-cover object-center rounded-lg group-hover:opacity-60 transition-opacity"
						/>
						<div className="relative z-10 text-center">
							<h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
							<p className="mt-2">{project.description}</p>
							<div className="mt-4 flex justify-center space-x-2">
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className="text-sm bg-gray-700 text-yellow-400 px-2 py-1 rounded-md"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						{/* See More Button */}
						<div className="absolute inset-0 z-20 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-80">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105"
							>
								See More
							</a>
						</div>
					</motion.div>
				))}
			</div>

			{/* Call to Action */}
			<div className="relative z-10 text-center mt-16">
				<h2 className="text-3xl font-bold">Interested in what we do?</h2>
				<p className="text-lg my-4">
					Let’s work together and shape the future with cutting-edge solutions.
				</p>
				<Link
					to="/contact"
					className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium transition duration-300 hover:bg-yellow-500 transform hover:scale-105"
				>
					Contact Us
				</Link>
			</div>
		</div>
	);
}
