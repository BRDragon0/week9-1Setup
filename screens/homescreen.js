import { View, StyleSheet} from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Home Screen Place Holder
            </Text>
            <Text>
                Welcome to the homescreen of my app. This is a placeholder Lorium Ipsuim    
            </Text> 

            <Button>
                Placeholder BTN
            </Button> 
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#565656"
   } 
});