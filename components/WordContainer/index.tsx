import {Image, StyleSheet, Text, View} from 'react-native';

interface WordContainerProps {
  word: string;
  generatedWord: string;
  hint: string;
}

const WordContainer: React.FC<WordContainerProps> = ({
  word,
  generatedWord,
  hint,
}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.hint}>Hint: Opposite of {hint}</Text>
      </View>
      <View style={styles.mainContainer}>
        {generatedWord.split('').map((letter: string, index: number) => {
          return (
            <View style={styles.letterContainer} key={index}>
              <Text style={styles.letter}>
                {word.includes(letter) ? letter : ''}
              </Text>
              <Image
                source={require('../../assets/Images/stone.png')}
                style={styles.stone}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  letterContainer: {
    alignItems: 'center',
  },
  letter: {
    fontSize: 40,
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'DancingScript-Bold',
  },
  stone: {
    height: 55,
    width: 55,
    elevation: 10,
  },
  hint:{
    top:10,
    fontSize: 24,
    color: 'grey',
    fontWeight: '600',
    fontFamily: 'DancingScript-Bold',
  }
});

export default WordContainer;
