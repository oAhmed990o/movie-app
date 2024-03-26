import React, {useState} from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  backUrl: string;
}

export default function LoginScreen() {
  const [text, setText] = useState('');
  const [password, setPass] = useState('');
  const [confirmPassword, setConfirmPass] = useState('');
  
  const handleChangeText = (inputText: string) => {
      setText(inputText);  
    }

  const handleChangePass = (inputText: string) => {
    setPass(inputText);
    }

  const handleChangeConfirmPass = (inputText: string) => {
    setConfirmPass(inputText);
    }

  const navigation: any = useNavigation();
  
  function loginPress() {
    navigation.navigate('LS'); 
  }

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.bg}
    >
    <Text style={styles.textLogo}>
    🎥
    </Text>
      
      <TextInput
        style={styles.inputBox}
        placeholder='username'
        placeholderTextColor={'gray'}
        onChangeText={handleChangeText}
        value={text}
      />
      
      <TextInput
        style={styles.inputBox}
        placeholder='password'
        placeholderTextColor={'gray'}
        onChangeText={handleChangePass}
        secureTextEntry={true}
        value={password}
      />

      <TextInput
        style={styles.inputBox}
        placeholder='confirm password'
        placeholderTextColor={'gray'}
        onChangeText={handleChangeConfirmPass}
        secureTextEntry={true}
        value={confirmPassword}
      />
      
      <TouchableOpacity
        style={styles.button}
        // onPress={}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      <View style={styles.container}>
        <Text style={{color: 'lightgrey'}}>Already have an account? </Text>
          <TouchableOpacity
            onPress={loginPress}
          >
            <Text style={{color: 'lightgreen'}}>
              Login here
            </Text> 
          </TouchableOpacity>
      </View>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    zIndex: -1,
    flex: 1,
    resizeMode: 'crop',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    width: 450,
    padding: 15, 
    borderColor: '#202020', 
    backgroundColor: '#353535',
    color: 'white',
    borderWidth: 2, 
    borderRadius: 20, 
    marginVertical: 15,
    marginHorizontal: 15,
    fontSize: 24,
  },
  button: {
    minWidth: 150,
    minHeight: 60,
    backgroundColor: '#ff675c',
    borderWidth: 2, 
    borderRadius: 20, 
    marginVertical: 15,
    marginHorizontal: 15,
  },
  buttonText: {
    padding: 15, 
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textLogo: {
    fontSize: 200,
  },
});