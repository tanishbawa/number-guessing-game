import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: COLORS.accent500,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})