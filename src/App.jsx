import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Navbar, Hero, StarsCanvas } from "./components";

// Lazy load components that are not immediately visible
const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const Feedbacks = React.lazy(() => import("./components/Feedbacks"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Toaster position="bottom-center" />
				<div className="bg-hero-pattern bg-cover bg-no-repeat      bg-center">
					<Navbar />
					<Hero />
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
				</Suspense>
			</div>
		</BrowserRouter>
	);
};

export default App;
