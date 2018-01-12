//
//  MyReactViewController.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

import UIKit
import React

class MyReactViewController : UIViewController {
    let reactTag = 100
    var reactScene: ReactScene?
    let reactService: ReactService = ReactService()
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
        let callBack = {(event:ReactEvent) -> Void in
            switch(event) {
            case .nativeBack:
                self.removeView()
            }
        }
        
        reactService.setListener(callback: callBack)
    }
    
    private func removeView() {
        guard let v = view.viewWithTag(reactTag) else {
            return
        }
        v.removeFromSuperview()
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
}
