import { HeartRateSensor } from 'heart-rate';
let hrm = new HeartRateSensor();
hrm.start();
let status = {
  data: {
    time: Date.now(), //Unix time
    heartRate: hrm.heartRate,
    situation: '',
    thoughts: '',
    emotions: '',
    physicalScenario: '',
    othernotes: ''
  }
}
function updateData() {
  console.log("got here");
  status.data = {
    time: Date.now(), //Unix time
    heartRate: hrm.heartRate
  };
}
export {status, updateData};
