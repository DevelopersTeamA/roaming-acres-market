import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ShopByCategoryProps {
  text: string;
  price: number;
  iconState?: 'primary' | 'secondary';
  source?: {uri : string};
}

export default function ShopByCategory({ text, price, iconState = 'primary', source }: ShopByCategoryProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Image with icon container */}
      <View style={styles.imageContainer}>
        <Image
          source={source || require("../assets/images/chicken1.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Top-right icon positioned within image */}
        <TouchableOpacity onPress={()=> router.push('/wishlist')} style={[
          styles.iconContainer,
          iconState === 'primary' ? styles.primaryIcon : styles.secondaryIcon
        ]}>
          <Ionicons 
        name="heart-outline" 
        size={20}
        color={iconState === 'primary' ? 'white' : '#008080'}
          />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <TouchableOpacity style={styles.button} onPress={()=> router.push('/inventory-product-details')}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%', 
    backgroundColor: "#fff",
    borderRadius: 7,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 120, 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  price: {
    fontSize: 14,
    color: '#8391A1',
    marginTop: 4,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: '#008080',
    textAlign: 'center',
    fontWeight: '600'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  primaryIcon: {
    backgroundColor: '#008080',
  },
  secondaryIcon: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#008080',
    borderTopRightRadius:7
  }
});