import React, { useState } from 'react';
import TextInputWithIcon from '../../Components/TextInputWithIcon';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ActionButton from '../../Components/ActionButton';
import PropTypes from 'prop-types';
import ItemCard from '../../Components/ItemCard';

const bankList = [{ bank: 'Gasius' }, { bank: 'A Nice' }, { bank: 'SMBC' }];

const TransferCheckAccountScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [filterBankList, setFilterBankList] = useState([]);
  const [userFound, setUserFound] = useState({});

  const handleCheck = () => {
    setUserFound({
      id: '1',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Samuel Suhi',
      phoneNumber: '088218173673'
    });
  };

  const filterBanks = (value) => {
    let filterData = bankList?.filter((data) =>
      data?.bank?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setBankName(value);
    setFilterBankList([...filterData]);
  };

  const onBankSelected = (value) => {
    setBankName(value);
    setFilterBankList([]);
  };

  return (
    <SafeAreaView>
      <View className="mt-5 mx-5">
        <TextInputWithIcon
          placeholder="Input Bank"
          accessibilityLabel="bank input"
          onChange={filterBanks}
          value={bankName}
          icon={faPencil}
        />
        <FlatList
          data={filterBankList}
          renderItem={({ item: { bank: bankFilter } }) => (
            <TouchableOpacity
              className="p-3 border-b-2 border-black/[.1]"
              onPress={() => onBankSelected(bankFilter)}>
              <Text>{bankFilter}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.bank}
        />
      </View>
      <View className="mt-10 mx-5">
        <TextInputWithIcon
          placeholder="Input Phone Number"
          accessibilityLabel="phone input"
          onChange={setPhoneNumber}
          value={phoneNumber}
          icon={faPencil}
          isNumber={true}
        />
      </View>

      <View className="mt-10 m-5 w-1/3 self-end">
        <ActionButton
          onPress={handleCheck}
          text="Check"
          accessibilityLabel="check button"
          type="secondary"
        />
      </View>

      {userFound.id && (
        <View className="mt-7 w-2/3 self-center">
          <ItemCard
            accessibilityLabel="user info card"
            onPress={() => navigation.navigate('TransferForm')}
            imagePath={userFound.image}
            content={userFound.name}
            subContent={userFound.phoneNumber}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

TransferCheckAccountScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default TransferCheckAccountScreen;
