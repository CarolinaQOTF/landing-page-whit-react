import React from "react";

const Cards = () => {
	return (
		<>
			<div className="card m-2" style={{ width: "18rem" }}>
				<img
					src={"https://picsum.photos/id/1010/300/200"}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet reprehenderit ipsum tempore recusandae porro
						accusamus, quos, omnis distinctio qui cumque
						perspiciatis.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</>
	);
};

export default Cards;
