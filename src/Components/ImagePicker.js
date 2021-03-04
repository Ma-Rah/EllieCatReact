import React, { useState } from "react";
import image_array from "./Images";

function ImagePicker() {
	const [selectedImage, setSelectedImage] = useState("1.jpg");

	function getRandomImage() {
		// Get random image from index of array
		setSelectedImage(Math.floor(Math.random() * image_array.length + 1) + ".jpg");
		console.log(selectedImage);
	}

	return (
		<>
			<div id="inner_container">
				<img src={`./images/${selectedImage}`} alt="Cat" onClick={getRandomImage} />
			</div>
			<div id="button_container">
				<button onClick={getRandomImage}>
					<i class="fas fa-random"></i>
				</button>
			</div>
		</>
	);
}

export default ImagePicker;
