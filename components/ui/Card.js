import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const Card = ({ children }) => {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: COLORS.primary800,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

})