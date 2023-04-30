import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const ModalDesign = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main} >
        <View style={styles.buttonView}>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        </View>
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        backdropOpacity={1}
         > 
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText} >Hello World</Text>
                <Button title="Close Modal" onPress={() => setModalVisible(false)} />
            </View>
        </View>
        </Modal>
        
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    buttonView:{
        flex:1,
         justifyContent:"flex-end",
         marginBottom:36,
    },
    centeredView: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
    },
    modalView:{
        backgroundColor:"white",
        padding:35,
        borderRadius:10,
        elevation:5,
    },
    modalText:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:15,
        textAlign:"center",
    }


})

export default ModalDesign