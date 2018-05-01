package com.chucknorrisviewer.react;

import android.app.Application;

import com.chucknorrisviewer.BuildConfig;
import com.chucknorrisviewer.nativeModule.EventProcessor;
import com.chucknorrisviewer.nativeModule.ReactEvent;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;

import io.reactivex.Flowable;
import io.reactivex.processors.BehaviorProcessor;

/**
 * Service class which manages ReactInstanceManager and event listener
 * <p>
 * Once ReactInstanceManager is created, it is reused while the application is alive
 */
public class ReactService {
    private BehaviorProcessor<ReactInstanceManager> cache
            = BehaviorProcessor.create();
    private EventProcessor eventProcessor = new EventProcessor();

    public ReactService(Application application) {
        ReactInstanceManagerBuilder builder = ReactInstanceManager.builder()
                .setApplication(application)
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .addPackage(new MyReactPackage(eventProcessor))
                .addPackage(
                        new CodePush(
                                BuildConfig.DEBUG_CODE_PUSH_KEY,
                                application,
                                BuildConfig.DEBUG))
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setJSBundleFile(CodePush.getJSBundleFile())
                .setInitialLifecycleState(LifecycleState.RESUMED);

                cache.onNext(builder.build());

    }

    Flowable<ReactInstanceManager> observeReactInstanceManager() {
        return cache;
    }

    Flowable<ReactEvent> observeEvent() {
        return eventProcessor.getEventProcessor();
    }

    public void fetchJSFile() {
        // Here, usually download the latest JS file from server.
        // if the file exists, update ReactInstanceManager
    }

}
