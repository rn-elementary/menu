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
            print("897929", title)
            showMenu()
        }
    }

    @objc var options: [String] = [] {
        didSet {
            showMenu()
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
        button.backgroundColor = .blue

    }


    func showMenu() {
        var index = -1;
        let actions = self.options.map({ string in
            index += 1
            return   UIAction(title: string, handler: { (_) in
            if self.onSelect != nil {
                self.onSelect!(["index": index,"title": string])
            }
            })
        })
        let menu = UIMenu(title: title, children: actions)
        button.menu = menu
        button.showsMenuAsPrimaryAction = true
    }
}
