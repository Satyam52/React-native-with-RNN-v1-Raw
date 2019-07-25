import { Navigation } from "react-native-navigation";
import Icons from "../../../node_modules/react-native-vector-icons/Ionicons";
const startTabs = () => {
  Promise.all([
    Icons.getImageSource("md-map", 30),
    Icons.getImageSource("ios-share-alt", 30)
  ]).then(source =>
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: source[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: source[1]
        }
      ]
    })
  );
};
export default startTabs;
