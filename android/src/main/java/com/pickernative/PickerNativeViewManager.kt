package com.pickernative

import android.view.MenuItem
import android.view.View
import android.widget.PopupMenu
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter

class PickerNativeViewManager : SimpleViewManager<View>() {
  override fun getName() = "PickerNativeView"
  @ReactMethod(isBlockingSynchronousMethod = true)

  /*
  * This method is used to define the events that the native module can send to JS
  * So in this case, we are defining the onSelect event that will be sent to JS
  * RCTEventEmitter is sending a onSelect event and then this is sending to javascript
   */
  override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
    return mapOf(
      "onSelect" to mapOf(
        "phasedRegistrationNames" to mapOf(
          "bubbled" to "onSelect"
        )
      )
    )
  }
  override fun createViewInstance(reactContext: ThemedReactContext): View {
    val view = View(reactContext)
    return view
  }

  @ReactProp(name = "options")
  fun setOptions(view: View, options: ReadableArray) {
    val items = options.toArrayList().map { it.toString() }.toTypedArray()
    val popupMenu = PopupMenu(view.context, view)
    var itemId = 0
    items.forEach { option ->
      itemId += 1
      popupMenu.menu.add(0, itemId, itemId, option)
    }
    popupMenu.setOnMenuItemClickListener { menuItem: MenuItem ->
      val event = Arguments.createMap().apply {
        putInt("index", menuItem.itemId)
        putString("title", menuItem.title.toString())
      }
      val reactContext = view.context as ReactContext
      reactContext
        .getJSModule(RCTEventEmitter::class.java)
        .receiveEvent(view.id, "onSelect", event)
      true
    }
    view.setOnClickListener {
      popupMenu.show()
    }
  }
}
