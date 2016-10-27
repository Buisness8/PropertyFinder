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
	},
	flowRight:{
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText:{
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button:{
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	searchInput:{
		height:36,
		padding:4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: 'red'
	},
	image:{
		width: 217,
		height: 138
	}
});

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: 'london'
		};
	}
	render(){
		console.log('SearchPage.render')
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to buy!
				</Text>
				<Text style={styles.description}>
				Search by place-name, postcode or seatch near location.
				</Text>
				<View style={styles.flowRight}>
					<TextInput
						style={styles.searchInput}
						value={this.state.searchString}
						onChange={this.onSearchTextChanged.bind(this)}
						placeholder='Search via name or postcode'/>
					<TouchableHighlight style={styles.button}
						underlayColor='#99d9f4'>
						<Text style={styles.buttonText}>GO</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight style={styles.button}
					underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Location</Text>
				</TouchableHighlight>
				<Image source ={require('./Resources/house.png')} style={styles.image}/>
			</View>
		);
	}
	
	onSearchTextChanged(event){
		console.log('onSearchTextChanged');
		this.setState({ searchString: event.nativeEvent.text})
		console.log(this.state.searchString)
	}
}


module.exports = SearchPage;