import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useHistory } from "react-router-native";
import { requestAsyncData, requestLogin } from "../../store/user/userActions";
import api from "../../api";

export default function App() {
  const history = useHistory();
  const [email, setEmail] = useState("5555570229"); // 5555570229 5314918920
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    api
      .login(email, password)
      .then((response) => {
        if (response.access_token) {
          requestLogin(response);
          requestAsyncData().then(() => {
            history.push("/home");
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.img} source={require("../../assets/CompanyStaff/KidsBus-Icon.png")} />

        <Text style={styles.headerText}>KIDSBUS</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholder="login number"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="password"
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>CompanyStaff = 5555570229</Text>
      <Text style={styles.infoText}>SchoolStaff, Security = 5314918920</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },

  image: {
    marginBottom: 40
  },
  inputView: {
    width: "100%",
    height: 55,
    marginTop: "20%",
    borderBottomWidth: 1,
    width: "82%",
    borderColor: "#068BE9",
    alignItems: "baseline"
  },
  inputView2: {
    width: "100%",
    height: 55,
    marginTop: 15,
    borderBottomWidth: 1,
    width: "82%",
    borderColor: "#068BE9",
    alignItems: "baseline"
  },
  TextInput: {
    color: "black",
    height: 50,
    flex: 1,
    padding: 5,
    marginLeft: 20,
    fontSize: 15
  },
  forgot_button: {
    color: "black",
    height: 30
  },
  loginBtn: {
    width: "82%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "5%",
    backgroundColor: "#0E68AD",
    borderRadius: 7,
    elevation: 6
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16
  },

  infoText: {
    color: "black",
    fontWeight: "bold"
  },
  topView: {
    width: "100%",
    height: "25%",

    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#0E68AD"
  },
  img: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 50
  },
  headerText: {
    color: "#0E68AD",
    marginTop: "5%",
    fontSize: 21
  }
});
