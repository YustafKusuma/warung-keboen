import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import plants from '../../assets/const/plants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShoppingCartScreen = ({navigation}) => {
    const [product, setProduct] = useState();
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getData();
        });
    
        return unsubscribe;
      }, [navigation]);

    const getData = async () => {
        let items = await AsyncStorage.getItem('cartItems');
        items = JSON.parse(items);
        let productData = [];
        if (items) {
            plants.forEach(data => {
                if (items.includes(data.id)) {
                    productData.push(data);
                    return;
                }
            });
            setProduct(productData);
            getTotal(productData);
        } else {
            setProduct(false);
            getTotal(false);
        }
    };

    const getTotal = productData => {
        let total = 0;
        for (let index = 0; index < productData.length; index++) {
            let price = productData[index].price;
            total = total + price;
        }
        setTotal(total);
    };

    const removeItem = async id => {
        let itemArray = await AsyncStorage.getItem('cartItems');
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
            let array = itemArray;
            for (let index= 0; index < array.length; index++) {
                if (array[index] == id) {
                    array.splice(index, 1);
                }

                await AsyncStorage.setItem('cartItems', JSON.stringify(array));
                getData();
            }
        }
    };

    const checkOut = async () => {
        try {
          await AsyncStorage.removeItem('cartItems');
        } catch (error) {
          return error;
        }
    
        ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
    
        navigation.navigate('Home');
    };

    const renderProducts = (data, index) => {
        return (
          <TouchableOpacity
            key={data.key}
            onPress={() => navigation.navigate('Details', {productID: data.id})}
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                marginRight: 22,
              }}>
              <Image
                source={data.img}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: 'black',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  {data.name}
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    &#36;{data.price}
                  </Text>
                  <Text>
                    (~&#36;
                    {data.price + data.price / 20})
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#676767',
                      opacity: 0.5,
                    }}>
                    <Ionicons
                      name="remove"
                      style={{
                        fontSize: 16,
                        color: 'black',
                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#676767',
                      opacity: 0.5,
                    }}>
                    <Ionicons
                      name="add"
                      style={{
                        fontSize: 16,
                        color: 'black',
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeItem(data.id)}>
                  <Ionicons
                    name="trash"
                    style={{
                      fontSize: 16,
                      color: 'black',
                      backgroundColor: 'white',
                      padding: 8,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      };


    

   return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              style={{
                fontSize: 18,
                color: '#8BD272',
                padding: 12,
                backgroundColor: 'white',
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: '#8BD272',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Ionicons
                    name="archive"
                    style={{
                      fontSize: 18,
                      color: '#8BD272',
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    2 Petre Melikishvili St.
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                style={{fontSize: 22, color: 'black'}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: '#8BD272',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: '#8BD272',
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#8BD272',
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#8BD272',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                style={{fontSize: 22, color: 'black'}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                &#36;{total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                &#36;{total/20}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'black',
                }}>
                &#36;{total + total / 20}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: '#8BD272',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: 'white',
              textTransform: 'uppercase',
            }}>
            CHECKOUT (&#36;{total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCartScreen;