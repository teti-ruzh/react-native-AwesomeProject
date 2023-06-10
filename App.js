import { useFonts } from "expo-font";

import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { selectIsLogIn } from "./redux/auth/authSelectors";
// import { useSelector } from "react-redux";
// import { RegistrationScreen } from "./Screens/RegistrationScreen";
// import { LoginScreen } from "./Screens/LoginScreen";
import { Home } from "./Screens/Home";

// const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const isAuth = useSelector(selectIsLogIn);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
        {/* <NavigationContainer>
          <MainStack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            {isAuth ? (
              <MainStack.Screen name="Home" component={Home} />
            ) : (
              <>
                <MainStack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                />
                <MainStack.Screen name="Login" component={LoginScreen} />
              </>
            )}
          </MainStack.Navigator>
        </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
}
