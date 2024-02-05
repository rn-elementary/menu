@objc(PickerNativeViewManager)
class PickerNativeViewManager: RCTViewManager {

  override func view() -> (PickerNativeView) {
    return PickerNativeView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

class PickerNativeView: UIView {

    let button = UIButton()

    @objc var onSelect: RCTDirectEventBlock?


    @objc var title: String = "" {
        didSet {
            if self.options.count > 0 {
                showMenu()
            }
        }
    }

    @objc var options: [String] = [] {
        didSet {
            if title != "" {
                showMenu()
            }
        }
    }

    override init(frame: CGRect) {
      super.init(frame: frame)
        initialize()
    }

    required init?(coder: NSCoder) {
      super.init(coder: coder)
        initialize()

    }

    func initialize() {
        button.setTitle("", for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        self.addSubview(button)
        NSLayoutConstraint.activate([
            button.topAnchor.constraint(equalTo: self.topAnchor),
            button.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            button.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            button.trailingAnchor.constraint(equalTo: self.trailingAnchor)

        ])
    }


    func showMenu() {
        let actions = self.options.enumerated().map({ index,string in
            return UIAction(title: string, handler: { action in
                if self.onSelect != nil {
                    self.onSelect!(["index": index,"title": action.title])
                }
            })
        })
        let menu = UIMenu(title: title, children: actions)
        button.menu = menu
        button.showsMenuAsPrimaryAction = true
    }
}
