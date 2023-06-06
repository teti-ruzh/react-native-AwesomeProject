import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",

    top: 0,
    left: 0,
    // transform: [{ translateX: -196 }, { translateY: -415 }],
    transform: [{ translateX: -196 }],

    flex: 1,
    justifyContent: "center",
    width: 393,
    height: 830,
    resizeMode: "cover",
  },
  containerForm: {
    position: "relative",
  },

  registrationFormBox: {
    flex: 1,
    position: "absolute",
    transform: [{ translateX: -196 }, { translateY: -115 }],

    width: 393,
    height: 566,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 78,
    paddingLeft: 16,
  },

  photoBox: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ translateX: 136 }, { translateY: -60 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addPhotoImg: {
    position: "absolute",
    bottom: 15,
    right: -12,
    width: 25,
    height: 25,
  },

  registerTitle: {
    fontFamily: "RobotoMedium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 32,
  },

  inputsContainer: {
    marginBottom: 44,
  },

  input: {
    width: 343,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  passwordContainer: {
    position: "relative",
  },

  inputLast: {
    width: 344,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 0,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  showPasswordContainer: {
    position: "absolute",
    top: 16,
    right: 40,
  },

  showPasswordText: {
    fontFamily: "RobotoRegular",
    //   fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  signUpBtn: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  btnLabel: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    //   fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  textLogIn: {
    textAlign: "center",
    fontFamily: "RobotoRegular",
    //   fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
