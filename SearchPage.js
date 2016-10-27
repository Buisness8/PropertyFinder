'use strict'

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,
	Image
} = ReactNative;


const styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});

class SearchPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to buy!
				</Text>
				<Text style={styles.description}>
				Search by place-name, postcode or seatch near location.
				</Text>
			</View>
		);
	}
}

module.exports = SearchPage;