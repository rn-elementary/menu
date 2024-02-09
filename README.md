# menu

Creates native picker in UIKit and Kotlin.

## [npm](https://www.npmjs.com/package/@rn-elementary/menu)
## Demo

![Screen Recording Feb 5](https://github.com/rn-elementary/menu/assets/27425384/018edcd8-d7b7-4ae9-8b00-9298e6443f24)


## Motivation

Sometimes react native apps dont feel native due to the javascript components. With this library will be starting a project to have all the native components ready to use in the application.
I couldnt find this kind of menu in the npm store so fastest way was to build it ;)

## Installation

```sh
npm install @rn-elementary/menu

yarn add @rn-elementary/menu
```

## Props

| Prop           | Description                                                                                                         | Type                                   | Default       |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------- |
| **`title`**    | Title for the menu (only iOS)                                                                                       | String                                 | ""            |
| **`options`**  | Option to display in the menu                                                                                       | Array of String                        | []            |
| **`onSelect`** | function which gives the index and title of the menu option selected.                                               | Function                               | () => Void    |
| **`layout`**   | It is used to overlap the native view over the react native component. Without this the component wont be tappable. | layout from react-native-picker-native | **Important** |

## Usage

- Kindly look into the example/src/App.tsx as it has the full implementation.

```js
import { PickerNativeView, usePickerLayout} from "@rn-elementary/menu";

// ...
  const { layout, onLayout } = usePickerLayout();
// ...
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
```

## Contributing

PR's are highly appreciated and so are issues.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
