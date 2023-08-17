import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionsText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionsText: {
        fontFamily: 'open-sans',
        color: COLORS.accent500,
        fontSize: 24
    },
})