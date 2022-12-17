import {StyleSheet, Text, View} from 'react-native';

interface WordContainerProps {
  word: string;
  generatedWord: string;
}

const WordContainer: React.FC<WordContainerProps> = ({word, generatedWord}) => {
  return (
    <View style={styles.mainContainer}>
      {generatedWord.split('').map((letter: string, index: number) => {
        return (
          <View style={styles.letterContainer} key={index}>
            <Text style={styles.letter}>
              {word.includes(letter) ? letter : ''}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  letterContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    margin: 4,
    width: 30,
    height: 50,
    alignItems: 'center',
  },
  letter: {
    fontSize: 40,
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: '700',
  },
});

export default WordContainer;
