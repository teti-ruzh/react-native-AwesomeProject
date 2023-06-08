import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },

  userContainer: {
    flexDirection: "row",
    height: 60,
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  name: {
    fontFamily: "RobotoBold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "RobotoRegular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  postsContainer: {
    flexDirection: "column",
    gap: 32,
  },
  postThumb: {
    height: 299,
    width: "100%",
    gap: 8,
  },

  postImg: {
    backgroundColor: "#F6F6F6",
    height: 240,
    width: "100%",
    borderRadius: 16,
  },
  postDescr: {
    fontFamily: "RobotoMedium",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  comments: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  commentsInfo: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  icon: {
    height: 24,
    width: 24,
  },

  location: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  locationInfo: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
  addInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
