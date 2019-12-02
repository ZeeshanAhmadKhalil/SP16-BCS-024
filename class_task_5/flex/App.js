import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { green, black } from 'ansi-colors';


export class another_task extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:"column"}}>
        <View style={{flex:1}}></View>
        <View style={{flex:2,backgroundColor:"black",flexDirection:"row"}}>
          <View style={{flex:4,flexDirection:"row"}}>
            <View style={{flex:1,flexDirection:"column"}}>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
            </View>
            <View style={{flex:1,flexDirection:"column"}}>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
            </View>
            <View style={{flex:1,flexDirection:"column"}}>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
              <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>1</Text></View>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:"grey",flexDirection:"column"}}>
            <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>+</Text></View>
            <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>-</Text></View>
            <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>/</Text></View>
            <View style={{flex:1,alignItems:"center"}}><Text style={{color:"white",fontSize:30,marginTop:30}}>*</Text></View>
          </View>
        </View>
      </View>
    )
  }
}
export default class App extends Component{
  constructor(){
    super()
    this.state={value:"edit me"}
    this.state={value1:"edit me"}
  }
  change_text=(new_text)=>{
    this.setState({value:new_text})
  }
  render(){
    return(
      <View style={styles.main_view}>
        <View style={styles.header}>
          <Text style={styles.text}>HEADER</Text>
        </View>
        <View style={styles.middle_view}>
          <View style={styles.left}>
            <Text style={styles.text}>LEFT</Text>
          </View>
          <View style={styles.center_view}>
            <View style={styles.title}>
              <Text style={styles.text}>TITLE</Text>
            </View>
            <View style={styles.Image}>
              <Text style={styles.text}>IMAGE</Text>
            </View>
            <View style={styles.content}>
              <TextInput style={styles.input} defaultValue={this.state.value} onChangeText={this.change_text}/>
              <Text>{this.state.value}</Text>
              <TextInput style={styles.input} defaultValue={this.state.value1} onChangeText={(new_text)=>{this.setState({value1:new_text})}}/>
              <Text>{this.state.value1}</Text>
              {/* <Button title="Click me" onPress={}/> */}
            </View>
           </View>
          <View style={styles.right}>
            <Text style={styles.text}>RIGHT</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>FOOTER</Text>
        </View>
      </View>

        //  ANOTHER TASK of calculator

      
    )
  }
}

const styles=StyleSheet.create({
  main_view:{
    backgroundColor:"#b1b7db",
    flex:1,
    flexDirection:"column",
  },
  middle_view:{
    backgroundColor:"yellow",
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  center_view:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"purple"
  },
  header:{
    backgroundColor:"black",
    height:50,
    alignSelf:"stretch" //-------->default value, if we dont specify here...will still work
  },
  footer:{
    backgroundColor:"blue",
    height:50
  },
  left:{
    backgroundColor:"green",
    width:60,
    marginRight:"auto"
    // alignSelf:"flex-end",
    // flexGrow:1
  },
  right:{
    backgroundColor:"red",
    // justifyContent:"flex-end",
    width:60,
    // flexGrow:1
  },
  title:{
    backgroundColor:"pink",
    flex:1
  },
  Image:{
    backgroundColor:"orange",
    flex:2
  },
  content:{
    backgroundColor:"white",
    flex:8
  },
  text:{
    color:"white",
    textAlign:"center",
    fontSize:20,
  },
  input:{
    margin:10,
    marginTop:0,
    height:40,
    backgroundColor:"#dcebef",
    borderColor:"#196ac1",
    borderWidth:2,
    borderRadius:5,
    fontSize:18,
    color:"black"
  },

  //    ANOTHER TASK of calculator
  body:{
    flex:1
  }

})