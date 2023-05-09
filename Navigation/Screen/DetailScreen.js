import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import plants from '../../assets/const/plants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({navigation, route}) => {
  const plant = route.params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    for (let index = 0; index < plants.length; index++) {
      if (plants[index].id == plant) {
        await setProduct(plants[index]);
        return;
      }
    }
  };

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <SafeAreaView style= {{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style= {style.header}>
          <Ionicons name= 'arrow-back' size={28} onPress={() => navigation.goBack()} />
          <Ionicons name= 'cart' size={28} />
        </View>
              
        <View style={style.imageContainer}>
          <Image source= {plant.img} style={{resizeMode: 'contain', flex: 1}} />
        </View>

        <View style={style.detailsContainer}>
          <View style= {{marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end',}}>
            <View style= {style.line} />
              <Text style= {{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
            </View>
            <View style= {{marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
              <Text style= {{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
            <View style= {style.priceTag}>
              <Text style= {{ marginLeft: 15, color: 'white', fontWeight: 'bold', fontSize: 16,}}>
                ${plant.price}
              </Text>
            </View>
          </View>
          <View style= {{paddingHorizontal: 20, marginTop: 10}}>
            <Text style= {{fontSize: 20, fontWeight: 'bold'}}>
              About
            </Text>
            <Text style= {{color: 'grey', fontSize: 16, lineHeight: 22, marginTop: 10,}}>
              {plant.about}
            </Text>
            <View style= {{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',}}>
              <TouchableOpacity 
                onPress={() => (plant.isAvailable ? addToCart(plant.id) : null)}>
                <View style={plant.isAvailable ? style.buyBtn : style.buyBtnNotAvailable}>
                  <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                    {plant.isAvailable ? 'buy' : 'not available'}
                  </Text>
                </View>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailsContainer: {
        flex: 0.55,
        backgroundColor: 'white',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
      },
      line: {
        width: 25,
        height: 2,
        backgroundColor: 'black',
        marginBottom: 5,
        marginRight: 3,
      },
      borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
      },
      borderBtnText: {fontWeight: 'bold', fontSize: 28},
      buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: '#8BD272',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
      buyBtnNotAvailable: {
        width: 130,
        height: 50,
        backgroundColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
      priceTag: {
        backgroundColor: '#8BD272',
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
      },
});

export default DetailScreen;