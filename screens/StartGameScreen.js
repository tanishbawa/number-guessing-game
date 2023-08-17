import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { COLORS } from '../constants/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';

export const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );

            return;
        }

        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title children={'Guess My Number'} />
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton children={"Reset"} onPress={resetInputHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            children={"Confirm"}
                            onPress={confirmInputHandler}
                        />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
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
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: COLORS.accent500,
        borderBottomWidth: 2,
        color: COLORS.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})