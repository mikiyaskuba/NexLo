import React, { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const telegramBotToken = "7512639808:AAHTSOIBdroYncQib-B1Faju-ZBiGbQ9uvc"; // Replace with your bot token
		const telegramChatId = "394666753"; // Replace with your chat ID

		const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

		try {
			const response = await fetch(
				`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						chat_id: telegramChatId,
						text: message,
					}),
				}
			);

			const data = await response.json();

			if (data.ok) {
				setSubmitted(true);
			} else {
				console.error("Error:", data);
				alert(`Failed to send message: ${data.description}`);
			}
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Failed to send message. Please try again.");
		}
	};

	return (
		<div className="bg-gray-900 text-white min-h-screen py-20 px-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
				<p className="text-center text-xl mb-6">
					We'd love to hear from you! Whether you have a question about our
					projects, want to collaborate, or just want to say hello, feel free to
					reach out.
				</p>
				<div className="space-y-6">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label className="block text-lg font-medium">Your Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your name"
								required
							/>
						</div>
						<div>
							<label className="block text-lg font-medium">Your Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div>
							<label className="block text-lg font-medium">Message</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your message"
								rows="5"
								required
							></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold"
								disabled={submitted}
							>
								{submitted ? "Message Sent!" : "Send Message"}
							</button>
						</div>
					</form>
					<p className="text-center text-gray-400">
						Alternatively, you can email us at{" "}
						<a href="mailto:info@nextlow.com" className="text-yellow-400">
							infonextlow@gmail.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
