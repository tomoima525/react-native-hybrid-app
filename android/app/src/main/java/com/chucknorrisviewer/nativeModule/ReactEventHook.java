package com.chucknorrisviewer.nativeModule;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;


public class ReactEventHook extends ReactContextBaseJavaModule {

    private final ReactEventCallback callback;
    public ReactEventHook(ReactApplicationContext reactContext, ReactEventCallback callback) {
        super(reactContext);
        this.callback = callback;
    }

    @Override
    public String getName() {
        return "EventHook";
    }

    @ReactMethod
    public void sendEvent(String name, @Nullable ReadableMap data) {
        // receive parameters from react module
        callback.onEventSent(name, data);
    }
}
