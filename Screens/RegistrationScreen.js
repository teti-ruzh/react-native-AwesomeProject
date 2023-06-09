import {
  View,
  Image,
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
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperations";
import { styles } from "../styles/registration.styles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const onRegister = () => {
    if (!state.email || !state.password || !state.login) {
      Alert.alert("Please enter all data");
      return;
    }
    console.log(state);
    dispatch(register(state));
    // console.log(state);
    setState(initialState);
    // navigation.navigate("Posts");
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
                  value={state.login}
                  onChangeText={(text) =>
                    setState({ ...state, login: text.trim() })
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
                    placeholder="Password"
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
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
