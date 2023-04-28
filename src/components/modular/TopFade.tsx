import React, { memo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions, ViewStyle } from 'react-native';
// I got tired of truing all the combinations so I made it a function lol

export interface TopFadeProps {
  /**
   * The distance from the bottom of the parent container to the bottom of the fadeout.
   * Defaults to parent's height.
   */
  offset?: number | undefined;
  /**
   * The rate at which the fadeout fades out. A higher value means a faster fadeout.
   * Between 1 and 0.001.
   */
  decay?: number | undefined;
  /**
   * The z-index of the fadeout. Defaults to max.
   */
  zIndex?: number | undefined;
}

/**
 * A component that creates a fadeout effect at the top of the screen.
 * @param {object} props - The props object.
 * @param {number} [props.offset=0] - The distance from the bottom of the parent container to the bottom of the fadeout. Defaults to parent's height.
 * @param {number} [props.decay=0.5] - The rate at which the fadeout fades out. A higher value means a faster fadeout. Between 1 and 0.001.
 * @param {number} [props.zIndex=2147483647] - The z-index of the fadeout. Defaults to max.
 * @returns {JSX.Element} - The component.
 */
export const TopFade: React.FC<TopFadeProps> = memo(({ offset = 0, decay = 1.4, zIndex = 2147483647 }) => {
  const parentHeight = useWindowDimensions().height;
  const heightDifference = Math.min(Math.max(0, parentHeight - offset), parentHeight);
  const colors = Array.from({ length: heightDifference }, (_, i) => {
    const opacity = Math.max(0, Math.pow((heightDifference - i) / heightDifference, decay));
    return `rgba(242, 242, 242, ${opacity})`;
  });
  return (
    <LinearGradient
      colors={colors}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: zIndex,
        height: heightDifference,
        pointerEvents: 'none',
      } as ViewStyle}
    />
  );
});
