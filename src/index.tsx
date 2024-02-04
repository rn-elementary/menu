import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  StyleSheet,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-picker-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PickerNativeProps = {
  style: ViewStyle;
  title: string;
  options: string[];
};

const ComponentName = 'PickerNativeView';

const PickerNative =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PickerNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const PickerNativeView = (props: PickerNativeProps) => {
  const { style } = props;
  return <PickerNative style={[style, styles.box]} title={'Sample Title'} />;
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
