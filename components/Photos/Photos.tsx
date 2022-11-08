import React from "react";
import { Image, View } from "react-native";

import baba from "../../assets/Photos/photo+.png";

const Photos = () => {
	return (
		<View>
			<Image source={baba} style={{ height: 50, width: 50 }} />
		</View>
	);
};

export default Photos;
