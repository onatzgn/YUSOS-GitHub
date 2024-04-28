import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TAB_HEIGHT = 50; 

export default StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        marginLeft: windowWidth * 0.027, 
        marginTop: windowHeight * 0.04,
    },
    container: {
        flex: 1,
        height: TAB_HEIGHT * 6, 
        paddingHorizontal: windowWidth * 0.053, 
        paddingVertical: windowHeight * 0.015, 
        backgroundColor: '#f0f0f0', 
        borderRadius: windowWidth * 0.027, 
        borderWidth: 1, 
        borderColor: 'black', 
        marginRight: windowWidth * 0.027, 
    },
    heading: {
        fontSize: windowWidth * 0.054, 
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.013,
    },
   
    infoContainer: {
        position: 'absolute',
        top: windowHeight * 0.133, 
        left: windowWidth * 0.027, 
        width: '90%', 
        backgroundColor: 'lightblue', 
        borderRadius: windowWidth * 0.027,
        padding: windowHeight * 0.03, 
        height: TAB_HEIGHT * 8, 
    },
    closeButtonContainer: {
        position: 'absolute',
        top: windowHeight * 0.02, 
        right: windowWidth * 0.027, 
        //padding: windowWidth * 0.027, 
        borderRadius: windowWidth * 0.027, 
        backgroundColor: 'white', 
        zIndex: 1, 
    },
    
    closeButtonText: {
        fontSize: windowWidth * 0.043, 
        fontWeight: 'bold',
    },
    
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        marginTop: windowHeight * 0.058, 
        color: '#000',
        marginRight: windowWidth * 0.58, 
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    selectedInfoText: {
        fontSize: windowWidth * 0.05, 
        fontWeight: 'bold',
        textAlign: 'left',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
   
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: windowWidth * 0.027, 
        padding: windowHeight * 0.03, 
        width: '80%', 
        height: '70%', 
    },
    
    modalTitle: {
        fontSize: windowWidth * 0.05, 
        fontWeight: 'bold',
        textAlign: 'left', 
        marginBottom: windowHeight * 0.02, 
    },
    
    modalText: {
        fontSize: windowWidth * 0.04, 
        textAlign: 'left', 
    },
});
