import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Info from "./Info";
import Photos from "./Photos";

const Name = () => {
	return (
		<ScrollView>
			<Header />
			<Photos />
			<Info />
		</ScrollView>
	);
};

export default Name;
