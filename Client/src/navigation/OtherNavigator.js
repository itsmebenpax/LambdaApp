import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import {connect} from 'react-redux'
import {switch_to_event_screen,switch_to_home_screen,switch_to_member_card_screen,switch_to_member_info_screen} from '../actions'

class OtherNavigator extends Component {



    render() {
        return (
            <View style={{
                
                flexDirection: 'column',
                height:70

            }}>

               
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'gray',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, 
                        width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    opacity:0.7


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.props.dispatch(switch_to_home_screen())}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}

                                onPress={()=>{Alert.alert("Hello")}}
                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Hjem</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.dispatch(switch_to_member_card_screen())}
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'https://image.flaticon.com/icons/png/512/88/88591.png' }}
                                onPress={() => { Alert.alert("click") }}
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center' }}>Medlems kort </Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',
                        }}>

                            <TouchableOpacity
                                onPress={() => this.props.dispatch(switch_to_member_info_screen())}
                            >
                                <Image
                                    source={{ uri: 'https://www.pinclipart.com/picdir/big/11-114024_videos-to-business-personal-information-icon-png-clipart.png' }}
                                    onPress={() => { Alert.alert("click") }}
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Medlems info </Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => { this.props.dispatch(switch_to_event_screen())}}
                            >
                                <Image
                                    source={{ uri: 'https://www.freeiconspng.com/uploads/calendar-date-event-month-icon--19.png' }}

                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Events </Text>
                           
                        </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }

});

export default connect()(OtherNavigator);