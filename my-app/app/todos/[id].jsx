import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { View , Text , StyleSheet, ImageBackground, Pressable, TextInput} from 'react-native'
import { useState, useEffect, useContext } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '@/context/themeContext.js';
import { StatusBar } from 'expo-status-bar';
import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import { Ionicons, Octicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage"; // ini library untuk nyimpen data supaya pas reload datanya g ilang

export default function EditScreen() {
    const   {skemaWarna, setSkemaWarna, tema} = useContext(ThemeContext)
    const { id } = useLocalSearchParams()
    const [todo, setTodo] = useState({})
    const router = useRouter()
    const styles = myStyle(skemaWarna, tema)

    const [loaded, error] = useFonts({
        Inter_500Medium
    })

    useEffect(() => {
        const ambilDataku = async (id) => {
            try {
                const jsonValue = await AsyncStorage.getItem("TodoApp")
                const simpanTodo = jsonValue != null ? JSON.parse(jsonValue) : null;

                if (simpanTodo && simpanTodo.length > 0) {
                    const myTodo = simpanTodo.find(todo => todo.id.toString() === id)
                    setTodo(myTodo)
                }
            } catch (error) {
                console.log(error)
            }
        }

        ambilDataku(id)

    }, [id])

    const handleSave = async () => {
        try {
            const savedTodo = { ...todo, title: todo.title}
            const jsonValue = await AsyncStorage.getItem('TodoApp')

            const storageTodo = jsonValue != null ? JSON.parse(jsonValue) : null;
            
            if (storageTodo && storageTodo.length > 0) {
                const todoLain = storageTodo.filter(todo => todo.id !== savedTodo.id)
                const allTodos = [...todoLain,savedTodo]
                await AsyncStorage.setItem("TodoApp",JSON.stringify(allTodos))
            } else {
                await AsyncStorage.setItem("TodoApp",JSON.stringify([savedTodo]))
            }

            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='Edit todo'
                placeholderTextColor='gray'
                value={todo?.title || ''}
                onChange={(text) => setTodo(prev => ({...prev, title: text}))}
                />
                <Pressable
                onPress={() => setSkemaWarna(
                    skemaWarna === 'light' ? 'dark' : 'light'
                )} 
                style={styles.tombol}>
                    <Octicons name={skemaWarna === 'dark' ? "sun" : "moon"} size={20} color={tema.text} />
                </Pressable>
                
            </View>
            <View style={styles.inputCont}> 
                <Pressable
                onPress={handleSave}
                style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>
                        Save
                    </Text>
                </Pressable>
                <Pressable
                onPress={()=> router.push('/todo')}
                style={[styles.saveButton, {backgroundColor: 'red'}]}
                >
                    <Text style={[styles.saveButtonText, {color: 'white'}]}>
                        Cancel
                    </Text>
                </Pressable>
                
            </View>
            <StatusBar style={skemaWarna === 'dark' ? 'light': 'dark'} />
        </SafeAreaView>
        
    )
}

function myStyle(params1, params2) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: params2.background
        },
        inputContainer : {

        },
        input: {

        },
        saveButton: {

        },
        saveButtonText: {
            color: 'green'
        },
        
        
    })
}