import document from 'document'
import refreshHeartData from "../common/heartrate"
import { HeartRateSensor } from 'heart-rate';
let hrm = new HeartRateSensor();
hrm.start();
refreshHeartData();
let status = {
  data: {
    time: Date.now(), //Unix time
    heartRate: hrm.heartRate
  }
}
function updateData() {
  console.log("got here");
  status.data = {
    time: Date.now(), //Unix time
    heartRate: hrm.heartRate
  };
}
document.onkeypress = function (e) {
  if(e.key === "down") {
    console.log(status.data);
  }
}

setInterval(refreshHeartData, 1000);
