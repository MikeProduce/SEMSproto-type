import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,

} from "react-native";



export function NextScreen() {
    return (
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c74e07-bbe1-497b-aab8-4a4ac14a41c1?apiKey=978f41e0131a442f8daf873f3d5553aa&",
            }}
            style={styles.image}
          />
            <View style={styles.authButton}>
              <Text>Continue with Google</Text>
            </View>
            <View style={styles.authButton}>
              <Text>Continue with Apple</Text>
            </View>
          <View style={styles.or}>
            <Text>or</Text>
          </View>
          <View style={styles.Button}>
            <Text style={styles.buttonText}>Create account</Text>
          </View>
          <View style={styles.view12}>
            <Text>Log in</Text>
          </View>
        </View>
      );
  }

  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "14px 0 50px",
      },
    image: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        marginTop: 25,
        width: "100%",
        maxWidth: 255,
        flexDirection: "column",
        aspectRatio: "1.26",
    },
    or: {
      color: "#444",
      textAlign: "center",
      letterSpacing: 0.10000000149011612,
      marginBottom: 20,
      alignSelf: "center",
      font: "400 14px/20px Roboto, sans-serif ",
    },
    authButton: {
        backgroundColor: "#FFFFFF", // Set background color to white
        textAlign: "center",
        letterSpacing: 0.1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderColor: "#000000", // Set border color to black
        borderWidth: 1, // Set border width
        alignSelf: "center",
        width: "100%",
        maxWidth: 320,
        marginTop: 0,
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontFamily: "Roboto, sans-serif",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 20,
      },
    Button: {
        color: "#FFFFFF",
      textAlign: "center",
      letterSpacing: 0.1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      backgroundColor: "#00367C",
      alignSelf: "center",
      width: "100%",
      maxWidth: 320,
      marginTop: 0,
      marginBottom: 35,
      paddingVertical: 15,
      paddingHorizontal: 25,
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 14,
      lineHeight: 20,
    },
    buttonText: {
        color: "#FFF",
      },
    view12: {
      color: "#444",
      textAlign: "center",
      letterSpacing: 0.10000000149011612,
      alignSelf: "center",
      margin: "26px 0 10px",
      font: "700 14px/20px Roboto, sans-serif ",
    },
    googleButton: {
        color: "#FFF",
      textAlign: "center",
      letterSpacing: 0.1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      backgroundColor: "#00367C",
      alignSelf: "center",
      width: "100%",
      maxWidth: 320,
      marginTop: 0,
      marginBottom: 35,
      paddingVertical: 15,
      paddingHorizontal: 25,
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: 14,
      lineHeight: 20,
      },
      google: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 24,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "1",
      },
      googleText: {
        color: "#444",
        textAlign: "center",
        letterSpacing: 0.10000000149011612,
        margin: "auto 0",
        font: "700 14px/20px Roboto, sans-serif ",
      },
  });