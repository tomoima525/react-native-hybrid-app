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
    
    init?(name: String, data: [String:Any]?) {
        switch (name, data) {
        case ("nativeBack", _):
            self = .nativeBack
        default:
            return nil
        }
    }
}
