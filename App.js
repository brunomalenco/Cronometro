import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      inicio: 'Começar'
    }

    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
    
  }
  vai(){

    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
      this.setState({
        inicio: "Começar"
      })

    }else{
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
      this.setState({
        inicio: "Parar"
      })
    }
  }


  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      numero: 0,
      inicio: "Começar"
    })
  }

  
  render(){
    return(
      <View style={styles.container}>

        <Image source={require('./src/img/cronometro.png')} style={styles.cronometro}></Image>
        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.inicio}</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <StatusBar style='dark'/>
      </View>

      
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a6db0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cronometro:{
    width: 256,
    height: 256
  },

  timer:{
    marginTop:-150,
    color:'#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection:'row',
    marginTop: 75,
    height: 40
  },

  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 15
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a6db0'
  }
});
