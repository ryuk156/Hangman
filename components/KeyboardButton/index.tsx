import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface KeyboardButtonProps {
  title: string;
  onPress?: (e: EventTarget) => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <LinearGradient
        colors={['#8364e8', '#0974f1']}
        style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 30,
    margin: 2,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  buttonTitle: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default KeyboardButton;
