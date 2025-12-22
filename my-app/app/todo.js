//aplikasi CRUD todo list todo.tsx
import React from 'react'
import { StyleSheet, Appearance, Platform, View, ScrollView, FlatList, Text, TextInput, Pressable} from "react-native";
import { Colors } from '@/constants/theme';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Octicons } from '@expo/vector-icons';

import { data } from '@/data/todo.js'
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '@/context/themeContext.js';
import AsyncStorage from "@react-native-async-storage/async-storage"; // ini library untuk nyimpen data supaya pas reload datanya g ilang

import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import Animated, { LinearTransition } from 'react-native-reanimated'; //animasi dasar react native


const todo = () => {
    const   {skemaWarna, setSkemaWarna, tema} = useContext(ThemeContext)

    
    const [loaded, error] = useFonts({
        Inter_500Medium
    })


    /* data list todo ditampung di array dlu dan di sort berdasarkan id terbesar ke kecil */
    const [todos, setTodos] = useState([]) 
    const [text, setText] = useState('') /* untuk nampung input text */

    useEffect(() => { //ini untuk loading data ke dlm app kt
    const ambilData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("TodoApp")
            const storageTodos = jsonValue ? JSON.parse(jsonValue) : null

            if (storageTodos && storageTodos.length > 0) {
                setTodos(storageTodos.sort((a, b) => b.id - a.id)) // set array todos dengan data yg uda di ambil
            } else {
                setTodos(data.sort((a, b) => b.id - a.id))
            }
        } catch (error) {
            console.log("Gagal load todo:", error)
        }
    }

    ambilData()
    }, [])


    useEffect(() => { // ini untuk nyimpen data ke lokal storage dr list data
    const simpanData = async () => {
        try {
            const jsonValue = JSON.stringify(todos)
            await AsyncStorage.setItem("TodoApp", jsonValue)
        } catch (error) {
            console.log("Gagal simpan todo:", error)
        }
    }

    if (todos.length > 0) {
        simpanData()
    }
    }, [todos])
    
    /* tiap fitur dibuat jd function */
    const addTodo = () => { /* fitur Create basically cm append array todo*/
        if (text.trim()) {
            const newId = todos.length > 0 ? todos[0].id + 1 : 1
            setTodos([{ id : newId, title: text, completed: false}, ...todos])
            setText('')
        }
    }
    const updateTodo = (id) => { /* fitur Update untuk tau todo dah komplit ato nda */
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }
    const deleteTodo = (id) => { /* fitur Delete */
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }

    const styles = myStyle(skemaWarna, tema) 
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView

  return (
    <Container  style={styles.container}>
        <View style={styles.searchContainer}>
            {/* add new todo bar */}
        
            <TextInput 
                style={styles.searchBar}
                placeholder='Add a new Todo'
                placeholderTextColor="gray"
                value={text}
                onChangeText={setText}
            />
        
            {/* tombol add */}
            <Pressable onPress={addTodo} style={styles.tombol}>
                <Text style={{ color: tema.text}} >
                    Add
                </Text>
            </Pressable>
            {/* tombol toggle theme */}
            <Pressable onPress={() => setSkemaWarna(
                skemaWarna === 'light' ? 'dark' : 'light'
            )} style={styles.tombol}>
                <Octicons name={skemaWarna === 'dark' ? "sun" : "moon"} size={20} color={tema.text} />
            </Pressable>
        </View>
        {/* Bagian Read */}
        <Animated.FlatList 
            data={todos}
            keyExtractor={(items) => items.id.toString()}
            contentContainerStyle = {{ flexGrow:1}}
            itemLayoutAnimation={LinearTransition}
            keyboardDismissMode='on-drag'
            renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.textRow}>
                        <Text 
                        style={[styles.title, item.completed && styles.titleCompleted]}
                        onPress={() => updateTodo(item.id)}
                        >
                            {item.title}
                        </Text>
                    </View>

                    <Pressable style={styles.tombol2} onPress={() => deleteTodo(item.id)}>
                        <Ionicons name='trash-outline' size={24} color="black" style={styles.img}/>
                    </Pressable>
                    
                </View>
            )}
        />

    </Container>
  )
}

export default todo

function myStyle(color, theme) {
 
    return StyleSheet.create({
        container : {
            backgroundColor: theme.background,
        },
        title :{
            fontSize: 20,
            textAlign: 'left',
            color: theme.text,
            marginLeft: 10,
            marginTop: 10,
            marginHorizontal: 'auto'
        },
        titleCompleted :{
            fontSize: 20,
            textAlign: 'left',
            marginLeft: 10,
            marginTop: 10,
            textDecorationLine: 'line-through',
            color: 'gray',
        },
        img : {
            marginHorizontal: 5,
            marginTop: 5,
            color: theme.background
        },
        row : {
            flexDirection: 'row',
            width: '95%',
            maxWidth: 600,
            height: 50,
            borderStyle: 'solid',
            borderColor: theme.text,
            borderWidth: 1,
            borderRadius: 20,
            marginBottom: 5,
            marginHorizontal: "auto",
            overflow: 'hidden',
        },
        textRow: {
            width: '65%',
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
            fontFamily: 'Inter_500Medium'

        },
        searchBar: {
            width: '75%',
            height: 60,
            borderStyle: 'solid',
            borderColor: theme.text,
            borderWidth: 1,
            borderRadius: 20,
            marginLeft: 5,
            padding: 5,
            fontSize: 20,
            color: theme.text
            
        },
        searchContainer: {
            flexDirection: 'row',
            marginVertical: 25,
        },
        tombol: {
            width: "auto",
            paddingVertical: 20,
            paddingHorizontal: 30,
            marginLeft: 5,
            height: 60,
            borderStyle: 'solid',
            borderColor: theme.text,
            borderWidth: 1,
            borderRadius: 20,
            color: theme.text
        },
        tombol2: {
            borderStyle: 'solid',
            borderRadius: 50,
            borderWidth: 1,
            margin: 5,
            borderColor: '#9e0505ff',
            backgroundColor: '#9e0505ff',
        }
    })
}