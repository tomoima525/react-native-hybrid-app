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
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let reactView: UIView
        reactView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "ChuckNorrisViewer",
            initialProperties: nil,
            launchOptions: nil
        )
        reactView.frame = view.bounds
        reactView.translatesAutoresizingMaskIntoConstraints = true
        reactView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.addSubview(reactView)
    }
}
