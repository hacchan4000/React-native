//aplikasi CRUD todo list
import React from 'react'
import { StyleSheet, Appearance, Platform, View, ScrollView, FlatList, Text, TextInput, Pressable} from "react-native";
import { Colors } from '@/constants/theme';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

import { data } from '@/data/todo.js'
import { useState, useEffect } from "react";

const todo = () => {
    const ColorScheme = Appearance.getColorScheme()
    const theme = ColorScheme === 'dark' ? Colors.dark : Colors.light

    /* data list todo ditampung di array dlu dan di sort berdasarkan id terbesar ke kecil */
    const [todos, setTodos] = useState(data.sort((a,b) => b.id - a.id)) 
    const [text, setText] = useState('') /* untuk nampung input text */

    /* tiap fitur dibuat jd function */
    const addTodo = () => { /* fitur Create basically cm append array todo*/
        if (text.trim()) {
            const newId = todo.length > 0 ? todos[0].id + 1 : 1
            setTodos([{ id : newId, title: text, completed: false}, ...todos])
            setText('')
        }
    }
    const updateTodo = (id:any) => { /* fitur Update untuk tau todo dah komplit ato nda */
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }
    const deleteTodo = (id:any) => { /* fitur Delete */
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }

    const styles = myStyle(ColorScheme, theme) 
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
                <Text style={{ color: theme.text}} >
                    Add
                </Text>
            </Pressable>
        </View>
        {/* Bagian Read */}
        <FlatList 
            data={todos}
            keyExtractor={(items) => items.id.toString()}
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

function myStyle(color:any, theme:any) {
 
    return StyleSheet.create({
        container : {
            backgroundColor: theme.background
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
            flexGrow: 1
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