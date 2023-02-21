/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={45} color="#F4C724" />;
    case 'cross':
      return <Icon name="times" size={45} color="#10a881" />;
    default:
      return <Icon name="pencil-alt" size={45} color="#eee" />;
  }
};

export default Icons;
