[rewrite_local]

^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/268326/2222/main/scripts/Qx/symbolab.js

[mitm]

hostname = scibug.com

*************************************/

let chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "subscriptionChangeEvent": {
    "origin": "apple",
    "changeType": "FreeTrialStarted"
  },
  "currentSubscriptionState": {
    "stateString": "Subscribed"
  },
  "isCurrentlyInFreeTrial": true,
  "newlyAssociated": true,
  "valid": true,
  "hasUserConsumedAppleFreeTrial": false
};

$done({ body: JSON.stringify(chxm1023) });