import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Guesskeyboard from './components/GuessKeyboard';
import HangmanFigure from './components/HangmanFigure';
import LoseWin from './components/LoseWin';
import WordContainer from './components/WordContainer';
import {STATUS, words} from './constants';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [generatedRandomWord, setGeneratedRandomWord] = useState<string>('');
  const [oppositeWord, setOppositeWord] = useState<string>('');
  const [incorrectWord, setIncorrectWord] = useState<string>('');
  const [allLetters, setallLetters] = useState<string>('');
  const [lossWinStatus, setLossWinStatus] = useState<string>(STATUS.NONE);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const wordGenerator = () => {
    const randomWord = Math.floor(Math.random() * words.length);
    setGeneratedRandomWord(words[randomWord].word);
    setOppositeWord(words[randomWord].antonym);
    {
      console.log(words[randomWord].word);
    }
  };

  useEffect(() => {
    wordGenerator();
  }, []);

  const getLetter = (letter: string) => {
    if (generatedRandomWord.includes(letter)) {
      let correctLetter = allLetters + letter;
      setallLetters(correctLetter);
      statusUpdate(correctLetter);
     
    } else {
      let incorrectLetter = incorrectWord + letter;
      setIncorrectWord(incorrectLetter);
      if (incorrectWord.length >= 5) {
        setLossWinStatus(STATUS.LOSS);
      }
    }
  };

  const statusUpdate = (correctWord: string) => {
    let status = STATUS.WIN;
    const correctWordArr = Array.from(generatedRandomWord);
    correctWordArr.forEach((letter: string) => {
      if (!correctWord.includes(letter)) {
        status = STATUS.NONE;
      }
    });
    setLossWinStatus(status);
  };

  const updateWord = (status: string) => {
    if (status == STATUS.WIN) {
      wordGenerator();
      setIncorrectWord('');
      setallLetters('');
      setLossWinStatus(STATUS.NONE);
      setScore(score + 200);
    } else if (status == STATUS.LOSS) {
      setLossWinStatus(STATUS.NONE);
      setIncorrectWord('');
      setScore(score - 200);
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('./assets/Images/main_background.jpg')}
        style={{height: Dimensions.get('screen').height}}>
        <View  style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
        <View 
          style={{alignItems: 'center', justifyContent: 'center', bottom: 15}}>
          <HangmanFigure word={incorrectWord.length} />
        </View>
        <LoseWin
          status={lossWinStatus}
          moreOption={() => updateWord(lossWinStatus)}
        />
        <WordContainer
          word={allLetters}
          generatedWord={generatedRandomWord}
          hint={oppositeWord}
        />
        <View style={styles.keyboardContainer}>
          <Guesskeyboard letter={letter => getLetter(letter)} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  scoreContainer:{
   marginLeft: 10,
   paddingTop: 10,
   zIndex: 9999999
  },
  scoreText:{
    color: 'white',
    fontSize: 22
  }
});

export default App;
