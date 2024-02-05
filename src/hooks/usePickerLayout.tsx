import { useState } from 'react';
import { type LayoutChangeEvent } from 'react-native';

export const usePickerLayout = () => {
  const [layout, setLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLayout = (e: LayoutChangeEvent) => {
    setLayout({
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y,
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };
  return {
    layout,
    onLayout,
  };
};
