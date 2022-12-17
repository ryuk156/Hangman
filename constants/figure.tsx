import {Ellipse, Rect, Svg} from 'react-native-svg';

export const Container: React.FC<{children: any}> = ({children}) => {
  return (
    <Svg width="300" height="300" viewBox="0 0 451 489" fill="none">
      <Rect width="451" height="489" fill="none" />
      {children}
    </Svg>
  );
};

export const rightLeg = (
  <Rect
    x="335.094"
    y="143"
    width="16"
    height="107"
    rx="8"
    transform="rotate(41.6388 335.094 143)"
    fill="black"
  />
);

export const leftLeg = (
  <Rect
    x="200"
    y="151.039"
    width="16"
    height="107"
    rx="8"
    transform="rotate(-38.8595 200 151.039)"
    fill="black"
  />
);

export const rightArm = (
  <Rect
    x="354.864"
    y="229"
    width="16"
    height="107"
    rx="8"
    transform="rotate(58.1239 354.864 229)"
    fill="black"
  />
);

export const rope = (
  <>
    <Rect
      x="313.933"
      y="8.00543"
      width="8.16061"
      height="145.002"
      rx="4.08031"
      transform="rotate(-0.101345 313.933 8.00543)"
      fill="black"
    />
    <Rect
      x="313"
      y="151.039"
      width="16"
      height="33.8899"
      rx="8"
      transform="rotate(-38.8595 313 151.039)"
      fill="black"
    />
  </>
);

export const leftArm = (
  <Rect
    x="200"
    y="216.039"
    width="16"
    height="107"
    rx="8"
    transform="rotate(-38.8595 200 216.039)"
    fill="black"
  />
);

export const stomach = (
  <Rect x="264" y="216" width="16" height="103" rx="8" fill="black" />
);

export const head = (
  <Ellipse cx="272" cy="346.5" rx="35" ry="35.5" fill="black" />
);

export const hanger = (
  <>
    <Rect
      x="362.936"
      y="0.463989"
      width="15.6969"
      height="311.921"
      transform="rotate(89.512 362.936 0.463989)"
      fill="black"
    />
    <Rect
      x="61.3546"
      y="10"
      width="15.6969"
      height="449.846"
      transform="rotate(0.432507 61.3546 10)"
      fill="black"
    />
    <Rect
      x="450.864"
      y="458.502"
      width="29.6632"
      height="449.846"
      transform="rotate(90.0639 450.864 458.502)"
      fill="black"
    />
  </>
);
