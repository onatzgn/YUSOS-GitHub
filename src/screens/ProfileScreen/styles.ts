import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
        paddingHorizontal: width * 0.08,
        marginTop: width * 0.05,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: width * 0.08,
        position: 'relative',
    },
    profileImage: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: width * 0.2,
    },
    name: {
        fontSize: width * 0.065,
        marginTop: width * 0.05,
    },
    changeProfileButton: {
        position: 'absolute',
        bottom: width * 0.1,
        right: width * 0.2,
        backgroundColor: '#2e76e8',
        borderRadius: width * 0.1,
        width: width * 0.13,
        height: width * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editInfoButton: {
        position: 'absolute',
        top: -width * 0.035,
        right: 0,
        borderRadius: width * 0.1,
        width: width * 0.15,
        height: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:-width * 0.03,
    },
    plusSign: {
        color: 'white',
        fontSize: width * 0.1,
        fontWeight: 'bold',
    },
    infoContainer: {
        width: width * 0.8,
        backgroundColor: 'white',
        marginBottom: width * 0.04,
        position: 'relative',
        justifyContent: 'space-between',
        borderRadius: width * 0.05,
        padding: width * 0.05,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    infoHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: width * 0.04,
    },
    infoHeading: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
    },
    userInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: width * 0.02,
    },
    userInfoTitle: {
        fontWeight: 'bold',
        marginRight: width * 0.05,
    },
    userInfoInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: width * 0.025,
        padding: width * 0.025,
    },
    userInfoText: {
        flex: 1,
    },
    activitiesContainer: {
        width: width * 0.8,
        backgroundColor: 'white',
        marginBottom: width * 0.04,
        position: 'relative',
        justifyContent: 'space-between',
        borderRadius: width * 0.05,
        padding: width * 0.05,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    activitiesHeading: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        marginBottom: width * 0.04,
    },
    titleText: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        marginTop: width * 0.06,
        color: '#000',
        marginLeft: -width * 0.027,
    },
});

export default styles;
