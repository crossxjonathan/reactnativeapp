import {ScrollView, View} from 'react-native';
import React from 'react';
import WorkerProfileDetail from '../../component/module/profile/worker/workerprofiledetail';
import WorkerOption from '../../component/module/profile/worker/workeroption';

const DetailWorker = () => {
  return (
    <ScrollView>
      <View style={{padding: 20, gap: 20, position: 'relative', top: 20}}>
        <WorkerProfileDetail />
      </View>
      <View style={{padding: 20, position: 'relative', top: 10}}>
        <WorkerOption />
      </View>
    </ScrollView>
  );
};

export default DetailWorker;
