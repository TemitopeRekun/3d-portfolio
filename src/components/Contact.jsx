import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await emailjs.send(
				"service_la42qa5",
				"template_j0hh8t3",
				{
					from_name: form.name,
					to_name: "Temitope",
					from_email: form.email,
					to_email: "olalekanogunrekun@gmail.com",
					message: form.message,
				},
				"nMyue6JrBanbWC0Up"
			);

			alert("Thank you. I will get back to you as soon as possible.");

			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Failed to send message. Please try again.");
		}

		setLoading(false);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[1] bg-black-100 p-8 rounded-2xl">
				<p className={`${styles.sectionSubText}`}>Get in Touch</p>
				<h3 className={`${styles.sectionHeadText}`}>Contact Me.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Message
						</span>
						<textarea
							rows="6"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							required
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-md shadow-primary rounded-xl">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
