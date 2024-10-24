import React from "react";

export default function Contact() {
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
					<form className="space-y-6">
						<div>
							<label className="block text-lg font-medium">Your Name</label>
							<input
								type="text"
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your name"
							/>
						</div>
						<div>
							<label className="block text-lg font-medium">Your Email</label>
							<input
								type="email"
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							<label className="block text-lg font-medium">Message</label>
							<textarea
								className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
								placeholder="Enter your message"
								rows="5"
							></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold"
							>
								Send Message
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
