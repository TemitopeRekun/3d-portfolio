import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<TypeAnimation />
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop 3D visuals, user <br className="sm:block hidden" />{" "}
						interfaces and web applications
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about" aria-label="Scroll down to about section">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

const TypeAnimation = () => {
	const [text, setText] = useState("");
	const [nameIndex, setNameIndex] = useState(0);
	const names = ["Temitope", "Ogunrekun", "Olalekan"];
	const typingSpeed = 150;
	const deletingSpeed = 75;
	const pauseDuration = 1500;
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const handleTyping = () => {
			const currentName = names[nameIndex];

			if (isDeleting) {
				// Deleting
				setText((prev) => prev.substring(0, prev.length - 1));
			} else {
				// Typing
				setText((prev) => currentName.substring(0, prev.length + 1));
			}
		};

		const timeoutId = setTimeout(
			() => {
				if (!isDeleting && text === names[nameIndex]) {
					// Finished typing, pause and then start deleting
					setTimeout(() => setIsDeleting(true), pauseDuration);
				} else if (isDeleting && text === "") {
					// Finished deleting, move to the next name
					setIsDeleting(false);
					setNameIndex((prev) => (prev + 1) % names.length);
				} else {
					handleTyping();
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [text, nameIndex, isDeleting]);

	return (
		<h1 className={`${styles.heroHeadText} text-white`}>
			Hi, I'm <span className="text-[#915eff]">{text}</span>
		</h1>
	);
};

export default Hero;
