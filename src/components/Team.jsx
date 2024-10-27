import React from "react";
import Miko from "../assets/miki.jpg";
import ket from "../assets/kete.jpg";
import Abr from "../assets/abr.JPG";
const teamMembers = [
	{
		name: "Miko Kuba /Mikiyas getu",
		title: "Founder & CEO",
		description:
			"Miko leads the team with a vision for innovation and excellence, shaping the company’s strategy and growth. A passionate leader and full-stack developer.",
		image: Miko, // Replace with actual image path
		socials: {
			linkedin: "www.linkedin.com/in/mikiyas-getu-ayele-a830372a0",
			twitter: "https://twitter.com/miko",
		},
	},
	{
		name: "Ketemaw W. ",
		title: "Head of Marketing",
		description:
			"Ketemaw develops and executes marketing strategies that grow our brand and help us reach new heights, making sure our work gets the attention it deserves.",
		image: ket,
		socials: {
			linkedin: "https://linkedin.com/in/johndoe",
			twitter: "https://twitter.com/johndoe",
		},
	},
	{
		name: "Abriham A",
		title: "Lead Researcher",
		description:
			"Abrsh conducts thorough research to provide data-driven insights, ensuring that our projects are both innovative and impactful.",
		image: Abr,
		socials: {
			linkedin: "https://linkedin.com/in/amina",
			twitter: "https://twitter.com/amina",
		},
	},
	{
		name: "Kirubel G.",
		title: "Chief Technology Officer",
		description:
			"Keriubel is the tech genius behind the operation, ensuring every project is built with the latest technologies and scalability in mind.",
		image:
			"https://i.pinimg.com/736x/66/36/31/6636315f1088ee6b1c81c5d683e32473.jp",
		socials: {
			linkedin: "https://linkedin.com/in/sophia",
			twitter: "https://twitter.com/sophia",
		},
	},

	{
		name: "Mikiyas ",
		title: "Senior Developer",
		description:
			"Mika is our code wizard, turning complex problems into sleek, efficient solutions. With a keen eye for detail,Mika ensures that the tech is flawless.",
		image: "/path/to/alex-image.jpg",
		socials: {
			linkedin: "https://linkedin.com/in/alex",
			twitter: "https://twitter.com/alex",
		},
	},
];

export default function Team() {
	return (
		<div className="min-h-screen pt-20 bg-[#111827]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl font-bold text-white mb-8">
					Meet the Team Behind the Vision
				</h1>
				<p className="text-lg text-gray-300 mb-12">
					Bringing passion, creativity, and expertise to every project we touch.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
						>
							<img
								className="w-full h-47 object-cover"
								src={member.image}
								alt={member.name}
							/>
							<div className="p-6">
								<h2 className="text-2xl font-semibold text-gray-800 mb-2">
									{member.name}
								</h2>
								<p className="text-gray-600 text-lg">{member.title}</p>
								<p className="text-gray-500 mt-3">{member.description}</p>
								<div className="flex space-x-3 mt-4">
									<a
										href={member.socials.linkedin}
										className="text-blue-500 hover:text-blue-700"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</a>
									<a
										href={member.socials.twitter}
										className="text-blue-400 hover:text-blue-600"
										target="_blank"
										rel="noopener noreferrer"
									>
										Twitter
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
