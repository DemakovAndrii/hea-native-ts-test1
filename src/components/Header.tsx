import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/Header/Logo";
import Sliders from "../../assets/Header/Sliders";

const Header = () => {
	return (
		<View style={styles.container}>
			<Logo />
			<Sliders />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 18,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 10,
		paddingBottom: 12,
	},
});

export default Header;
