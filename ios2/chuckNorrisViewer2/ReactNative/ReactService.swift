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
    let callbackId = UUID().uuidString
    init(callback: @escaping ((ReactEvent) -> Void)) {
        self.callback = callback
    }
//    func onEventCalled(reactEvent: ReactEvent) {
//        callback(reactEvent)
//    }
}

@objc final class ReactService: NSObject {
    @objc static let shared = ReactService()
    private var callbacks = [ReactEventCallback]()

    @objc func handleEvent(_ name: String, data: [String: Any]?) {
        guard let event = ReactEvent(name: name, data: data) else {
            return
        }
        callbacks.forEach { callback in
//            callback.onEventCalled(reactEvent: event)
            callback.callback(event)
        }
    }
    
    func add(callback:@escaping (ReactEvent) -> Void) -> String {
        let callback = ReactEventCallback(callback: callback)
        callbacks.append(callback)
        return callback.callbackId
    }
    
    func removeCallback(withId id: String) {
        guard let index = callbacks.index(where: { $0.callbackId == id }) else {
            return
        }
        callbacks.remove(at: index)
    }
}
