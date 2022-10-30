# 开始贡献

欢迎为通知图标优化名单贡献宝贵资源！<br/>

## 分支规定

不管是直接 Push 代码还是提交 Pull Request，都必须使 `commit` 指向 `main` 分支。

## 代码格式规范

- 全部提交代码必须进行格式化，未经格式化的代码将二次审查进行修改，格式混乱的将拒绝合并提交请求
- 提交请求请在 `commit` 中标明修改、增加的 APP 名称以及图标用途，否则不予合并代码
- 贡献者昵称如有多个请使用**顿号**分隔

## 贡献方法

- 在下方的 JSON 文件中添加新的 APP 通知图标适配条目
- APP 对应了每个定制系统共同使用的图标，OS 中的图标只会分发到指定的定制系统生效 
- [进入 APP 适配文件](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/APP/NotifyIconsSupportConfig.json)
- [进入 OS 适配目录](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/OS)
- 使用灰度位图转 Base64 来得到 Base64 的位图数据字符串
- [BitmapToBase64](https://github.com/fankes/BitmapToBase64)
- 你也可以使用在线工具来完成，注意删除后方生成的 `data:image/png;base64,`
- [Base64 图片在线转换](https://tool.chinaz.com/tools/imgtobase)
- 新增条目的模板如下所示

```json
{
  "appName": "", // APP 名称
  "packageName": "", // APP 包名
  "iconBitmap": "", // 位图数据 Base64 字符串
  "iconColor": "#ff232323", // 通知栏中显示的图标颜色 - 不设置使用系统默认颜色 (不设置颜色可删除此项)
  "contributorName": "", // 贡献者昵称
  "isEnabled": true, // 是否默认启用替换彩色图标 - 关闭后将全部停止替换
  "isEnabledAll": false // 是否默认启用替换全部图标
}
```

> 特别注意

- 如果开启了默认启用替换全部图标，APP 的所有通知图标都将被强制替换为当前设置的图标，这是很危险的行为，我们默认只应该替换彩色的通知图标，如果一定有此需求(例如不启用此选项通知图标是黑白块情况)请**务必在 PR 中注明**，否则将不与合并代码或会被管理员重新设置为 **false**

> 其它要求

- `iconColor` 中的颜色代码一律使用小写字母且格式必须为 #ff······ (· 为数值) **不要对颜色设置透明度**
- 图标大小建议保持在 50x50，最高不得超过 72x72
- 提交前建议优化图标文件体积，Windows 平台可以使用 [pinga](https://css-ig.net/pinga)
- 图标必须可被调试工具识别为灰度图标并检查通过，否则不予合并代码，详情请见下方
- 提交时请将后方的注释删除，否则不予合并代码

> 审查要求

- PR 时请注明 PR 标题，标题为 Update XXX 的会被当做 `spam` 处理直接 close
- PR 内容不能只有文字描述，请一并附上 **通知图标调试工具** 的检查结果截图，详见下方的测试图标说明

## 测试图标

- [点击这里下载](https://github.com/fankes/AndroidNotifyIconAdapt/raw/main/tool/NotifyIconDebugging_1.1.apk) <strong>通知图标调试工具 v1.1</strong> 并安装在 Android 设备上进行调试，建议使用 AVD 模拟器，Android 版本 11 及以上
- 请确保通知图标能够正常展示，不会出现黑白块的情况，否则不予合并代码，示例如下<br/><br/>
  <img height="40" alt="image" src="https://user-images.githubusercontent.com/37344460/156614741-8a955d55-f406-4e04-9d47-550376782d3d.png"><br/>
- 友情赞助：可尝试在 [完美图标补全计划](https://github.com/pzcn/Perfect-Icons-Completion-Project/tree/main/icons) 内找到已制作好的 APP 分层图标，在此基础上进行修改适配

## 同步列表地址

- APP [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/APP/NotifyIconsSupportConfig.json)
- MIUI [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/MIUI/NotifyIconsSupportConfig.json)
- ColorOS [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/ColorOS/NotifyIconsSupportConfig.json)
