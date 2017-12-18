package com.chucknorrisviewer.react;

import com.chucknorrisviewer.nativeModule.ReactEventCallback;
import com.chucknorrisviewer.nativeModule.ReactEventHook;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class MyReactPackage implements ReactPackage {
    private ReactEventCallback callback;
    MyReactPackage(ReactEventCallback callback) {
        this.callback = callback;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ReactEventHook(reactContext, callback));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
