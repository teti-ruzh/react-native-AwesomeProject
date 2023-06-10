import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../config";
import { selectName, selectUserId } from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";

import { styles } from "../styles/createpost.style";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [postDescr, setPostDescr] = useState("");
  const [locationText, setLocationText] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imgurl, setImgurl] = useState(null);
  const [location, setLocation] = useState(null);

  const userId = useSelector(selectUserId);
  const userName = useSelector(selectName);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      // let location = await Location.getCurrentPositionAsync({});
      // const coords = {
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // };
      // setLocation(coords);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setImgurl(photo.uri);
    setLocation(coords);
    await MediaLibrary.createAssetAsync(photo.uri);
    // console.log(imgurl);
  };

  const uploadPostToServer = async () => {
    try {
      const photoUrl = await uploadPhotoToServer();
      const uploadedInfo = {
        displayName: userName,
        photo: photoUrl,
        name: postDescr,
        location: locationText,
        coordinate: location,
        userId,
        likes: [],
        comments: 0,
      };
      await addDoc(collection(db, "posts"), uploadedInfo);
      resetPost();
      navigation.navigate("Posts");
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(imgurl);
      const file = await response.blob();
      const uniquePostId = Date.now().toString();
      const linkToFile = ref(storage, `imgPost/${uniquePostId}`);
      await uploadBytes(linkToFile, file);
      const photoUrl = await getDownloadURL(
        ref(storage, `imgPost/${uniquePostId}`)
      );
      return photoUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const resetPost = () => {
    setImgurl("");
    setPostDescr("");
    setLocationText("");
    setLocation(null);
  };
  // console.log(location);

  return (
    <View style={styles.container}>
      <View style={styles.imgWraper}>
        <View style={styles.postImg}>
          {imgurl ? (
            <Image
              source={{ uri: `${imgurl}` }}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          ) : (
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <View style={styles.photoView}>
                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                  <View style={styles.takePhotoOut}>
                    <Image
                      source={require("../assets/images/camera.png")}
                    ></Image>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    {" "}
                    Flip{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>
        {imgurl ? (
          <Text style={styles.info}>Edit photo</Text>
        ) : (
          <Text style={styles.info}>Upload photo</Text>
        )}
      </View>

      <View style={styles.addInfoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          onChangeText={(text) => setPostDescr(text)}
          value={postDescr}
        ></TextInput>

        <View style={styles.locationThumb}>
          <TextInput
            onChangeText={(text) => setLocationText(text)}
            value={locationText}
            style={styles.locationIinput}
            placeholder="Location"
          ></TextInput>
          <TouchableOpacity style={styles.icon}>
            <Image source={require("../assets/images/location.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>
      {imgurl ? (
        <TouchableOpacity
          style={styles.postBtnActive}
          onPress={uploadPostToServer}
        >
          <Text style={styles.btnLabelActive}>Post</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.btnLabel}>Post</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.deletePostBtn} onPress={resetPost}>
        <Image
          source={require("../assets/images/trash.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
