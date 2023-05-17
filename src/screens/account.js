import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Image, TouchableOpacity,ImageBackground,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <ImageBackground
        source={{
          uri: 'https://pengacaramuslim.com/wp-content/uploads/2016/03/Tanaman-teh-hijau-untuk-melangsingkan-tubuh.jpg',
        }}
        style={{flex: 0.5}}
        resizeMode={'cover'}>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#FFFFFF',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#212121',
            }}>
            RAHMA WATI
          </Text>
          <View style={{marginLeft: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="mobile-alt" size={25} color="#41BB00" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>+628-3138-800-039</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="map-marker-alt" size={25} color="#41BB00" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Bali</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="envelope" size={25} color="#41BB00" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>
                  rahma.120140184@student.itera.ac.id
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="twitter" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;