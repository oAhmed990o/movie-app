import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TextInput,
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  backUrl: string;
}

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");

  function handleSubmit() {
    const userData = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post("http://192.168.1.24:3000/register", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChangeUsername = (inputText: string) => {
    setUsername(inputText);
  };

  const handleChangePass = (inputText: string) => {
    setPass(inputText);
  };

  const handleChangeConfirmPass = (inputText: string) => {
    setConfirmPass(inputText);
  };

  const navigation: any = useNavigation();

  function loginPress() {
    navigation.navigate("LS");
  }

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      style={styles.bg}
    >
      <Text style={styles.textLogo}>🎥</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="username"
        placeholderTextColor={"gray"}
        onChangeText={handleChangeUsername}
        value={username}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="password"
        placeholderTextColor={"gray"}
        onChangeText={handleChangePass}
        secureTextEntry={true}
        value={password}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="confirm password"
        placeholderTextColor={"gray"}
        onChangeText={handleChangeConfirmPass}
        secureTextEntry={true}
        value={confirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={{ color: "lightgrey", fontSize: 18 }}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={loginPress}>
          <Text style={{ color: "lightgreen", fontSize: 18 }}>Login here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    zIndex: -1,
    flex: 1,
    resizeMode: "crop",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputBox: {
    width: 450,
    padding: 15,
    borderColor: "#202020",
    backgroundColor: "#353535",
    color: "white",
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 15,
    fontSize: 24,
  },
  button: {
    minWidth: 150,
    minHeight: 60,
    backgroundColor: "#ff675c",
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  buttonText: {
    padding: 15,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textLogo: {
    fontSize: 200,
  },
});
