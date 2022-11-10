import React, { type PropsWithChildren } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";
import Card from "./src/components/Card";

const App = () => {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? "black" : "white",
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? "light-content" : "dark-content"}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}
			>
				<Card />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
