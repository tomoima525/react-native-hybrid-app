//
//  MyReactViewController.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

import UIKit
import React

protocol SendDataProtocol: class {
    func onSendData(data: [String:Any])
}

class MyReactViewController : UIViewController {
    let reactTag = 100
    var reactScene: ReactScene?
    var callbackId: String?
    var delegate: SendDataProtocol?
    deinit {
        if let callbackId = callbackId {
            ReactService.shared.removeCallback(withId: callbackId)
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        guard let scene = reactScene else {
            return
        }
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let reactView: UIView
        reactView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "ChuckNorrisViewer",
            initialProperties: makeProperties(for: scene),
            launchOptions: nil
        )
        reactView.tag = reactTag
        reactView.frame = view.bounds
        reactView.translatesAutoresizingMaskIntoConstraints = true
        reactView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.addSubview(reactView)
        
        callbackId = ReactService.shared.add { [weak self] event in
            guard let strongSelf = self, strongSelf.isTopViewController else {
                return
            }
            switch(event) {
            case .nativeBack:
                self?.dismiss(animated: true, completion: nil)
            case .selected(let data?):
                self?.selectAndClose(data: data)
            default:
                return
            }
            
        }
    }
    
    private func selectAndClose(data:[String: Any]?) {
        if let passedData = data, let delegate = self.delegate {
            delegate.onSendData(data: passedData)
        }
        self.dismiss(animated: true, completion: nil)
    }
    
    private func makeProperties(for scene: ReactScene) -> [AnyHashable: Any] {
        var data: [AnyHashable: Any] = [:]
        scene.data.forEach { data[$0.key] = $0.value }
        let properties: [AnyHashable: Any] = [
            "initialScene": scene.name,
            "data": data,
        ]
        return properties
    }
    
    //return top view controller https://gist.github.com/snikch/3661188
    private func topViewController(of viewController: UIViewController) -> UIViewController {
        if let vc = viewController.presentedViewController {
            return topViewController(of: vc)
        }
        
        switch viewController {
        case let nvc as UINavigationController:
            if let vc = nvc.visibleViewController {
                return topViewController(of: vc)
            }
        case let tab as UITabBarController:
            if let vc = tab.selectedViewController {
                return topViewController(of: vc)
            }
        default:
            for vc in viewController.childViewControllers {
                return topViewController(of: vc)
            }
        }
        return viewController
    }
    
    private var isTopViewController: Bool {
        guard let rootViewController = UIApplication.shared.keyWindow?.rootViewController else {
            assertionFailure()
            return false
        }
        
        return topViewController(of: rootViewController) === self
    }
}
