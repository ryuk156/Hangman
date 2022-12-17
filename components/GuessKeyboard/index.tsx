import {View} from 'react-native';
import {alphabets} from '../../constants';
import KeyboardButton from '../KeyboardButton';

interface GuesskeyboardProps {
  letter: (letter: string) => void;
}

const Guesskeyboard: React.FC<GuesskeyboardProps> = ({letter}) => {
  return (
    <>
      {alphabets.map((alphabet, index) => {
        return (
          <KeyboardButton
            title={alphabet}
            key={index}
            onPress={() => {
              letter(alphabet);
            }}
          />
        );
      })}
      
    </>
  );
};

export default Guesskeyboard;
