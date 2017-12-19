//
//  ReactEventHook.m
//  chuckNorrisViewer2
//
//  Created by Tomoaki Imai on 2017/12/18.
//  Copyright © 2017 Tomoaki Imai. All rights reserved.
//

#import "ReactEventHook.h"
#import <React/RCTLog.h>

@implementation ReactEventHook

RCT_EXPORT_MODULE(EventHook)

RCT_EXPORT_METHOD(sendEvent:(NSString *)name data:(nullable NSDictionary *)data)
{
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, data);
}
@end
