import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
} from 'react-native';
import {COLORS, STATUS} from '../../constants';

interface LoseWinProps {
  status: string;
  moreOption: (status: string) => void;
}

interface nextRetryButtonProps {
  buttonIcon: string;
  title: string;
  color?: string;
}

const NextRetryButton: React.FC<nextRetryButtonProps> = ({
  buttonIcon,
  title,
  color,
}) => {
  return (
    <View
      style={{
        ...styles.buttonStyle,
        backgroundColor: color ? color : 'transparent',
      }}>
      <Ionicons name={buttonIcon} size={30} color="white" />
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const LoseWin: React.FC<LoseWinProps> = ({status, moreOption}) => {
  return (
    <>
      {status !== STATUS.NONE && (
        <Modal transparent={true} animationType="slide">
          <ImageBackground
            source={require('../../assets/Images/bark.png')}
            style={{
              top: Dimensions.get('screen').height / 2.5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 120,
              elevation: 5,
            }}>
            <View
              style={{
                ...styles.mainContainer,
              }}>
              <Text style={styles.statusText}>{status} </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  moreOption(status === STATUS.WIN ? STATUS.WIN : STATUS.LOSS)
                }>
                {status === STATUS.WIN ? (
                  <NextRetryButton
                    buttonIcon="md-arrow-forward-circle-sharp"
                    title=""
                  />
                ) : (
                  <NextRetryButton buttonIcon="reload-circle" title="" />
                )}
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
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
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    width: 85,
    paddingLeft: 2,
    paddingRight: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default LoseWin;
