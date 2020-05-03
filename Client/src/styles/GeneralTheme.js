import { StyleSheet } from 'react-native'

const GeneralTheme = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir'
    },

    smallText: {
        color: 'white',
        fontFamily: 'Avenir',
        opacity: 0.9,
        fontSize: 16
    },
    cardText: {
        color: 'white',
        fontFamily: 'Avenir',
        opacity: 0.9,
        fontSize: 20,
        marginBottom:10
    },
    Headertext: {
        color: 'white',
        fontFamily: 'Avenir',
        opacity: 0.9,
        fontSize: 30,
        marginBottom:20
    },
    
    theme: {
        padding: 18,
        paddingHorizontal: 30,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2}
    },
    container: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        alignItems:'center'
    },
    samllThemeButton: {
        padding:7,
        paddingHorizontal: 10,
        width: '40%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 3,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2},
        height:'5%',
        alignSelf:'flex-start'
    },
    bigThemeButton:{
        padding:7,
        paddingHorizontal: 10,
        width: '40%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 3,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2},
        height:'5%',
        alignSelf:'flex-start'
    }

})

export default GeneralTheme