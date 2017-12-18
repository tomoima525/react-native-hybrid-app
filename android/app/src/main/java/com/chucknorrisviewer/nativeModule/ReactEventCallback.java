package com.chucknorrisviewer.nativeModule;


import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReadableMap;

public interface ReactEventCallback {
    void onEventSent(String name, @Nullable ReadableMap map);
}
