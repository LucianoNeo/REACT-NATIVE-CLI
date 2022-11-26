import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141414',
        paddingHorizontal: 16
    },
    h1: {
        width: '100%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 48
    },
    textSM: {
        width: '100%',
        color: '#666',
        fontSize: 18,
        textAlign: 'justify'
    },
    button: {
        backgroundColor: '#222',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        marginVertical: 18,
        padding: 8
    },
    img: {
        width: '100%',
        height: 250
    }
})

export default styles