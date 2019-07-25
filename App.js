import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import Find from "./src/screens/FindPlace/FindPlace";
import Share from "./src/screens/SharePlace/SharePlace";
import { Provider } from "react-redux";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent("awesome-places.PlaceDetail", () => PlaceDetail);
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => Find,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => Share,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
