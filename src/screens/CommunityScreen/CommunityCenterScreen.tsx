import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Modal,
    TextInput,
    Alert
} from 'react-native';
import CardComponent from './CardComponent';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const CommunityCenterScreen = ({ navigation }) => {
    const [cards, setCards] = useState([
        { title: 'Çorba Dağıtım', info: 'Her gün saat 12:00' },
        { title: 'Kıyafet Toplama', info: 'Hafta içi her gün' },
        { title: 'Erzak Toplama', info: 'Her ayın ilk pazarı' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');
    const [newCardInfo, setNewCardInfo] = useState('');
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [editedCardTitle, setEditedCardTitle] = useState('');
    const [editedCardInfo, setEditedCardInfo] = useState('');

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const addNewCard = () => {
        setCards([...cards, { title: newCardTitle, info: newCardInfo }]);
        setNewCardTitle('');
        setNewCardInfo('');
        setModalVisible(false);
    };

    const openEditModal = (index) => {
        setSelectedCardIndex(index);
        setEditedCardTitle(cards[index].title);
        setEditedCardInfo(cards[index].info);
        setEditModalVisible(true);
    };

    const editCard = () => {
        const updatedCards = [...cards];
        updatedCards[selectedCardIndex].title = editedCardTitle;
        updatedCards[selectedCardIndex].info = editedCardInfo;
        setCards(updatedCards);
        setEditModalVisible(false);
    };

    const deleteCard = () => {
        const updatedCards = cards.filter((_, index) => index !== selectedCardIndex);
        setCards(updatedCards);
        setEditModalVisible(false);
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>Yardım Merkezi</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                        <Text style={styles.buttonText}>Acil Durum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => { }}>
                        <Text style={styles.buttonText}>Topluluk</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <TouchableOpacity key={index} onPress={() => openEditModal(index)}>
                            <CardComponent title={card.title} info={card.info} />
                        </TouchableOpacity>
                    ))}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Yeni Kart Başlığı"
                                value={newCardTitle}
                                onChangeText={setNewCardTitle}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Yeni Kart Bilgisi"
                                value={newCardInfo}
                                onChangeText={setNewCardInfo}
                            />
                            <TouchableOpacity style={styles.modalButton} onPress={addNewCard}>
                                <Text style={styles.buttonText}>Ekle</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editModalVisible}
                    onRequestClose={() => setEditModalVisible(false)}
                >
                    <TouchableOpacity style={styles.modalOverlay} onPress={() => setEditModalVisible(false)}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Kart Başlığını Düzenle"
                                value={editedCardTitle}
                                onChangeText={setEditedCardTitle}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Kart Bilgisini Düzenle"
                                value={editedCardInfo}
                                onChangeText={setEditedCardInfo}
                            />
                            <TouchableOpacity style={styles.modalButton} onPress={editCard}>
                                <Text style={styles.buttonText}>Kaydet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={deleteCard}>
                                <Text style={styles.buttonText}>Sil</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: windowWidth * 0.055,
        marginBottom: windowHeight * 0.03,
        marginTop: windowHeight * 0.05,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginLeft: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginRight: windowWidth * 0.067,
    },
    buttonText: {
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: windowWidth * 0.053,
        marginTop: windowHeight * 0.03,
    },
    titleText: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        color: '#000',
        marginTop: windowHeight * 0.03,
        marginRight: windowWidth * 0.32,
    },
    addButton: {
        backgroundColor: '#2e76e8',
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: windowWidth * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: windowHeight * 0.03,
        right: windowWidth * 0.05,
    },
    addButtonText: {
        fontSize: windowWidth * 0.1,
        marginTop : -5,
        marginRight : -3,
        color: 'white',
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    modalButton: {
        backgroundColor: '#2e76e8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        marginTop: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default CommunityCenterScreen;
