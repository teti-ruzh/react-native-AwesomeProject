import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    backgroundColor: "#FFFFFF",
  },
  imgWraper: {
    gap: 8,
    marginBottom: 32,
  },
  postImg: {
    backgroundColor: "#F6F6F6",
    height: 300,
    width: "100%",
  },
  info: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  addInfoContainer: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 32,
  },

  input: {
    width: "100%",
    height: 50,
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontFamily: "RobotoMedium",
    fontSize: 16,
    lineHeight: 19,
  },

  locationIinput: {
    width: "100%",
    height: 50,
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontFamily: "RobotoMedium",
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 28,
  },

  locationThumb: {
    position: "relative",
  },

  icon: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 13,
    left: 0,
  },

  postBtn: {
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 51,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  postBtnActive: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 343,
    height: 51,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  btnLabel: {
    alignSelf: "center",
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },

  btnLabelActive: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },

  camera: { flex: 1 },
  photoView: {
    position: "relative",
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    position: "absolute",
    left: 5,
    bottom: 5,
    flex: 0.2,
    // alignSelf: "flex-start",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderColor: "white",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    color: "#BDBDBD",
  },

  deletePostBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    // flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    position: "absolute",
    bottom: 22,
  },
});
