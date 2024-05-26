import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";

const ExpoSecureStoreAdapter = {
  getItem: function (key) {
    return SecureStore.getItemAsync(key);
  },
  setItem: function (key, value) {
    return SecureStore.setItemAsync(key, value);
  },
  removeItem: function (key) {
    return SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://iuldlstlxrygcfsviwie.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bGRsc3RseHJ5Z2Nmc3Zpd2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzODU1MzksImV4cCI6MjAxNDk2MTUzOX0.8F6iBY5v6nMH1DA96IyyiqkTwJUN1L_bfdB2K8lUNME";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
