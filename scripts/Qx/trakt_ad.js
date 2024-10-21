// 解析响应的 JSON body
var body = JSON.parse($response.body);

// 输出修改前的完整 body，方便调试
// console.log("Before modification: " + JSON.stringify(body));

// 确保 "user" 对象存在，并修改 "vip" 字段为 true
if (body.user && typeof body.user.vip === 'boolean') {
    body.user.vip = true; // 修改 vip
}

// 确保 "account" 对象存在，并修改 "display_ads" 字段为 false
if (body.account && typeof body.account.display_ads === 'boolean') {
    body.account.display_ads = false; // 修改 display_ads
}

// 输出修改后的完整 body，方便调试
// console.log("After modification: " + JSON.stringify(body));

// 返回修改后的 body
$done({body: JSON.stringify(body)});