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
} from "react-native";
import { styles } from "../styles/registration.styles";

export const RegistrationScreen = () => {
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
                <TextInput style={styles.input} placeholder="Login"></TextInput>
                <TextInput style={styles.input} placeholder="Email"></TextInput>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputLast}
                    secureTextEntry={true}
                    placeholder="Password"
                  ></TextInput>
                  <TouchableOpacity style={styles.showPasswordContainer}>
                    <Text style={styles.showPasswordText}>Show</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity title="Sign up" style={styles.signUpBtn}>
                <Text style={styles.btnLabel}>Sign Up</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
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
