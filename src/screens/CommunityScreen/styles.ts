import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 20, // Add spacing between rows
        marginLeft: 10,
        marginTop: 10,
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10, // Add spacing between heading and content
    },
    // New style for the info container

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
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000', // Metin rengini gerektiği gibi ayarlayın.
        marginTop: 20,
    },
});
