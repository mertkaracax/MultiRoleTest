import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("Async storage error: ", e);
  }
};

export const loadAsyncData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log("Async storage error: ", e);
    return null;
  }
};
