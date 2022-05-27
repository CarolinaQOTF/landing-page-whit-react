import React from "react";
import Navbar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "../footer.jsx";
import Cards from "./cardsBody.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Footer />
		</>
	);
};

export default Home;
