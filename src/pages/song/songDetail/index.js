import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { View, Button, Text } from '@tarojs/components'
import _ from 'lodash';

import Main from '../../../components/song/songDetail/main';
import LoadingView from '../../../components/common/loadingView/loadingView';

const SongDetail = (props) => {
  const { isRequesting = false } = props;
  return (
    <View className='flex'>
      <LoadingView isLoading={isRequesting} />
      <Main />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {                                                                            
    isRequesting: state.search.isRequesting,
  };
}
  
  
const mapDispatchToProps = (dispatch) => ({
  //   startup: () => dispatch(StartupActions.startup()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(SongDetail);