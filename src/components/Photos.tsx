import React from "react";
import { Image, StyleSheet, View } from "react-native";

import baba from "../../assets/Photos/photo+.png";

const Photos = () => {
	return (
		<View style={styles.container}>
			<Image source={baba} style={styles.photo} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { height: 550, width: "100%" },
	photo: { height: "100%", width: "100%" },
});

export default Photos;
