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

const bankList = [{ bank: 'Gasius' }, { bank: 'A Nice' }, { bank: 'SMBC' }];

const TransferCheckAccountScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [filterBankList, setFilterBankList] = useState([]);
  const filterBanks = (value) => {
    let filterData =
      bankList && bankList?.length > 0
        ? bankList?.filter((data) =>
            data?.bank?.toLowerCase()?.includes(value?.toLowerCase())
          )
        : [];
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
            <TouchableOpacity onPress={() => onBankSelected(bankFilter)}>
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
        <ActionButton content="Check" accessibilityLabel="check button" />
      </View>
    </SafeAreaView>
  );
};

export default TransferCheckAccountScreen;
