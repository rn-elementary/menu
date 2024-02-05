import {
  requireNativeComponent,
  UIManager,
  Platform,
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
  title: string; // iOS Only
  options: (string | null)[];
  onSelect: (e: {
    nativeEvent: {
      index: number;
      title: string;
    };
  }) => void;
};

const ComponentName = 'PickerNativeView';

export const PickerNative =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PickerNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { usePickerLayout } from './hooks/usePickerLayout';
export { PickerNativeView } from './PickerNativeView';
