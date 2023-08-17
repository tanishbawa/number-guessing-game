import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Title } from '../components/ui/Title'
import { COLORS } from '../constants/colors'
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'

let minBoundary = 1;
let maxBoundary = 1;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


export const GameScreen = ({ chosenNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < chosenNumber)
            || direction === 'higher' && currentGuess > chosenNumber) {
            Alert.alert("Dont lie!", "You know that this is wrong...",
                [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver();
        }
    }, [currentGuess, chosenNumber, onGameOver])

    return (
        <View style={styles.screen}>
            <Title children={"Opponent's Guess"} />
            <NumberContainer children={currentGuess} />


            <Card>
                <InstructionText style={styles.instructionsText}>Higher or lower?</InstructionText>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')} >
                            <Ionicons name='md-remove' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('higher')} >
                            <Ionicons name='md-add' size={24} color='white' /></PrimaryButton>
                    </View>
                </View>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: COLORS.accent500,
        padding: 12,
    },
    instructionsText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})