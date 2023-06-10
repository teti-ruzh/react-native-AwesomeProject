import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../config";
import {
  selectName,
  selectUserId,
  selectPhoto,
  selectEmail,
} from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { styles } from "../styles/posts.style";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const [postsArr, setPostsArr] = useState([]);
  // const [postDescr, setPostDescr] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [postsLocation, setPostsLocation] = useState("");

  const userId = useSelector(selectUserId);
  const Name = useSelector(selectName);
  const Email = useSelector(selectEmail);
  const userPhoto = useSelector(selectPhoto);

  // const {
  //   params: { user = "", email = "", url = "", descr = "", location = "" },
  // } = useRoute();

  // useEffect(() => {
  //   setPostDescr(descr), setPhoto(url), setPostsLocation(locationText);
  // }, [descr, url, locationText]);

  // useEffect(() => {
  //   if (postDescr !== "" && photo !== "" && postsLocation !== "") {
  //     const newPostItem = { postDescr, photo, postsLocation };
  //     setPostsArr((prevState) => [newPostItem, ...prevState]);
  //   }
  // }, [postDescr, photo, postsLocation]);

  // console.log(location);

  useEffect(() => {
    const postsCollection = query(
      collection(db, "posts"),
      where("userId", "==", userId)
    );
    onSnapshot(postsCollection, (querySnapshot) => {
      const postsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostsArr(postsArray);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.photo} source={{ uri: userPhoto }} />
        <View>
          <Text style={styles.name}>{Name}</Text>
          <Text style={styles.email}>{Email}</Text>
        </View>
      </View>
      <FlatList
        data={postsArr}
        style={styles.postsContainer}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ post }) => (
          <View style={styles.postThumb}>
            <View style={styles.postImg}>
              <Image
                source={{ uri: post.photo }}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={styles.postDescr}>{post.name}</Text>
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

                <Text style={styles.commentsInfo}>{post.comments}</Text>
              </View>
              <View style={styles.location}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Map", post.coordinate);
                  }}
                >
                  <Image
                    source={require("../assets/images/location.png")}
                    style={styles.icon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.locationInfo}>{post.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
