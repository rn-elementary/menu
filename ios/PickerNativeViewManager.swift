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

    @objc var title: String = "" {
        didSet {
            print("897929", title)
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
        NSLayoutConstraint.activate([
            button.topAnchor.constraint(equalTo: self.topAnchor),
            button.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            button.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            button.trailingAnchor.constraint(equalTo: self.trailingAnchor)

        ])
        button.backgroundColor = .blue
        self.addSubview(button)

    }


    func showMenu() {
        let topActions = [
            UIAction(title: "Two", handler: { (_) in
            }),
            UIAction(title: "One", handler: { (_) in
            })
        ]
        let divider = UIMenu(title: "", options: .displayInline, children: topActions)
        let bottomAction = UIAction(title: "Three", handler: { (_) in
        })
        let items = [bottomAction, divider]
        let menu = UIMenu(title: title, children: items)
        button.menu = menu
        button.showsMenuAsPrimaryAction = true
    }
}
