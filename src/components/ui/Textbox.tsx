import { useState } from 'react';
import { Button,Text, Dimensions, Pressable, StyleSheet, TextInput, View } from 'react-native';
/**
 * TextboxProps types of textbox properties
 */
type TextboxProps = {
    labelText: string;
    placeholderText: string;
    onChange?: (value: string) => void;
    onPress?: () => void;
};

const screenHeight = Dimensions.get("window").height;

const Textbox = ({
    labelText,
    placeholderText,
    onChange,
    onPress

}: TextboxProps) => {

    const [text, setText] = useState('');
 
    const handleChange = (newText: string) => {
       
        setText(newText);
    };

    const handleClick = () => {
        if (onChange) {
            onChange(text);
        }
            if (onPress) {
            onPress();
        }
        setText('');
    };

    return (
        <View style={myStyles.container} >

            <TextInput
                placeholder={placeholderText}
                onChangeText={handleChange}
                style={myStyles.formText} 
                multiline={true}
                value={text}
                >
                
            </TextInput>
            <Pressable style={myStyles.labelButton} onPress={handleClick}>
                <Text style={myStyles.labelButtonText}>{labelText}</Text>
            </Pressable>

        </View>
    );
}


const myStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        top: screenHeight * 0.70,
        paddingHorizontal: 10,
        marginBottom: 15,
        height:screenHeight*.25,
        backgroundColor:"#FFFFF0"
    },

    labelButton: {
        padding: 5,
        marginRight: 1,
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 5,
        backgroundColor:"#0274df",
        minWidth:"100%",
       minHeight: 60,
        fontWeight: "bold",
        textAlignVertical: "center",
        flexShrink: 1,
    },
    labelButtonText: {
        color:"white",  
        fontSize: 20,
        textAlign:"center",
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    

    formText: {
        marginTop:5,
        paddingTop: 1,
        minHeight: 120,
        marginLeft:1,
        borderWidth: 2,
        borderColor: "blue",
        borderStyle: "solid",
        borderRadius: 1,
        fontSize: 16,
        textAlignVertical: "top",
        minWidth:"100%",
        color:"black"
    },

})

export default Textbox;