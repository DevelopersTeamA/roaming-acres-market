import React, { forwardRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type CustomTextInputProps = {
  cursorColor?: string;
  selectionColor?: string;
  label?: string;
  iconRight?: keyof typeof Ionicons.glyphMap;
  iconRightColor?: string;
  onIconRightPress?: () => void;
  validationIcon?: keyof typeof Ionicons.glyphMap;
  validationIconColor?: string;
  containerClassName?: string;
  inputClassName?: string;
  focusedBorderColor?: string;
  defaultBorderColor?: string;
  showValidationIcon?: boolean;
  errorMessage?: string;
  className?: string;
  placeholderTextColor?: string;
} & TextInputProps;

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      label,
      iconRight,
      iconRightColor = "#dadada",
      onIconRightPress,
      validationIcon,
      validationIconColor,
      containerClassName = "",
      inputClassName = "",
      focusedBorderColor = "border-[#008080]",
      defaultBorderColor = "border-gray-300",
      showValidationIcon = false,
      errorMessage = "",
      className,
      cursorColor = "#008080", // Default cursor color
      selectionColor = "#008080", // Default selection color
      placeholderTextColor = "#000000",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const combinedInputClass =
      className ||
      `w-full h-14 border rounded-[3px] px-4 text-base ${
        isFocused ? focusedBorderColor : defaultBorderColor
      } ${iconRight || validationIcon ? "pr-12" : ""} ${inputClassName}`;

    return (
      <View className={`mb-4 ${containerClassName}`}>
        {label && (
          <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
            {label}
          </Text>
        )}
        <View className="relative">
          <TextInput
            ref={ref}
            className={`${combinedInputClass} ${
              isFocused ? focusedBorderColor : defaultBorderColor
            } `}
            placeholderTextColor={placeholderTextColor}
            cursorColor={cursorColor} // Uses prop or default
            selectionColor={selectionColor} // Uses prop or default
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {/* Right-side icons */}
          <View className="absolute right-3 top-4 flex-row space-x-2">
            {showValidationIcon && validationIcon && (
              <Ionicons
                name={validationIcon}
                size={20}
                color={validationIconColor}
              />
            )}
            {iconRight && (
              <TouchableOpacity onPress={onIconRightPress}>
                <Ionicons name={iconRight} size={20} color={iconRightColor} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* Error Message */}
        {errorMessage && (
          <Text className="text-red-500 text-xs mt-1 px-2">{errorMessage}</Text>
        )}
      </View>
    );
  }
);

export default CustomTextInput;
