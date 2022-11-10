import React from "react";
import { Image, View } from "react-native";

import baba from "../assets/Photos/photo+.png";

const Photos = () => {
	return (
		<View style={{ height: 550, width: "100%" }}>
			<Image source={baba} style={{ height: "100%", width: "100%" }} />
		</View>
	);
};

export default Photos;
