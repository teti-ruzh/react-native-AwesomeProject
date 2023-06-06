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
  loginFormBox: {
    flex: 1,
    position: "absolute",
    transform: [{ translateX: -196 }, { translateY: -60 }],

    width: 393,
    height: 506,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 144,
    paddingLeft: 16,
  },
  LoginTitle: {
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
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  logInBtn: {
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
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  textRegisterQuestion: {
    textAlign: "center",
    fontFamily: "RobotoRegular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  textRegister: {
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontFamily: "RobotoRegular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
