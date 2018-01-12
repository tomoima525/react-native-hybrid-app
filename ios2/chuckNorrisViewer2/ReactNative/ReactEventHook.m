//
//  ReactEventHook.m
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

#import "ReactEventHook.h"
#import <React/RCTLog.h>
#import "chuckNorrisViewer2-Swift.h"

@implementation ReactEventHook

RCT_EXPORT_MODULE(EventHook)

RCT_EXPORT_METHOD(sendEvent:(NSString *)name data:(nullable NSDictionary *)data)
{
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, data);
    [ReactService.shared handleEvent:name data:data];
}
@end
