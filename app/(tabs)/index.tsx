import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '@/components/card'

const index = () => {
  return (
    <View style={styles.container}>
<View>

      <View style={styles.rectangle}>
      <View style={styles.Box} />

          <View style={styles.rectangle1} >
            <Text style={styles.txt}>Ali bder</Text>
            <Text style={styles.txt1}> 12.2005</Text>

        </View>
        </View>

        <Text style={styles.txt3}> my first ui</Text>

        </View>


<Card name='ali' years='23' points='100'/>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   alignItems:'center',
   justifyContent:"center"
  },
  rectangle: {
borderWidth:1,
padding:10,
flexDirection:'row',
height:150,
width:300,
  },
  rectangle1: {

marginLeft:50  },
  Box: {
    backgroundColor: 'black',
  width:100,
    height: 100,
  },
  txt: {
    fontSize: 30,
  },
  txt1: {
    color: 'black',
    fontSize: 30,
  },
  txt3: {
    color: 'black',
    fontSize: 40,
    textAlign:'center'

   
    
  }


})