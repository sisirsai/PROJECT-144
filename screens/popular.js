import React, { Component } from "react"; 
import { View, StyleSheet, FlatList } from "react-native"; 
import { Card } from "react-native-elements"; 
import axios from "axios"; 
import { RFValue } from "react-native-responsive-fontsize";

export default class Recommended extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        this.get_data()
    }

    get_data=()=>{
        const url = 'http://127.0.0.1:5000/popular-articles'
        axios.get(url).then(response => {
            this.setState({
                data: response.data.data
            })
        })
            .catch(error => {
                console.log(error.message)
            })
    }

    keyExtractor = (item,index) => index.toString()
    renderItems=({item,index})=>{
        var title = item[12]
        var text = item[13]
        return(
            <Card>        
                <View style={styles.cardContainer}>
                   <Text style={styles.title_text}>{title}</Text>
                    <View style={styles.articleContainer}>
                       <Text style={styles.article_text}>{text}</Text>
                     </View>
                </View>
            </Card>
        )
    }
    render(){
        const {data} = this.state
        return(
            <View style={{ flex: 1 , backgroundColor:'lightyellow'}}>
                <FlatList
                    data = {data}
                    renderItem = {this.renderItems}
                    keyExtractor = {this.keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  cardContainer: { flex: 0.9 },
  articleContainer: { flex: 0.4, justifyContent: "center", alignItems: "center", marginTop:RFValue(11) , margin:RFValue(30)},
  article_text: { fontSize: RFValue(35), fontFamily: 'sans-serif' , color:'brown'},
  title_text:{ fontSize:RFValue(40) , fontFamily:'serif' , color:'darkbrown'  , textAlign:'center'}
})