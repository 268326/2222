/*************************************

项目名称：Filmix
下载地址：https://too.st/8Go
更新日期：2024-03-08
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user url script-response-body https://raw.githubusercontent.com/268326/2222/refs/heads/main/scripts/Qx/filmix.js

[mitm]
hostname = appv2.filmix.com.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.first_vip_start_time = "2023-09-09T09:09:09+09:00";
chxm1023.is_vip = true;
chxm1023.vip_start_time = "2023-09-09T09:09:09+09:00";
chxm1023.vip_end_time = "2099-09-09T09:09:09+09:00";
chxm1023.vip_level = pro+;

$done({body : JSON.stringify(chxm1023)});