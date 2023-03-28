import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface KeyboardButtonProps {
  title: string;
  onPress?: (e: EventTarget) => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}  style={styles.buttonContainer}>
      
        <View>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 35,
    margin: 2,
    top: 4,
    backgroundColor: '#53350A',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderColor: "white",
    borderWidth: 2
  },
  buttonTitle: {
    fontFamily: 'DancingScript-Bold',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: 18
  },
});

export default KeyboardButton;
