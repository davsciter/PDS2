import { Component, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword } from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class Login extends React.Component {

  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center',}}>
        <Text style={{fontSize: 35, fontFamily:'logo-font', marginVertical: 60}}>InstaClone</Text>
        <View style={{marginTop: 100}}>
          <View style={{width:screenWidth*0.9, marginTop: 10,}}>
            <Text style={{left: 15}}>Email</Text>
          </View>

          <TextInput style={{height: 50, width:screenWidth*0.9, color:'black', paddingHorizontal:20, margin:0, borderRadius: 10, borderColor:'grey', borderWidth:1 }}
          placeholderTextColor={'grey'}
          placeholder={'example@example.com'}
          //value={this.props.user.email}
          //onChangeText={input=>this.props.updateEmail(input)}
          value={this.props.user.email}
          onChangeText={input=>this.props.updateEmail(input)}
          />

          <View style={{width:screenWidth*0.9, marginTop: 10,}}>
            <Text style={{left: 15}}>Senha</Text>
          </View>
          
          <TextInput style={{height: 50, width:screenWidth*0.9,  color:'black', paddingHorizontal:20, margin:0, borderRadius: 10, borderColor:'grey', borderWidth:1 }}
          placeholderTextColor={'grey'}
          placeholder={'Senha123'}
          //value={this.props.user.password}
          
          //onChangeText={input=>this.props.updatePassword(input)}
          onChangeText={input=>this.props.updatePassword(input)}
          value={this.props.user.password}
          
          secureTextEntry={true}
          />

          
        </View>
        <View style={{width: screenWidth, justifyContent:'center', alignItems:'center', margin:30}}>
          <TouchableOpacity style={{width:screenWidth*0.6, height:50, borderRadius: 30, backgroundColor:'#0095f6', justifyContent:'center', alignItems:'center'}}
          onPress={() => alert(this.props.user.email)}>
            <Text style={{color: 'white', fontWeight:'bold', fontSize:20  }}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center', flexDirection:'row', margin:10}}
          onPress={()=> this.props.navigation.navigate('Signup')}>
            <Text style={{fontSize: 18}}>Não tem uma conta?</Text> 
            <Text style={{fontSize: 18, fontWeight:'bold', color:'#0095f6'}}> Signup!</Text>
          </TouchableOpacity>
          <View style={{position: 'absolute', top:250, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:18}}>from</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}> EAD Locurage</Text>
        </View>
        </View>

     

        
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
    
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login)