import React from "react";
import { Text, View } from "react-native";

const Name = () => {
	return (
		<View style={{}}>
			<Text
				style={{
					fontSize: 32,
					fontFamily: "Montserrat-Medium",
					paddingHorizontal: 18,
					color: "white",
				}}
			>
				Марго,
			</Text>
			<Text
				style={{
					fontSize: 32,
					fontFamily: "Montserrat-Regular",
					paddingHorizontal: 18,
					color: "white",
				}}
			>
				28
			</Text>
		</View>
	);
};

export default Name;
