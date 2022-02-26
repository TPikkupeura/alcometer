import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        margin: 15,
    },
    label: {
        marginTop: 3,
        fontWeight: "bold",
    },
    title: {
        fontSize: 32,
        color: 'darkgreen',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    radiobtns: {
        marginTop: 10
    },
    result: {
        fontSize: 40,
        textAlign: "center",
        marginVertical: 10,
    },
    modal: {
        marginTop: 100,
        padding: 20,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    close: {
        marginTop: 50,
        color: '#333',
        fontWeight: 'bold'
    },
  });