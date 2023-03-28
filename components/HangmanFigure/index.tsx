import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  hanger,
  head,
  leftArm,
  leftLeg,
  rightArm,
  rightLeg,
  rope,
  stomach,
} from '../../constants/figure';

interface HangmanFigureProps {
  word: number;
}

const HangmanFigure: React.FC<HangmanFigureProps> = ({word}) => {
  return (
    <View style={styles.container}>
      <Container>
        {word > 1?null: leftArm}
        {word > 2? null: rightArm}
        {word > 5? null: rightLeg}
        {word > 4? null: leftLeg}
        {word > 5?null: rope}

        {word > 3? null: stomach}
        {word > 3? null: head}
   
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
});

export default HangmanFigure;
