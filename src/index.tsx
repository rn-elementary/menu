import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  StyleSheet,
  type ViewStyle,
  type StyleProp,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-picker-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PickerNativeProps = {
  style: StyleProp<ViewStyle>;
  title: string;
  options: (string | null)[];
  onSelect: (e: {
    nativeEvent: {
      index: number;
      title: string;
    };
  }) => void;
};

const ComponentName = 'PickerNativeView';

const PickerNative =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PickerNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const PickerNativeView = (props: PickerNativeProps) => {
  const { style, title, options, onSelect } = props;
  return (
    <PickerNative
      style={[style, styles.box]}
      title={title}
      options={options}
      onSelect={onSelect}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
