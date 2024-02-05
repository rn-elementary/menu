import React from 'react';
import { StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { PickerNative } from '.';

type PickerProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  options: (string | null)[];
  onSelect: (e: {
    nativeEvent: {
      index: number;
      title: string;
    };
  }) => void;
  children?: React.ReactNode;
  layout: any;
};

export const PickerNativeView = (props: PickerProps) => {
  const { style, title, options, onSelect, children, layout } = props;

  return (
    <>
      {children}
      <PickerNative
        style={[
          style,
          styles.box,
          {
            width: layout.width,
            height: layout.height,
            top: layout.y,
            left: layout.x,
          },
        ]}
        title={title}
        options={options}
        onSelect={onSelect}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
});
