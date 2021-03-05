import {StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	contentContainerStyle:{
		flex: 1,
	},
	itemContainerStyle: {
		width: windowWidth,		
		minHeight: 44,		
		borderBottomColor: 'rgba(0, 0, 0, 0.2)',
		borderBottomWidth: 1,
		justifyContent: 'center',
		paddingHorizontal: 15
	},
	
});
export default styles;
