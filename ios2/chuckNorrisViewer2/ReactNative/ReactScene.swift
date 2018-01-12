//
//  ReactScene.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2018/01/07.
//  Copyright © 2018 Tomoaki Imai. All rights reserved.
//


struct ReactScene {
    let name: String
    let data: [String: Any]
    
    init(name: String, data: [String: Any] = [:]) {
        self.name = name
        self.data = data
    }
    
    static func makeSearch() -> ReactScene {
        return ReactScene(name: .search)
    }
    
}

extension ReactScene {
    fileprivate typealias Scene = String
}

extension ReactScene.Scene {
    fileprivate static let search = "Search"
}
