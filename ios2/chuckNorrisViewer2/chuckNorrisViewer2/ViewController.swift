//
//  ViewController.swift
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

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
        let nextView = storyboard!.instantiateViewController(withIdentifier: "ReactView")
        self.present(nextView, animated: true, completion: nil)
    }
}

