import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },

    Search: {
      screen: Search,
      navigationOptions: {
        headerShown: false,
      },
    },
  })
);

export default Routes;
