import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../styles/posts.style";

export const PostsScreen = () => {
  const {
    params: { user, email },
  } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.photo}></View>
        <View>
          <Text style={styles.name}>{user}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        <View style={styles.postThumb}>
          <View style={styles.postImg}></View>
          <Text style={styles.postDescr}>Description</Text>
          <View style={styles.addInfoContainer}>
            <View style={styles.comments}>
              <Image
                source={require("../assets/images/comments.png")}
                style={styles.icon}
              ></Image>
              <Text style={styles.commentsInfo}>0</Text>
            </View>
            <View style={styles.location}>
              <Image
                source={require("../assets/images/location.png")}
                style={styles.icon}
              ></Image>
              <Text style={styles.locationInfo}>Location</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
