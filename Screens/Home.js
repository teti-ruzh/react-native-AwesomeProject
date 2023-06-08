import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";

import { styles } from "../styles/home.styles";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
        options={{
          tabBarIcon: () => (
            <View style={styles.addPostBtn}>
              <Image
                source={require("../assets/images/union.png")}
                style={{ width: 13, height: 13 }}
              ></Image>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/user.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
        }}
      />
    </Tabs.Navigator>
  );
};
