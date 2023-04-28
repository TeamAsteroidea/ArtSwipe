import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useWindowDimensions, ViewStyle } from "react-native";
// I got tired of truing all the combinations so I made it a function lol

export interface FadeProps {
  /**
   * The distance from the bottom of the parent container to the bottom of the fadeout.
   * Defaults to parent's height.
   * @default 0
   */
  offset?: number | undefined;
  /**
   * The rate at which the fadeout fades out.
   * A higher value means a faster fadeout.
   * @default 1.4
   */
  decay?: number | undefined;
  /**
   * The z-index of the fadeout.
   * @default Number.MAX_SAFE_INTEGER
   */
  zIndex?: number | undefined;
  /**
   * The direction of the gradient.
   * @default 'Down'
   */
  direction?: "Up" | "Down" | undefined;
  /**
   * The starting position from the bottom of parent.
   * @default 0
   */
  position?: number | undefined;
  /**
   * The color... Duh.
   * @default 'rgba(242, 242, 242)'
   */
  color?: string | undefined;
}

/**
 * A component that creates a fadeout effect.
 * @param {object} props - The props object.
 * @param {number} [props.offset=0] - The distance from the bottom of the parent container to the bottom of the fadeout. Defaults to parent's height.
 * @param {number} [props.decay=0.5] - The rate at which the fadeout fades out. A higher value means a faster fadeout.
 * @param {number} [props.zIndex=2147483647] - The z-index of the fadeout. Defaults to max.
 * @param {number} [props.direction='Down'] - The direction of the gradient. Defaults to 'Down'.
 * @param {number} [props.position=0] - The starting position from the bottom of parent.
 * @param {number} [props.color='rgba(242, 242, 242)'] - The color.
 * @returns {JSX.Element} - The fadeout component.
 */
export const Fade: React.FC<FadeProps> = (
  ({
    offset = 0,
    decay = 1.4,
    zIndex = Number.MAX_SAFE_INTEGER,
    direction = "Down",
    position = 0,
    color = 'rgba(242, 242, 242)',
  }) => {
    const parentHeight = useWindowDimensions().height;
    const heightDifference = Math.min(
      Math.max(0, parentHeight - offset),
      parentHeight
    );
    const colors = Array.from({ length: heightDifference }, (_, i) => {
      const opacity = Math.max( 0, Math.pow((heightDifference - i) / heightDifference, decay));
      return convertColorToRgba(color, opacity);
    });

    return (
      <LinearGradient
        colors={direction !== "Up" ? colors : colors.reverse()}
        style={
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: position,
            zIndex: zIndex,
            height: heightDifference,
            pointerEvents: "none",
          } as ViewStyle
        }
      />
    );
  }
);

/**
 * Converts a color string in either hex or rgb format to rgba format with a given opacity value.
 *
 * @param color - The color string to convert.
 * @param opacity - The opacity value to apply to the color.
 * @returns The color string in rgba format with the given opacity value.
 */
function convertColorToRgba(color: string, opacity: number): string {
  // Remove any whitespace and convert to lowercase for easier parsing
  color = color.trim().toLowerCase();

  if (color.startsWith("#")) {
    // Parse hex format
    const hex = color.slice(1);
    if (hex.length === 3) {
      // Shorthand hex (#RGB) - expand to full hex (#RRGGBB)
      color = `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    } else if (hex.length !== 6) {
      throw new Error(`Invalid hex color: ${color}`);
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else if (color.startsWith("rgb(")) {
    // Parse rgb format
    const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
      throw new Error(`Invalid rgb color: ${color}`);
    }
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else {
    return `rgba(242, 242, 242, ${opacity})`;
  }
}
