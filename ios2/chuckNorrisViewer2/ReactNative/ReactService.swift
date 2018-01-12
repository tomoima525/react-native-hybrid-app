//
//  ReactService.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2018/01/08.
//  Copyright © 2018 Tomoaki Imai. All rights reserved.
//

import Foundation

struct ReactEventCallback {
    
    let callback:((ReactEvent) -> Void)
    
    init(callback: @escaping ((ReactEvent) -> Void)) {
        self.callback = callback
    }
    func onEventCalled(reactEvent: ReactEvent) {
        callback(reactEvent)
    }
}

@objc final class ReactService: NSObject {
    @objc static let shared = ReactService()
    var reactEventCallback: ReactEventCallback? = nil

    @objc func handleEvent(_ name: String, data: [String: Any]?) {
        guard let event = ReactEvent(name: name, data: data) else {
            return
        }
        
        reactEventCallback?.onEventCalled(reactEvent: event)
        
    }
    
    func setListener(callback:@escaping (ReactEvent) -> Void) {
        print("listener set ")
        self.reactEventCallback = ReactEventCallback(callback: callback)
    }
}
