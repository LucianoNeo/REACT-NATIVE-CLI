import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import MyButton from '../../components/Button';
import styles from './styles';

function Home() {

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor='transparent'
            />
            <Image
                style={styles.img}
                source={require('../../assets/img/world.png')}
            />
            <Text style={styles.h1}>Hello World</Text>
            <Text style={styles.textSM}>App created by Luciano Neo using React Native CLI
                {'\n'}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea modi optio iusto minus delectus. Pariatur, alias quibusdam et rem commodi ipsum minus sapiente dolorum deserunt voluptatum sit tenetur molestiae?
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                <MyButton
                    title='Entrar'
                />

            </View>
        </View>
    );
};
export default Home;
