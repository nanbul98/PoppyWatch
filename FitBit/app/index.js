import document from 'document'
import refreshHeartData from "../common/heartrate"
import { HeartRateSensor } from 'heart-rate';
import {status, updateData} from "../common/trigger"
import * as messaging from "messaging";
refreshHeartData();

document.onkeypress = function (e) {
  if(e.key === "down") {
    updateData();
    //console.log(JSON.stringify(status.data));
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      // Send the data to peer as a message
      messaging.peerSocket.send(status.data);
    }
  }
}

setInterval(refreshHeartData, 1000);
