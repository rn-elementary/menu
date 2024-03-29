#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(PickerNativeViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(title, NSString)
RCT_EXPORT_VIEW_PROPERTY(options, NSArray)

RCT_EXPORT_VIEW_PROPERTY(onSelect, RCTDirectEventBlock)

@end
