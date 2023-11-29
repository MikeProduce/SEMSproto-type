
import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";




export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/33561ea4-446e-428b-aed3-bbb0947dfb7a?",
          }}
          style={styles.image}
        />
         <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('sign-in-page')}
         >
        <Text style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>
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
      marginTop: 150,
      width: "100%",
      maxWidth: 255,
      flexDirection: "column",
      aspectRatio: "1.26",
    },
    buttonContainer: {
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
    buttonText: {
      color: "#FFF",
    },
  });
  