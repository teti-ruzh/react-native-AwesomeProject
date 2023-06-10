import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { selectIsLogIn } from "../redux/auth/authSelectors";
import { logout } from "../redux/auth/authOperations";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";
import { RegistrationScreen } from "./RegistrationScreen";
import { LoginScreen } from "./LoginScreen";

import { styles } from "../styles/home.styles";

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

export const Home = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsLogIn);

  return (
    <NavigationContainer>
      {isAuth ? (
        <Tabs.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerTitleAlign: "center",
            initialRouteName: "PostsScreen",
          }}
        >
          <Tabs.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/grid.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => dispatch(logout())}>
                  <Image
                    source={require("../assets/images/logout.png")}
                    style={{ width: 24, height: 24, marginRight: 16 }}
                  ></Image>
                </TouchableOpacity>
              ),
            }}
          />
          <Tabs.Screen
            name="Create Post"
            component={CreatePostsScreen}
            options={({ navigation }) => ({
              tabBarIcon: () => (
                <View style={styles.addPostBtn}>
                  <Image
                    source={require("../assets/images/union.png")}
                    style={{ width: 13, height: 13 }}
                  ></Image>
                </View>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                  <Image
                    source={require("../assets/images/arrowleft.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 16,
                      marginLeft: 16,
                    }}
                  ></Image>
                </TouchableOpacity>
              ),
              tabBarStyle: {
                display: "none",
              },
            })}
          />
          <Tabs.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ navigation }) => ({
              tabBarIcon: () => (
                <Image
                  source={require("../assets/images/user.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                  <Image
                    source={require("../assets/images/arrowleft.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 16,
                      marginLeft: 16,
                    }}
                  ></Image>
                </TouchableOpacity>
              ),
            })}
          />
          <Tabs.Screen
            name="Comments"
            component={CommentsScreen}
            options={({ navigation }) => ({
              tabBarButton: () => null,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                  <Image
                    source={require("../assets/images/arrowleft.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 16,
                      marginLeft: 16,
                    }}
                  ></Image>
                </TouchableOpacity>
              ),
            })}
          />
          <Tabs.Screen
            name="Map"
            component={MapScreen}
            options={({ navigation }) => ({
              tabBarButton: () => null,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
                  <Image
                    source={require("../assets/images/arrowleft.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 16,
                      marginLeft: 16,
                    }}
                  ></Image>
                </TouchableOpacity>
              ),
            })}
          />
        </Tabs.Navigator>
      ) : (
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};
