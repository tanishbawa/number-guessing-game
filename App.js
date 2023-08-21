import { useState, useCallback } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen, GameScreen, GameOverScreen } from './screens'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(rounds) {
    setGameIsOver(true);
    setGuessRounds(rounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen chosenNumber={userNumber} onGameOver={(guessRounds) => gameOverHandler(guessRounds)} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />
  }

  return (
    <LinearGradient colors={[COLORS.primary700, COLORS.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView
          style={styles.rootScreen}
          onLayoutRootView={onLayoutRootView}
        >
          {screen}
        </SafeAreaView>
      </ImageBackground >
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
