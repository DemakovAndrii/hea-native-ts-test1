import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import data from "../data/userInfo.json";

const Info: FC = () => {
	console.log();

	return (
		<View>
			{data.map(
				(
					{
						name,
						age,
						here,
						text,
						// location,
						// growth,
						// relations,
						// children,
						// religion,
						// philosophy,
						// character,
						// zodiac
					},
					index
				) => {
					return (
						<View key={index}>
							<View style={styles.container}>
								<View style={styles.nameAge}>
									<Text style={styles.name}>{name},</Text>
									<Text style={styles.age}>{age}</Text>
								</View>
								<View>
									<Text style={styles.hereText}>Здесь для</Text>
									<Text style={styles.here}>{here}</Text>
									<Text style={styles.text}>{text}</Text>
								</View>
								{/* <View style={styles.about}>
									<Text style={styles.aboutElement}>{growth}</Text>
									<Text style={styles.aboutElement}>{relations}</Text>
									<Text style={styles.aboutElement}>{children}</Text>
									<Text style={styles.aboutElement}>{religion}</Text>
									<Text style={styles.aboutElement}>{philosophy}</Text>
									<Text style={styles.aboutElement}>{character}</Text>
									<Text style={styles.aboutElement}>{zodiac}</Text>
								</View>
								<Text style={styles.location}>{location}</Text> */}
							</View>
						</View>
					);
				}
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 18,
	},
	nameAge: {
		display: "flex",
		flexDirection: "row",
		paddingTop: 10,
	},
	name: {
		paddingRight: 12,
		fontSize: 32,
		fontFamily: "Montserrat-Medium",
		color: "white",
	},
	age: {
		fontSize: 32,
		fontFamily: "Montserrat-Regular",
		color: "white",
	},
	hereText: {
		paddingTop: 3,
		fontFamily: "Montserrat-Regular",
		fontSize: 18,
		color: "white",
	},
	here: {
		paddingTop: 2,
		paddingBottom: 36,
		fontFamily: "Montserrat-Medium",
		fontSize: 22,
		color: "white",
	},
	text: {
		fontFamily: "Montserrat-Regular",
		fontSize: 18,
		color: "white",
		paddingBottom: 30,
	},
	about: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	aboutElement: {
		paddingRight: 20,
		paddingBottom: 20,
		fontFamily: "Montserrat-Regular",
		color: "white",
		fontSize: 18,
	},
	location: {
		fontFamily: "Montserrat-Medium",
		fontSize: 18,
		color: "white",
		paddingTop: 10,
		paddingBottom: 130,
	},
});

export default Info;
