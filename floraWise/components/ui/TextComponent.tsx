import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { IconComponent, IconNamesType } from './IconComponent';

import { ColorsType } from '@/constants/Colors';
import { FontsType, FontsWeight } from '@/constants/Fonts';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface GlobalTextProps {
  fontSize: number;
  fontFamily: FontsType;
  color: ColorsType;
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
  alignFontWithMargin?: boolean;
  style?: TextStyle;
  numberOfLines?: number;
  testId?: string;
  children?: any;
  icon?: IconNamesType;
  iconColor?: ColorsType;
  iconSize?: number;
}


export const TextComponent = ({
  color,
  fontFamily,
  fontSize,
  textAlign,
  style,
  numberOfLines,
  testId,
  children,
  icon,
  iconColor,
  iconSize
}: GlobalTextProps) => {

  const colorScheme = useThemeColor(color)

  const TextComponent = () => (
    <Text
      testID={testId}
      style={{
        color: colorScheme,
        fontFamily: fontFamily,
        fontSize: fontSize,
        textAlign: textAlign,
        lineHeight: fontSize * 1.5,
        fontWeight: FontsWeight[fontFamily],
        ...style
      }}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  )

  const RenderTextComponent = () => {
    return (
      icon ? (
        <View style={icon ? { flexDirection: 'row', alignItems: 'center', gap: 8, ...style } : undefined}>
          {icon ? <IconComponent color={iconColor || color} iconName={icon} size={iconSize || 16} /> : null}
          <TextComponent />
        </View>
      ) : (
        <TextComponent />
      )
    )
  }

  return <RenderTextComponent />
};
