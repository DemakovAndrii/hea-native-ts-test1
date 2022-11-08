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
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";

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
				<Header />
				<Photos />
			</ScrollView>
		</SafeAreaView>
	);
};

// const styles = StyleSheet.create({
// 	sectionContainer: {
// 		marginTop: 32,
// 		paddingHorizontal: 24,
// 	},
// 	sectionTitle: {
// 		fontSize: 24,
// 		fontWeight: "600",
// 	},
// 	sectionDescription: {
// 		marginTop: 8,
// 		fontSize: 18,
// 		fontWeight: "400",
// 	},
// 	highlight: {
// 		fontWeight: "700",
// 	},
// });

export default App;
