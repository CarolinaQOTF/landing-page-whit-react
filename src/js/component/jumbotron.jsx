import React from "react";
import Cards from "./cardsBody.jsx";

const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">A warm welcome</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Minus aliquid quibusdam iure. Blanditiis atque, quis
					accusamus necessitatibus officia corrupti explicabo alias
					voluptates quasi porro, maiores nisi perspizciatis.
					Sapiente, rerum enim.
				</p>
				<div className="my-4">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</div>
			</div>
			<div className="d-flex text-center">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};

export default Jumbotron;
