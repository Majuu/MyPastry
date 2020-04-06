import React, {Component, ReactFragment} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CustomButton from '../../components/custom-button/custom-button';
import {ColorsEnum} from '../../enums/colors.enum';
import {styles} from './recipe-list.styles';

class RecipeListScreen extends Component {
    public render(): ReactFragment {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Text>Recipe List Screen Works!</Text>
                </View>
                <ScrollView style={styles.itemList}>
                    <View style={{padding: 20, height: 80, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: ColorsEnum.LIGHT_GREEN, alignItems: 'center'}}>
                        <View>
                            <Text>Title</Text>
                            <Text>Subtitle</Text>
                        </View>
                        <CustomButton text={'Go!'} onPress={() => {}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default RecipeListScreen;
