import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function LoginScreen(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Validasi dan penanganan login akan ditambahkan di sini.
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.header}>Ayo sign in sekarang dan memulai memasak!!!</Text>
      <TouchableOpacity style={styles.googleButton} onPress={() => { }}>
        <Text style={styles.googleButtonText}>
          <Image
            source={require('../assets/images/Google.png')}
            style={styles.logo}
            />Sign In with Google
        </Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>atau sign in menggunakan email</Text>
        <View style={styles.separatorLine} />
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="masukan email"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="masukan password "
        secureTextEntry={!passwordVisible}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <View style={styles.passwordIcon}>
          <Text style={styles.passwordIconText}>
            <svg width="15" height="10" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FBD532" d="M14.9569 4.7975C14.935 4.74813 14.4056 3.57375 13.2287 2.39687C11.6606 0.82875 9.67999 0 7.49999 0C5.31999 0 3.33937 0.82875 1.77124 2.39687C0.594369 3.57375 0.062494 4.75 0.043119 4.7975C0.0146897 4.86144 0 4.93064 0 5.00062C0 5.0706 0.0146897 5.1398 0.043119 5.20375C0.064994 5.25312 0.594369 6.42688 1.77124 7.60375C3.33937 9.17125 5.31999 10 7.49999 10C9.67999 10 11.6606 9.17125 13.2287 7.60375C14.4056 6.42688 14.935 5.25312 14.9569 5.20375C14.9853 5.1398 15 5.0706 15 5.00062C15 4.93064 14.9853 4.86144 14.9569 4.7975ZM7.49999 7.5C7.00554 7.5 6.52219 7.35338 6.11107 7.07867C5.69995 6.80397 5.37951 6.41352 5.1903 5.95671C5.00108 5.49989 4.95157 4.99723 5.04803 4.51227C5.14449 4.02732 5.3826 3.58186 5.73223 3.23223C6.08186 2.8826 6.52732 2.6445 7.01227 2.54804C7.49722 2.45157 7.99989 2.50108 8.4567 2.6903C8.91352 2.87952 9.30396 3.19995 9.57867 3.61107C9.85337 4.0222 9.99999 4.50555 9.99999 5C9.99999 5.66304 9.7366 6.29893 9.26776 6.76777C8.79892 7.23661 8.16304 7.5 7.49999 7.5Z" />
            </svg> <span>  </span>{passwordVisible ? 'Hide Password' : 'Show Password'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinButton} onPress={handleLogin}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.register}>Tidak mempunyai akun? <Text style={{ color: '#FBD532' }}>Buat akun</Text></Text>
</View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    alignSelf: 'stretch', // Kontainer mengikuti tinggi konten
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 25, 
  },
  register: {
    width: 300,
    fontSize: 10,
    marginVertical: 5,
    fontFamily: 'Segoe UI',
  },
  logo: {
    width: 17,
    height: 17,
    marginRight: 10,
    marginBottom: -2,
  },
  signinButton: {
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#FBD532',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  signinText: {
    fontFamily: 'Segoe UI',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  googleButton: {
    padding: 10,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.75,
  },
  googleButtonText: {
    fontFamily: 'Segoe UI',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  label: {
    width: 300,
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    fontFamily: 'Segoe UI',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    borderStyle: 'solid',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 10,
    color: 'black',
  },
  passwordIcon: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Segoe UI',
    width: 300,
  },
  passwordIconText: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Segoe UI',
    justifyContent: 'flex-end',
  },
});

