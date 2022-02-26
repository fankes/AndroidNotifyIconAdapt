# 开始贡献

欢迎为通知图标优化名单贡献宝贵资源！<br/>

## 分支规定

不管是直接 Push 代码还是提交 Pull Request，都必须使 `commit` 指向 `main` 分支。

## 代码格式规范

- 1.全部提交代码必须使用 IDE(Android Studio 或 IDEA) 进行格式化，未经格式化的代码将拒绝合并提交请求
- 2.代码必须使用 4 spaces 缩进格式化

## 贡献方法

- 在下方的 JSON 文件中添加新的 APP 通知图标适配条目
- APP 对应了每个定制系统共同使用的图标，OS 中的图标只会分发到指定的定制系统生效 
- [进入 APP 适配文件](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/APP/NotifyIconsSupportConfig.json)
- [进入 OS 适配目录](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/OS)
- 使用灰度位图转 Base64 来得到 Base64 的位图数据字符串
- [BitmapToBase64](https://github.com/fankes/BitmapToBase64)
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

## 同步列表地址

- APP [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/APP/NotifyIconsSupportConfig.json)
- MIUI [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/MIUI/NotifyIconsSupportConfig.json)
- ColorOS [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/ColorOS/NotifyIconsSupportConfig.json)
