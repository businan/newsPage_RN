// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
// } from 'react-native';

// const App = () => {
//   return (
//     <>
//       <StatusBar/>
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Text style={styles.header}>News</Text>
//           <View style={styles.body}>
//             <Image
//             resizeMode={'contain'}
//             style={styles.image}
//             source = {require('./img/news_1.jpg')}
//             />
//             <Text style={styles.title}>Scientists explain sudden deaths of 350 elephants</Text>
//             <Text style={styles.description}>The mystery surrounding hundreds of sudden elephant 
//               deaths in Botswana seems to have been solved and the 
//               findings bring an end to months of speculation on why 
//               at least 330 elephants were found dead in the northwestern
//                region of the Southern African country earlier this year.
//             </Text>
//           </View>
//           <View style={styles.body}>
//             <Image
//             resizeMode={'contain'}
//             style={styles.image}
//             source = {require('./img/news_2.jpg')}
//             />
//             <Text style={styles.title}>UN; South Sudan has healed little since civil war</Text>
//             <Text style={styles.description}>South Sudan
//              has made no concrete steps toward national healing 
//              more than two years after the end of a civil war 
//              that killed nearly 400,000 people and sent more than 
//              2 million people fleeing, a new United Nations report says.
//             </Text>
//           </View>
//           <View style={styles.body}>
//             <Image
//             resizeMode={'contain'}
//             style={styles.image}
//             source = {require('./img/news_3.jpg')}
//             />
//             <Text style={styles.title}>UK's Johnson to sink millions into wind power</Text>
//             <Text style={styles.description}>Prime Minister Boris Johnson 
//             pledged Tuesday that every home in Britain will be powered 
//             by wind energy in a decade as the government kick-starts a 
//             “green industrial revolution’’ that will create hundreds of 
//             thousands of jobs.
//             </Text>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     padding:10,
//   },
  
//   body: {
    
//     borderWidth: 1,
//     borderRadius:10,
//     padding:10,
//     marginBottom:10,
//   },
//   header:{
//     fontSize:40,
//     fontWeight:"bold",
//     margin:10,
//   },
//   title:{
//     fontSize:20,
//     fontWeight:'700',
//      width: '90%', 
//      alignSelf:'center',
//   },
//   image:{ 
//     width: '100%', 
//     height: 200, 
//     borderRadius:10, 
//     marginTop:10,
//     marginBottom:10,
//   },
//   description:{
//     width: '90%', 
//     alignSelf:'center'
//   },
 
// });

// export default App;


// With array -------


import React, { Component } from 'react';
 
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
 
export default class App extends Component {
 
  constructor() {
 
    super();
 
    this.tmpArray = [
 
      { title: "Scientists explain sudden deaths of 350 elephants", 
      desc: "The mystery surrounding hundreds of sudden elephant deaths in Botswana seems to have been solved and the findings bring an end to months of speculation on why at least 330 elephants were found dead in the northwestern region of the Southern African country earlier this year." , 
      class: require("./img/news_1.jpg") },
      { title: "UN; South Sudan has healed little since civil war", 
      desc: "South Sudan has made no concrete steps toward national healing more than two years after the end of a civil war that killed nearly 400,000 people and sent more than 2 million people fleeing, a new United Nations report says." , 
      class: require("./img/news_2.jpg") },
      { title: "UK's Johnson to sink millions into wind power", 
      desc: "Prime Minister Boris Johnson pledged Tuesday that every home in Britain will be powered by wind energy in a decade as the government kick-starts a “green industrial revolution’’ that will create hundreds of thousands of jobs." , 
      class: require("./img/news_3.jpg") },
      
    ];
  }
  render() {
 
    return (
      <View>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.header}>News</Text>
          {
            this.tmpArray.map((item) => (
 
              <View style={styles.body}>
                <Image
                resizeMode={'contain'}
                style={styles.image}
                source={item.class}
                />
                <Text style={styles.title} > {item.title} </Text>
                <Text style={styles.description} > {item.desc} </Text>
              </View>
 
            ))
          }
 
        </ScrollView>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  scrollView: {
    padding:10,
  },
  
  body: {
    
    borderWidth: 1,
    borderRadius:10,
    padding:10,
    marginBottom:10,
  },
  header:{
    fontSize:40,
    fontWeight:"bold",
    margin:10,
  },
  title:{
    fontSize:20,
    fontWeight:'700',
     width: '90%', 
     alignSelf:'center',
  },
  image:{ 
    width: '100%', 
    height: 200, 
    borderRadius:10, 
    marginTop:10,
    marginBottom:10,
  },
  description:{
    width: '90%', 
    alignSelf:'center'
  },
 
});