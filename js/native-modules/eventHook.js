import { NativeModules } from 'react-native';

export const nativeBack = () => {
  NativeModules.EventHook.sendEvent('nativeBack', {});
};
