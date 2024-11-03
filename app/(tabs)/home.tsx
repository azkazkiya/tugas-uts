import { StyleSheet } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Link} from 'expo-router';
import React, { useState } from 'react';
import Menu from '../../database/menu';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOScreen() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Anda dapat menggunakan nilai searchText untuk menjalankan logika pencarian atau tindakan yang sesuai
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <ImageBackground source={require('../../assets/images/ayam.png')} style={styles.bgtop}>
            <Text style={styles.header}>YUK CARI RESEP<br />MASAKAN KAMU HARI INI!</Text>
            <View style={styles.searchBar}>
              <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                placeholder="Ketik disini"
                value={searchText}
                onChangeText={text => setSearchText(text)}
              />
            </View>
            <View style={styles.separator} />
          </ImageBackground>
        </View>
        <Link href="/modal" asChild>
        <FlatList
          data={Menu}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recipeItem}>
              <ImageBackground source={item.image} style={styles.recipeBackground}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        </Link>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
  },
  separator: {
    height: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: 'white',
    fontFamily: 'Segoe UI',
  },
  top: {
    width: '100%',
    height: 300,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  bgtop: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginBottom: 50,
  },
  searchBar: {
    backgroundColor: 'white',
    height: 23,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    top: 0,
    zIndex: 1,
  },
  textInput: {
    height: 23,
    width: 250,
    fontSize: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  recipeItem: {
    flex: 1,
    backgroundColor: 'gray',
    margin: 5,
    height: 80,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  recipeBackground: {
    flex: 1,
    width: '100%',
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Segoe UI',

  },
  searchButton: {
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'gray',
    fontSize: 16,
  },
});
