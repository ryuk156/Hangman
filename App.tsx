import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Guesskeyboard from './components/GuessKeyboard';
import HangmanFigure from './components/HangmanFigure';
import LoseWin from './components/LoseWin';
import WordContainer from './components/WordContainer';
import {STATUS, words} from './constants';

const App = () => {
  const [generatedRandomWord, setGeneratedRandomWord] = useState<string>('');
  const [incorrectWord, setIncorrectWord] = useState<string>('');
  const [allLetters, setallLetters] = useState<string>('');
  const [lossWinStatus, setLossWinStatus] = useState<string>(STATUS.NONE);

  const wordGenerator = () => {
    const randomWord = Math.floor(Math.random() * words.length);
    setGeneratedRandomWord(words[randomWord]);
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
      if (incorrectWord.length > 5) {
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
    } else {
      setLossWinStatus(STATUS.NONE);
      setIncorrectWord('');
      setallLetters('');
    }
  };

  return (
    <View style={{justifyContent: 'space-between'}}>
      <HangmanFigure word={incorrectWord.length} />
      <LoseWin
        status={lossWinStatus}
        moreOption={() => updateWord(lossWinStatus)}
      />
      <WordContainer word={allLetters} generatedWord={generatedRandomWord} />
      <View style={styles.keyboardContainer}>
        <Guesskeyboard letter={letter => getLetter(letter)} />
      </View>
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
});

export default App;
