import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  useRoute,
  useNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { styles } from "../styles/posts.style";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const [postsArr, setPostsArr] = useState([]);
  const [postDescr, setPostDescr] = useState("");
  const [photo, setPhoto] = useState("");
  const [postsLocation, setPostsLocation] = useState("");

  // const {
  //   params: { user = "", email = "", url = "", descr = "", location = "" },
  // } = useRoute();

  const {
    params: { url = "", descr = "", locationText = "", location },
  } = useRoute();

  useEffect(() => {
    setPostDescr(descr), setPhoto(url), setPostsLocation(locationText);
  }, [descr, url, locationText]);

  useEffect(() => {
    if (postDescr !== "" && photo !== "" && postsLocation !== "") {
      const newPostItem = { postDescr, photo, postsLocation };
      setPostsArr((prevState) => [newPostItem, ...prevState]);
    }
  }, [postDescr, photo, postsLocation]);

  // console.log(location);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.photo}></View>
        <View>
          <Text style={styles.name}>User</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        {postsArr &&
          postsArr.map(({ postDescr, photo, postsLocation }, index) => (
            <View style={styles.postThumb} key={index}>
              <View style={styles.postImg}>
                <Image
                  source={{ uri: `${photo}` }}
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </View>
              <Text style={styles.postDescr}>{postDescr}</Text>
              <View style={styles.addInfoContainer}>
                <View style={styles.comments}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Comments");
                    }}
                  >
                    <Image
                      source={require("../assets/images/comments.png")}
                      style={styles.icon}
                    ></Image>
                  </TouchableOpacity>

                  <Text style={styles.commentsInfo}>0</Text>
                </View>
                <View style={styles.location}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Map", { location });
                    }}
                  >
                    <Image
                      source={require("../assets/images/location.png")}
                      style={styles.icon}
                    ></Image>
                  </TouchableOpacity>
                  <Text style={styles.locationInfo}>{postsLocation}</Text>
                </View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};
