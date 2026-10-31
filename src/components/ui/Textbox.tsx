import { useState } from 'react';
import {
    Text,
    Dimensions,
    Pressable,
    StyleSheet,
    TextInput,
    View,
    Modal,
    Image
} from 'react-native';
/**
 * TextboxProps types of textbox properties
 */
interface TextboxProps {
    labelText: string;
    placeholderText: string;
    onChange?: (value: string) => void;
    onPress?: () => void;
    onClose?: () => void;
    visible:boolean;
};

const screenHeight = Dimensions.get("window").height;

const Textbox = ({
    labelText,
    placeholderText,
    onChange,
    onPress,
    onClose,
    visible

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
        <Modal visible={visible} animationType="slide">
        <View style={myStyles.container} >
             <Pressable onPress={onClose}>
                <Image
                    source={require("../../../assets/images/OU.png")}
                    style={myStyles.emptyImage}
                    resizeMode="stretch"
                />
            </Pressable>

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
        </Modal >
    );
}


const myStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        marginTop:20,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#841617",
        height:"100%",
        color:"white"
    },

    labelButton: {
        padding: 5,
        marginRight: 1,
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 600,
        backgroundColor: "#574f4f",
        minWidth: "100%",
        minHeight: 60,
        fontWeight: "bold",
        textAlignVertical: "center",
        flexShrink: 1,
    },
    labelButtonText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        textAlignVertical: "center",
       
    },


    formText: {
        marginTop: 25,
        paddingTop: 1,
        minHeight: 120,
        marginLeft: 1,
        borderWidth: 2,
        borderColor: "#574f4f",
        borderStyle: "solid",
        borderRadius: 1,
        fontSize: 16,
        backgroundColor:"white",
        textAlignVertical: "top",
        minWidth: "100%",
        color: "black"
    },
    emptyImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
},

})

export default Textbox;