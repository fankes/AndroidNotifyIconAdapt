# 开始贡献

欢迎为通知图标优化名单贡献宝贵资源！<br/>

## 分支规定

不管是直接 Push 代码还是提交 Pull Request，都必须使 `commit` 指向 `main` 分支。

## 代码格式规范

- 1.全部提交代码必须进行格式化，未经格式化的代码将二次审查进行修改，格式混乱的将拒绝合并提交请求
- 2.提交请求请在 `commit` 中标明修改、增加的 APP 名称以及图标用途，否则不予合并代码

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
  "isEnabled": true, // 是否默认启用替换彩色图标 - 关闭后将全部停止替换
  "isEnabledAll": false, // 是否默认启用替换全部图标
  "iconBitmap": "", // 位图数据 Base64 字符串
  "iconColor": "#ff232323", // 通知栏中显示的图标颜色 - 不设置使用系统默认颜色 (不设置颜色可删除此项)
  "contributorName": "" // 贡献者昵称
}
```

- 图标大小建议保持在 50x50
- 提交时请将后方的注释删除，否则不予合并代码

## 测试图标

- [点击这里](https://github.com/fankes/AndroidNotifyIconAdapt/raw/main/tool/NotifyIconDebugger.apk) 下载通知图标调试工具并安装在 Android 设备上进行调试，建议使用 AVD 模拟器，Android 版本 11 及以上
- 请确保通知图标能够正常展示，不会出现黑白块的情况，否则不予合并代码
- 友情赞助：可尝试在 [完美图标补全计划](https://github.com/pzcn/Perfect-Icons-Completion-Project/tree/main/icons) 内找到已制作好的 APP 分层图标，在此基础上进行修改适配

## 同步列表地址

- APP [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/APP/NotifyIconsSupportConfig.json)
- MIUI [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/MIUI/NotifyIconsSupportConfig.json)
- ColorOS [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/ColorOS/NotifyIconsSupportConfig.json)
