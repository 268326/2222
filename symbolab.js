[rewrite_local]

^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/268326/2222/main/symbolab.js

[mitm]

hostname = scibug.com

*************************************/

let chxm1023 = JSON.parse($response.body);

chxm1023= {"subscriptionChangeEvent":{"origin":"apple","changeType": "NoChange","subscriptionState":{"stateString":"Subscribed"}},"currentSubscriptionState":{"stateString":"Subscribed"},"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"valid":true,"hasUserConsumedAppleFreeTrial":false}
$done({body: JSON.stringify(chxm1023)});
