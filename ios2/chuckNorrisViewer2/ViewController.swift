//
//  ViewController.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

import UIKit

class ViewController: UIViewController, SendDataProtocol {

    @IBOutlet weak var selectedMessage: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction
    func openReact(_ sender:UIButton) {
        let nextView = storyboard!.instantiateViewController(withIdentifier: "ReactView") as! MyReactViewController
        nextView.reactScene = ReactScene.makeSearch()
        nextView.delegate = self
        self.present(nextView, animated: true, completion: nil)
    }

    func onSendData(data: [String:Any]) {
        guard let item = data["item"] as? String else {
            return
        }
        DispatchQueue.main.async{
            self.selectedMessage.text = item
        }
    }
}

