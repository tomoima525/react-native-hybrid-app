package com.chucknorrisviewer.react;

import android.app.Application;

import com.chucknorrisviewer.BuildConfig;
import com.chucknorrisviewer.nativeModule.EventProcessor;
import com.chucknorrisviewer.nativeModule.ReactEvent;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import io.reactivex.Flowable;
import io.reactivex.processors.BehaviorProcessor;

/**
 * Service class which manages ReactInstanceManager and event listener
 *
 * Once ReactInstanceManager is created, it is reused while the application is alive
 */
class ReactService {
    private BehaviorProcessor<ReactInstanceManager> cache
            = BehaviorProcessor.create();
    private EventProcessor eventProcessor = new EventProcessor();

    ReactService(Application application) {
        ReactInstanceManager reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .addPackage(new MyReactPackage(eventProcessor))
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        cache.onNext(reactInstanceManager);
    }

    Flowable<ReactInstanceManager> observeReactInstanceManager() {
        return cache;
    }

    Flowable<ReactEvent> observeEvent() {
        return eventProcessor.getEventProcessor();
    }


}
