import * as React from 'react';

import { Text, View } from 'react-native';
import { PickerNativeView, usePickerLayout } from 'react-native-picker-native';

export default function App() {
  const { layout, onLayout } = usePickerLayout();

  return (
    <View
      style={{
        backgroundColor: 'orange',
        flex: 1,
        marginTop: 200,
      }}
    >
      <PickerNativeView
        title={'Sample Title'}
        options={[
          'One',
          'Two',
          'Four',
          'Five',
          'Six',
          'Seven',
          'Eight',
          'Nine',
          'Ten',
        ]}
        onSelect={(e) => {
          console.log(e.nativeEvent.index);
          console.log(e.nativeEvent.title);
        }}
        layout={layout}
      >
        <View
          onLayout={onLayout}
          style={{ marginTop: 200, width: 200, marginLeft: 20 }}
        >
          <Text
            style={{
              backgroundColor: 'red',
            }}
          >
            CLICK ME
          </Text>
        </View>
      </PickerNativeView>
    </View>
  );
}
