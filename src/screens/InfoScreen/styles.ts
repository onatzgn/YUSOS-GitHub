import { StyleSheet } from 'react-native';

const TAB_HEIGHT = 50; // Assuming each "tab" is 50 pixels in height

export default StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 20, // Add spacing between rows
        marginLeft: 10,
        marginTop: 50,
    },
    container: {
        flex: 1, // Each container takes equal space within a row
        height: TAB_HEIGHT * 6, // Each container is 6 tabs long
        paddingHorizontal: 20, // Add horizontal padding
        paddingVertical: 10, // Add vertical padding
        backgroundColor: '#f0f0f0', // Background color for containers
        borderRadius: 10, // Add border radius for containers
        borderWidth: 1, // Add border width
        borderColor: 'black', // Change border color to black
        marginRight: 10, // Add spacing between containers within a row
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10, // Add spacing between heading and content
    },
    // New style for the info container
    infoContainer: {
        position: 'absolute',
        top: 100, // Adjust the top position as needed
        left: 10, // Adjust the left position as needed
        width: '90%', // Adjust the width as needed
        backgroundColor: 'lightblue', // Background color for the info container
        borderRadius: 10, // Add border radius for the info container
        padding: 20, // Add padding for the content inside the info container
        marginLeft: 10,
        height: TAB_HEIGHT * 8, // Each container is 8 tabs long
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white', // Change background color to red

    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
