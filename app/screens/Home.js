import React from 'react';
import {StatusBar, View} from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'YEN';
const TEMP_QUOTE_CURRENCY = 'PHP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '48.20';

export default class Home extends React.Component{
    handleChangeText = () => {
        console.log('change text');
    };

    handlePressBaseCurrency = () => {
        console.log('press base currency');
    };

    handlePressQuoteCurrency = () => {
        console.log('press quote currency');
    };

    render(){
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Logo/>
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}/>
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    onPress={this.handlePressQuoteCurrency}/>
            </Container>
        )
    }
}