import { Colors, ColorsType } from '@/constants/Colors';
import { FontsType } from '@/constants/Fonts';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { ActivityIndicator, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { TextComponent } from './TextComponent';

export interface ButtonPropsStyle {
  color: ColorsType;
  loading?: boolean;
  disabled?: boolean;
  type: 'solid' | 'outline' | 'transparent';
  width?: number;
}

export interface ButtonPropsComponent extends ButtonPropsStyle {
  text: string;
  fontColor?: ColorsType;
  fontFamily?: FontsType;
  fontSize?: number;
  handleButton: () => void;
  stopHandleButton?: boolean;
  style?: ViewStyle;
  fontStyle?: TextStyle;
}


export const ButtonComponent = ({
  color,
  fontColor,
  fontFamily,
  text,
  loading,
  disabled,
  type,
  handleButton,
  stopHandleButton,
  width,
  fontStyle,
  fontSize,
  style
}: ButtonPropsComponent) => {

  const colorScheme = useThemeColor(color);
  const greyColor = useThemeColor('tabIconInactive')

  const RenderContentButton = () => {
    return loading ? (
      <ActivityIndicator
        color={
          type === 'solid' || disabled
            ? Colors.light.colors.white
            : colorScheme
        }
        size={23}
      />
    ) : (
      <TextComponent
        color={
          !fontColor
            ? disabled
              ? 'tabIconInactive'
              : 'white'
            : color
        }
        fontSize={fontSize || 16}
        fontFamily={fontFamily || 'medium'}
        style={fontStyle}
      >
        {text}
      </TextComponent>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: width ? width : '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        borderColor: colorScheme,
        borderWidth: type === 'outline' && !disabled ? 1 : 0,
        backgroundColor:
          type === 'solid' || disabled
            ? disabled
              ? greyColor
              : colorScheme
            : 'transparent',
        ...style
      }}
      onPress={() => {
        if (stopHandleButton || disabled) {
          return;
        }
        handleButton();
      }}
      disabled={disabled}>
      <RenderContentButton/>
    </TouchableOpacity>
  );
};