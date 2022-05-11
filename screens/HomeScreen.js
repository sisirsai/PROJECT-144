import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      article_detail: {},
    };
  }

  get_article = () => {
    var url = 'http://127.0.0.1:5000/get-article'
    axios.get(url).then(response => {
      let details = response.data.data
      console.log(details)
      this.setState({
        article_detail: details
      })
    })
      .catch(error => {
        console.log(error.message)
      })
  }


  like_article = () => {
    var url = 'http://127.0.0.1:5000/like-article'
    axios
    .get(url)
    .then(response => {
      this.get_article()
      })
    .catch(error => {
        console.log(error.message)
    })
  }

  dislike_article = () => {
    var url = 'http://127.0.0.1:5000/dislike-article'
    axios
    .get(url)
    .then(response => {
      this.get_article()
      })
    .catch(error => {
        console.log(error.message)
    })
  }

  componentDidMount() {
    this.get_article()
  }

  render() {
    var { article_detail } = this.state
    var title = article_detail[12]
    var text = article_detail[13]
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            centerComponent={{ text: "ARTICLE RECOMMENDATION", style: styles.headerTitle }}
            backgroundColor={"black"}
            containerStyle={{ flex: 1 }} />
        </View>
        <View style={styles.subContainer}>
        <Text style={styles.title_text}>{title}</Text>
          <View style={styles.subTopContainer}>
            <Text style={styles.article_text}>{text}</Text>
          </View>
          <View style={styles.subBottomContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center' , marginTop:100}}>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              <TouchableOpacity style = {styles.button} onPress={this.likedArticle}>
                    <Text style={styles.buttonText}>👍</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={this.unlikedArticle}>
                    <Text style={styles.buttonText}>👎</Text>
                </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: { flex: 1 , backgroundColor:'lightyellow'},
  headerContainer: { flex: 0.1 },
  headerTitle: { color: "lightyellow", fontWeight: "bold", fontSize: RFValue(18), fontFamily: 'serif' },
  subContainer: { flex: 0.9 },
  subTopContainer: { flex: 0.4, justifyContent: "center", alignItems: "center", marginTop:170  , margin:30},
  subBottomContainer:{ flex: 0.6 },
  button: { width: RFValue(25), height: RFValue(25), borderRadius: RFValue(50), justifyContent: "center", alignItems: "center", borderWidth: 1, alignSelf:'right' , margin:10},
  buttonText: { fontSize: RFValue(15), fontWeight: "bold" },
  article_text: { fontSize: 35, fontFamily: 'sans-serif' , color:'brown'},
  title_text:{ fontSize:40 , fontFamily:'serif' , color:'darkbrown'  , textAlign:'center'}
})