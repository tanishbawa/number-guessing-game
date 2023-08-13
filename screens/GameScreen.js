import { View, Text, StyleSheet } from 'react-native'

export const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Text>Guess</Text>

            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})