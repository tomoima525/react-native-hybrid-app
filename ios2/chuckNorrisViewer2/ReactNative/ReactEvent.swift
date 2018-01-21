//
//  ReactEvent.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2018/01/08.
//  Copyright © 2018 Tomoaki Imai. All rights reserved.
//

import Foundation

enum ReactEvent {
    case nativeBack
    case selected(data: [String:Any]?)
    
    init?(name: String, data: [String:Any]?) {
        switch (name, data) {
        case ("nativeBack", _):
            self = .nativeBack
        case ("selected", let passedData?):
            self = .selected(data: passedData)
        default:
            return nil
        }
    }
}
