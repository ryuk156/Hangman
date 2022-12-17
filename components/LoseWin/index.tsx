import Ionicons from 'react-native-vector-icons/Ionicons';

import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {COLORS, STATUS} from '../../constants';

interface LoseWinProps {
  status: string;
  moreOption: (status: string) => void;
}

const LoseWin: React.FC<LoseWinProps> = ({status, moreOption}) => {
  return (
    <>
      {status !== STATUS.NONE && (
        <View
          style={{
            ...styles.mainContainer,
            backgroundColor: status === STATUS.WIN ? COLORS.WINNER : COLORS.DANGER,
          }}>
          <Text style={styles.statusText}>{status} </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              moreOption(status === STATUS.WIN ? STATUS.WIN : STATUS.LOSS)
            }>
            {status === STATUS.WIN ? (
              <Ionicons
                name="md-arrow-forward-circle-sharp"
                size={30}
                color="white"
              />
            ) : (
              <Ionicons name="reload-circle" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  statusText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  mainContainer: {
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default LoseWin;
