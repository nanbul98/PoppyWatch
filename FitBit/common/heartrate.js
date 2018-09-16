import document from "document";
import { HeartRateSensor } from 'heart-rate';
let hrm = new HeartRateSensor();
let field = document.getElementById("hrm-data");
hrm.start();
function refreshHeartData() {
  let data = {
    hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  };
  field.text = JSON.stringify(data.hrm.heartRate);
}
export default refreshHeartData;
