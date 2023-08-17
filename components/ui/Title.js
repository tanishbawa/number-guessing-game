import { View, Text, StyleSheet } from 'react-native'

export const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})