import React from 'react';
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
} from 'react-native';
import { useRoute } from '@react-navigation/native';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  backUrl: string;
}

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const route = useRoute();
  const { movieData } = route.params as { movieData: Movie };

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.bg}
    >
      <ScrollView>
        <SafeAreaView style={styles.page}>
          <Image
            source={{ uri: movieData.backUrl }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>
              {movieData.title}
            </Text>
            <Text style={styles.tinyDetails}>
              Release Date: {movieData.releaseDate} | Language: {movieData.language}
            </Text>
            <Text style={styles.overview}>
              {movieData.overview}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: { 
    height: 400,
    borderRadius: 20, 
    resizeMode: 'cover',
  },
  page: {
    flex: 1,
    marginTop: 70,
    marginBottom: 50,
  },
  bg: {
    zIndex: -1,
    flex: 1,
    resizeMode: 'crop',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
  },
  tinyDetails: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  overview: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
});

export default DetailScreen;

// import { 
//     View, 
//     StyleSheet, 
//     FlatList, 
//     Image, 
//     useWindowDimensions, 
//     TextInput, 
//     ScrollView,
//     Text, 
//     SafeAreaView,
//     ImageBackground,
// } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// export default function DetailScreen() {

//   const route = useRoute();
//   const {movieData} = route.params;

//   return (
//       <ImageBackground
//           source={require('../../assets/images/bg.jpg')}
//           style={styles.bg}
//       >
//         <ScrollView>
//         <SafeAreaView style={styles.page}>
//           <Image
//               source={{ uri: movieData.backUrl }}
//               style={styles.image}
//           />
//           <View>
              
//               <Text style={styles.title}>
//                 {movieData.title}
//               </Text>
              
//               <Text style={styles.tinyDetails}>
//                 Release Date: {movieData.releaseDate} | Language: {movieData.language}
//               </Text>

//               <Text style={styles.overview}>
//                 {movieData.overview}
//               </Text>

//           </View>
//         </SafeAreaView>
//         </ScrollView>
//       </ImageBackground>
//   )
// }

// const styles = StyleSheet.create({
//     image: { 
//         height: 400,
//         borderRadius: 20, 
//         resizeMode: 'cover',
//     },
//     page: {
//       flex: 1,
//       marginTop: 70,
//       marginBottom: 50,
//     },
//     bg: {
//       zIndex: -1,
//       flex: 1,
//       resizeMode: 'crop',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 24,
//       margin: 10,
//     },
//     tinyDetails: {
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 16,
//       marginLeft: 10,
//     },
//     overview: {
//       color: 'white',
//       fontSize: 20,
//       margin: 10,
//     }

// });