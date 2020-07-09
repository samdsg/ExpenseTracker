import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

/* Redux */
import {useSelector} from 'react-redux';

function Card({navigation}) {
  const {transactions} = useSelector((state) => state.transactions);

  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0);

  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1;

  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={styles.Box}>
      <View style={{width: '70%', alignItems: 'flex-start'}}>
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontWeight: '600',
          }}>
          Current balance
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Medium',
            fontSize: 32,
            color: '#fff',
            fontWeight: '700',
          }}>
          ₦{totalPrice}
        </Text>

        <Text
          style={{
            marginTop: 67,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontSize: 18,
            fontWeight: '700',
          }}>
          4234 **** **** 6533
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          width: '30%',
        }}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
          NGN
        </Text>
        <View style={{flex: 1}}>
          <Button
            rounded
            light
            style={{
              padding: 10,
              marginTop: 32,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#E10C62',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Add');
            }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
              Add
            </Text>
          </Button>

          <Text
            style={{
              marginTop: 17,
              color: '#fff',
              fontSize: 12,
              fontWeight: '700',
            }}>
            Expense
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
            }}>
            ₦{expense}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default Card;
