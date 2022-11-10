import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "../assets/Header/Logo";
import Sliders from "../assets/Header/Sliders";

const Header = () => {
	return (
		<View style={{ paddingHorizontal: 18 }}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					paddingTop: 10,
					paddingBottom: 12,
				}}
			>
				<Logo />
				<Sliders />
			</View>
		</View>
	);
};

export default Header;
