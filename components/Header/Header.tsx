import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "../../assets/Header/Logo";
import Sliders from "../../assets/Header/Sliders";
import hdr from "./header.css";

const Header = () => {
	return (
		<View style={{ paddingHorizontal: 18 }}>
			<View
			// className={hdr.box}
			>
				<Logo />
				<Sliders />
			</View>
			<Text style={{ fontSize: 50, fontFamily: "Montserrat-Medium" }}>
				asdasd
			</Text>
		</View>
	);
};

export default Header;
