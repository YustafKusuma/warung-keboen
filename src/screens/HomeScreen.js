import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, Dimensions} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plants from '../../assets/const/plants';
import { useState, useEffect } from 'react';
//import { collection, getDocs, getFirestore } from "firebase/firestore";

const width = Dimensions.get('window').width / 2 - 30;
//const db = getFirestore()

const HomeScreen = ({navigation}) => {
    const [categoryIndex, setCategoryIndex] = useState(0);
//    const [products, setProducts] = useState([]);
//    const productsRef =  getDocs(collection, (db, 'Products'));


/*    useEffect( async () => {
      productsRef
      .onSnapshot(
        QuerySnapshot => {
          const products = []
          QuerySnapshot.forEach((doc) => {
            const { like, img, name, price } = doc.data()
            products.push({
              id: doc.id,
              like,
              img,
              name,
              price
            })
          })
          setProducts(products)
        }
      )
    }, [])
*/
    const categories = ['POPULAR', 'PLANT', 'SEED', 'TOOL'];
    const CategoryList = () => {
        return (
        <View style={style.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity
                key= {index}
                activeOpacity={0.8}
                onPress= {() => setCategoryIndex(index)}>
                    <Text 
                        style= {[
                            style.categoryText,
                            categoryIndex === index && style.categoryTextSelected,
                        ]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Ionicons
                name="heart"
                size={18}
                color={plant.like ? 'red' : 'white'}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              Rp.{plant.price}
            </Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  };

return (
    <SafeAreaView style={{flex: 1, paddingHorizontal:20, backgroundColor: 'white'}}>
        <View style={style.header}>
            <View>
                <Image source={require('../../assets/title.png')} style={{ width: 360, height: 80 , paddingTop:100, flex: 1, resizeMode: 'contain'}}/>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection:"row"}}>
            <View style= {style.searchContainer}>
                <Ionicons name= "search-outline" size= {28} style= {{marginLeft :20}}/>
                <TextInput placeholder='Search' style= {style.input}/>
            </View>
        </View>
        <CategoryList/>
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
            return <Card plant={item} />;
        }}
        />
        </SafeAreaView>  
    );
};

const style = StyleSheet.create({
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryContainer: {
       flexDirection: 'row',
       marginTop: 30,
       marginBottom: 20,
       paddingHorizontal: 8,
       justifyContent: 'space-between'
    },
    categoryText:{
        fontSize: 16,
        color: '#676767',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: '#8BD272',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#8BD272'
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#676767',
        flex: 1
    },
    card: {
        height: 225,
        backgroundColor: '#F5F5F5',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
      },
});
export default HomeScreen;