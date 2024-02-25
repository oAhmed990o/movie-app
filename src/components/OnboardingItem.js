// import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
// import React from 'react';

// export default OnboardingItem = ({item, index, slides}) => {

//     const {width} = useWindowDimensions();

//     const itemWidth = width;
//     const imageWidth = itemWidth * 0.5;
//     const getPreviousIndex = (index) => (index - 1 > 0 ? index - 1 : index);
//     const getNextIndex = (index, length) => (index + 1 < length ? index + 1 : index);

//   return (
//     <View style={[styles.container, {width: itemWidth}]}>
//       <Image source={slides[getPreviousIndex(index, slides.length)].image} style={[styles.image, { width: imageWidth, resizeMode: 'contain' }]} />
//       <Image source={item.image} style={[styles.image, {width: imageWidth, resizeMode: 'contain', margin: 10}]}/>
//       <Image source={slides[getNextIndex(index, slides.length)].image} style={[styles.image, { width: imageWidth, resizeMode: 'contain' }]} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     image: {
//         resizeMode: 'cover'
//     },

// });