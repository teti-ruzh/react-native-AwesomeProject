import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/registration.styles";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photobgr.jpg")}
        imageStyle={styles.image}
      ></ImageBackground>
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
              <Text style={styles.textLogIn}>Already have account? Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
