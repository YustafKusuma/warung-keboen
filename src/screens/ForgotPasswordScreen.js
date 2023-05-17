import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';
import { Colors, Fonts, Images } from '../contants';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Display } from '../utils';


const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
        />
        <Separator height={StatusBar.currentHeight}/>
        <View style = {styles.headerContainer}>
        <Ionicons name = "chevron-back-outline" 
        size={35} color = {Colors.DEFAULT_BLACK}
        onPress = {() => navigation.goBack()} />
        <Text style = {styles.headerTitle} >Forget Password </Text>
        </View>
        <Text style = {styles.title}>Forget Password</Text>
        <Text style = {styles.content}>Silahkan masukkan email terdaftar supaya kami dapat membantu memulihkan akun kamu</Text>
        <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_BLACK,
      lineHeight: 20 * 1.4,
      width: Display.setWidth(80),
      textAlign: 'center',
    },
    title: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_GREEN,
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom : 10,
      marginHorizontal: 20,
    },
    content: {
      fontSize: 15,
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_BLACK,
      marginTop: 10,
      marginBottom : 20,
      marginHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
      },
      inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputText: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlignVertical: 'center',
        padding: 1,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
      },
      signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
});

export default ForgotPasswordScreen;