import { ColorsType } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { IconComponent, IconNamesType } from './IconComponent';
import { TextComponent } from './TextComponent';

export interface GlobalInputProps extends TextInputProps {
  label?: string;
  placeholder: string;
  maxLength?: number;
  enable?: boolean;
  autoFocus?: boolean;
  value?: string;
  setValue: (value: string) => void;
  textError?: string;
  showError?: boolean;
  rightIconName?: IconNamesType;
  rightIconSize?: number;
  rightIconColor?: ColorsType;
  leftIconName?: IconNamesType;
  leftIconSize?: number;
  leftIconColor?: ColorsType;
  handleLeftIconPress?: () => void;
  handleRightIconPress?: () => void;
  onBlurFn?: () => void;
  onFocusFn?: () => void;
  type?: TextInputProps['keyboardType'] | 'password';
} 

export const InputComponent = ({
  value,
  label,
  setValue,
  onBlur,
  textError,
  showError,
  rightIconColor,
  autoFocus,
  rightIconName,
  rightIconSize,
  leftIconName,
  onBlurFn,
  onFocusFn,
  leftIconSize,
  leftIconColor,
  type,
  handleRightIconPress,
  handleLeftIconPress,
  style,
  ...props
}: GlobalInputProps) => {

  const [showPass, setShowPass] = useState(true);
  const [focus, setFocus] = useState(false);

//  export const BoxInput = styled.View`
//   height: ${actuatedNormalize(56)}px;
//   border-width: ${actuatedNormalize(1)}px;
//   border-radius: ${actuatedNormalize(8)}px;
//   flex-direction: row;
//   overflow: hidden;
//   align-items: center;
// `;

  return (
    <>
      {label && (
        <TextComponent
          color='black'
          fontFamily='regular'
          fontSize={11}
          style={{marginBottom: 4}}
        >
          {label}
        </TextComponent>
      )}
      <View style={{
        height: 56,
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        // borderColor: showError ? primitive.colors.Red[300] : primitive.colors.Neutral[focus ? 900 : 200],
        // backgroundColor: showError ? primitive.colors.Red[50] : primitive.colors.Neutral[0],
        paddingLeft: type === 'password' || !leftIconName ? 16 : 0,
        paddingRight: type === 'password' || rightIconName || leftIconName ? 0 : 16,
        ...style
      }}>
        {leftIconName ? (
          <TouchableOpacity 
            style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}
            activeOpacity={0.8}
            onPress={() => {
              if (handleLeftIconPress) {
                handleLeftIconPress()
                return
              }
            }}>
            <IconComponent
              iconName={leftIconName}
              size={leftIconSize || 20}
              color={leftIconColor || 'black'}
            />
          </TouchableOpacity>
        ) : null}
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            fontFamily: 'medium',
            color: useThemeColor('black'),
            height: '100%',
          }}  
          // ref={inputRef}
          secureTextEntry={showPass && type === 'password'}
          placeholderTextColor={useThemeColor('black')}
          onBlur={() => {
            setFocus(false);
            onBlurFn && onBlurFn();
          }}
          value={value}
          onFocus={() => {
            setFocus(true);
            onFocusFn && onFocusFn();
          }}
          keyboardType={type === 'password' ? 'number-pad' : type}
          selectionColor={useThemeColor('black')}
          onChangeText={text => {
            setValue(text);
          }}
          {...props}
        />
        {type === 'password' || rightIconName ? (
          <TouchableOpacity 
            style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}
            activeOpacity={0.8}
            onPress={() => {
              if (handleRightIconPress) {
                handleRightIconPress()
                return
              }
              if(type === 'password') {
                setShowPass(!showPass);
                return
              }
            }}>
            <IconComponent
              iconName={type === 'password' ? (showPass ? 'eye' : 'eye-off') : rightIconName}
              size={rightIconSize || 20}
              color={rightIconColor || 'black'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{height: textError ? 20 : 0, marginTop: textError ? 3 : 0, marginBottom: textError ? 4 : 0}}>
        {showError && textError && (
          <TextComponent
            color='red'
            fontFamily='regular'
            fontSize={11}
          >
            {textError}
          </TextComponent>
        )}
      </View>
    </>
  );
};
