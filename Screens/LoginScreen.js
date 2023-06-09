import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/login.styles";

const initialState = {
  user: "",
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const onLogin = () => {
    // if (!state.email || !state.password) {
    //   Alert.alert("Please enter all data");
    //   return;
    // }
    // console.log(state);
    setState(initialState);
    navigation.navigate("Home", {
      screen: "Posts",
      params: { user: state.user, email: state.email },
    });
  };

  const handlePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/photobgr.jpg")}
          imageStyle={styles.image}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.containerForm}>
            <View style={styles.loginFormBox}>
              <Text style={styles.LoginTitle}>Log In</Text>
              <View style={styles.inputsContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
                  value={state.email}
                  keyboardType="email-address"
                ></TextInput>
                <View style={styles.passwordContainer}>
                  <TextInput
                    onChangeText={(text) =>
                      setState({ ...state, password: text.trim() })
                    }
                    value={state.password}
                    style={styles.inputLast}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={!isShowPassword}
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.showPasswordContainer}
                    onPress={handlePasswordVisibility}
                  >
                    <Text style={styles.showPasswordText}>
                      {" "}
                      {!isShowPassword ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={onLogin} style={styles.logInBtn}>
                <Text style={styles.btnLabel}>Log In</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={styles.textLogInContainer}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.textRegisterQuestion}>
                    Don't have an account?{" "}
                    <Text style={styles.textRegister}>Register</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
