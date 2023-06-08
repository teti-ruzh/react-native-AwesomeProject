import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../styles/registration.styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const navigation = useNavigation();

  const onRegister = () => {
    if (!state.email || !state.password || !state.userName) {
      Alert.alert("All fields must be filled");
      return;
    }

    if (!state.email.includes("@")) {
      Alert.alert("Enter a valid email address (Example: abc@xxx.yyy)");
      return;
    }

    if (state.password.length < 8) {
      Alert.alert("Your password must have at least 8 characters");
      return;
    }
    console.log(state);
    setState(initialState);
    navigation.navigate("Home", {
      userName: state.userName,
      email: state.email,
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
            <View style={styles.registrationFormBox}>
              <View style={styles.photoBox}>
                <Image
                  source={require("../assets/images/add.png")}
                  style={styles.addPhotoImg}
                ></Image>
              </View>
              <Text style={styles.registerTitle}>Registration</Text>
              <View style={styles.inputsContainer}>
                <TextInput
                  style={styles.input}
                  value={state.userName}
                  onChangeText={(text) =>
                    setState({ ...state, userName: text.trim() })
                  }
                  placeholder="Login"
                ></TextInput>
                <TextInput
                  style={styles.input}
                  value={state.email}
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
                  placeholder="Email"
                  keyboardType="email-address"
                ></TextInput>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputLast}
                    value={state.password}
                    onChangeText={(text) =>
                      setState({ ...state, password: text.trim() })
                    }
                    secureTextEntry={!isShowPassword}
                    placeholder="Password (at least 8 characters)"
                    minLength={8}
                    maxLength={16}
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
              <TouchableOpacity onPress={onRegister} style={styles.signUpBtn}>
                <Text style={styles.btnLabel}>Sign Up</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Login", {
                      name: state.userName,
                      email: state.email,
                    })
                  }
                >
                  <Text style={styles.textLogIn}>
                    Already have account? Log In
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
