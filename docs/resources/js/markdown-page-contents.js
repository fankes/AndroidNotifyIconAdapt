const markdownPageContents = {
    home:
        '# Android 通知图标规范适配计划\n\n' +
        '![Blank](https://img.shields.io/badge/license-AGPL3.0-blue)\n' +
        '[![Telegram](https://img.shields.io/badge/Follow-Telegram-blue.svg?logo=telegram)](https://t.me/XiaofangInternet)\n\n' +
        '这是一个在线规则平台，为国内 Android 不规范的 APP 和厂商适配原生通知图标与规范图标修复。\n\n' +
        '## Developers\n\n' +
        '- <b>发起人</b> [酷安 @星夜不荟](http://www.coolapk.com/u/876977)\n\n' +
        '- <b>合作方</b> [酷安 @PedroZ](http://www.coolapk.com/u/1157881)\n\n' +
        '## 已支持的 OS 模块\n\n' +
        '- MIUI 系统 请参阅 [MIUI 原生通知图标](https://github.com/fankes/MIUINativeNotifyIcon)\n\n' +
        '- ColorOS、RealmeUI、OxygenOS(≥12) 系统 请参阅 [ColorOS 通知图标增强](https://github.com/fankes/ColorOSNotifyIcon)\n\n' +
        '- Flyme <b>或许可能，敬请期待。有需求可提交</b> `issues`\n\n' +
        '- 类原生、Pixel 的国内用户 [可在这里留言请求适配](https://github.com/fankes/AndroidNotifyIconAdapt/issues/102)\n\n' +
        '## 需求适配\n\n' +
        '国内 OS 的适配按需求人数决定，小众、无法 Root 的设备不会适配，如有需求可提交至 `issues` 共同讨论。\n\n' +
        '## 项目起源\n\n' +
        '构建这个项目的初衷就是想规范国内乱七八糟的 APP 生态，让国内用户也能体验到原生 Android 通知图标的规范美。\n\n' +
        '这一切的原因归根结底都是 MIUI 的不规范推送图标导致我忍无可忍而起之，其它厂商也不能解决彩色 APP 作为图标的欺骗意义的“解决方案”。\n\n' +
        '相信与我有同样想法的人存在，那么这个项目就可以帮助你完善这个愿望，顺便，你也可以帮助这个项目贡献图标资源。\n\n' +
        '有人说，用类原生系统不就好了，但是在国内的环境，类原生系统真的已经不合适了，毛坯房终究还是要自己去补全，在这个吃快餐的时代，显得有些狼狈了。\n\n' +
        '## 不规范收录\n\n' +
        '<strong>（不规范）</strong>允许 API 19 以上 APP 使用彩色图标但保留原生单色图标\n\n' +
        '甚至自己的系统 APP 都在用彩色通知图标\n\n' +
        '- EMUI(≤3 ≥5)、HarmonyOS(2.0-3.0 Android 9、10)、MagicUI\n' +
        '- ColorOS、RealmeUI\n' +
        '- OxygenOS(≤12)\n' +
        '- MyOS\n' +
        '- RogUI\n\n' +
        '<strong>（破坏）</strong>完全破坏原生单色图标全部强制使用 APP 彩色图标\n\n' +
        '方法 `setSmallIcon` 失效\n\n' +
        '- HarmonyOS 4.0 (根据酷安板块反馈，通知栏完全模仿 iOS 设计，完全破坏通知图标)\n' +
        '- EMUI(4.0 、4.0.1、4.1)\n' +
        '- MIUI(≤9 ≥12.5)、JoyUI\n' +
        '- ColorOS(≥15.0.1)\n' +
        '- ZUI\n' +
        '- NubiaUI、RedMagicOS\n' +
        '- 360OS\n' +
        '- CoolOS\n' +
        '- WaterOS\n\n' +
        '<strong>（破坏）</strong>只能强制通过系统预制的 APP 白名单设置通知图标\n\n' +
        '方法 `setSmallIcon` 失效\n\n' +
        '- Flyme\n\n' +
        '<strong>（勉强合格）</strong>通过系统预制的 APP 设置图标但保留原生单色图标\n\n' +
        '- MIUI(10、11、12)\n' +
        '- OriginOS、FuntouchOS\n' +
        '- SmartisanOS\n\n' +
        '## 通知测试\n\n' +
        '你可以 [点击这里](https://github.com/fankes/AndroidNotifyIconAdapt/raw/main/tool/NotifyTester.apk) 下载工具测试通知图标是否符合原生规范。',
    feedback:
        '# 提交适配请求\n\n' +
        '欢迎为通知图标优化名单贡献宝贵资源！\n\n' +
        '## 如何提交\n\n' +
        '目前的提交适配请求方式为在 **GitHub** 创建一个 `issues`。\n\n' +
        '你需要前往 **GitHub** 使用指定的模版创建一个 `issues`。\n\n' +
        '管理员看到你创建的 `issues` 后会进行处理，最快 1-3 个工作日内完成。\n\n' +
        '适配完成后 `issues` 会被关闭并标记为完成，同步云端规则即可获取最新的适配数据。\n\n' +
        '如果你没有 **GitHub** 帐号，请先注册，[点击这里](https://github.com/fankes/AndroidNotifyIconAdapt/issues/new?assignees=&labels=To+be+adapted&template=request_notify_icon_adaption.yml) 立即创建一个 `issues`。\n\n' +
        '## 适配说明\n\n' +
        '以下类型的 APP 不予适配：\n\n' +
        '- VPN、翻墙软件\n' +
        '- 涉嫌色情、赌博类软件\n' +
        '- 申请超限权限、涉嫌泄露国家机密行为的软件\n\n' +
        '以下类型的 APP 通知图标暂不适配：\n\n' +
        '- 多态彩色图标，状态不唯一，例如 360 极速浏览器\n' +
        '- 规范的原生图标，但未被通知图标规则适配的 (将稍后加入白名单)',
    contributing:
        '# 开始贡献\n\n' +
        '欢迎为通知图标优化名单贡献宝贵资源！\n\n' +
        '## 分支规定\n\n' +
        '不管是直接 Push 代码还是提交 Pull Request，都必须使 `commit` 指向 `main` 分支。\n\n' +
        '## 代码格式规范\n\n' +
        '- 全部提交代码必须进行格式化，未经格式化的代码将二次审查进行修改，格式混乱的将拒绝合并提交请求\n' +
        '- 提交请求请在 `commit` 中标明修改、增加的 APP 名称以及图标用途，否则不予合并代码\n' +
        '- 贡献者昵称如有多个请使用**顿号**分隔\n\n' +
        '## 贡献方法\n\n' +
        '- 在下方的 JSON 文件中添加新的 APP 通知图标适配条目\n' +
        '- APP 对应了每个定制系统共同使用的图标，OS 中的图标只会分发到指定的定制系统生效 \n' +
        '- [进入 APP 适配文件](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/APP/NotifyIconsSupportConfig.json)\n' +
        '- [进入 OS 适配目录](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/OS)\n' +
        '- 使用灰度位图转 Base64 来得到 Base64 的位图数据字符串\n' +
        '- [BitmapToBase64](https://github.com/fankes/BitmapToBase64)\n' +
        '- 你也可以使用在线工具来完成，注意删除后方生成的 `data:image/png;base64,`\n' +
        '- [Base64 图片在线转换](https://tool.chinaz.com/tools/imgtobase)\n' +
        '- 新增条目的模板如下所示\n\n' +
        '```json\n' +
        '{\n' +
        '  "appName": "", // APP 名称\n' +
        '  "packageName": "", // APP 包名\n' +
        '  "iconBitmap": "", // 位图数据 Base64 字符串\n' +
        '  "iconColor": "#ff232323", // 通知栏中显示的图标颜色 - 不设置使用系统默认颜色 (不设置颜色可删除此项)\n' +
        '  "contributorName": "", // 贡献者昵称\n' +
        '  "isEnabled": true, // 是否默认启用替换彩色图标 - 关闭后将全部停止替换\n' +
        '  "isEnabledAll": false // 是否默认启用替换全部图标\n' +
        '}\n' +
        '```\n\n' +
        '> 特别注意\n\n' +
        '- 如果开启了默认启用替换全部图标，APP 的所有通知图标都将被强制替换为当前设置的图标，这是很危险的行为，我们默认只应该替换彩色的通知图标，如果一定有此需求(例如不启用此选项通知图标是黑白块情况)请**务必在 PR 中注明**，否则将不与合并代码或会被管理员重新设置为 **false**\n\n' +
        '> 其它要求\n\n' +
        '- `iconColor` 中的颜色代码一律使用小写字母且格式必须为 #ff······ (· 为数值) **不要对颜色设置透明度**\n' +
        '- 图标大小建议保持在 50x50，最高不得超过 72x72\n' +
        '- 提交前建议优化图标文件体积，Windows 平台可以使用 [pinga](https://css-ig.net/pinga)\n' +
        '- 图标必须可被调试工具识别为灰度图标并检查通过，否则不予合并代码，详情请见下方\n' +
        '- 提交时请将后方的注释删除，否则不予合并代码\n\n' +
        '> 审查要求\n\n' +
        '- PR 时请注明 PR 标题，标题为 Update XXX 的会被当做 `spam` 处理直接 close\n' +
        '- PR 内容不能只有文字描述，请一并附上 **通知图标调试工具** 的检查结果截图，详见下方的测试图标说明\n\n' +
        '## 测试图标\n\n' +
        '- [点击这里下载](https://github.com/fankes/AndroidNotifyIconAdapt/raw/main/tool/NotifyIconDebugging_1.1.apk) <strong>通知图标调试工具 v1.1</strong> 并安装在 Android 设备上进行调试，建议使用 AVD 模拟器，Android 版本 11 及以上\n' +
        '- 请确保通知图标能够正常展示，不会出现黑白块的情况，否则不予合并代码，示例如下<br/><br/>\n' +
        '  <img height="40" alt="image" src="https://user-images.githubusercontent.com/37344460/156614741-8a955d55-f406-4e04-9d47-550376782d3d.png"><br/>\n' +
        '- 友情赞助：可尝试在 [完美图标补全计划](https://github.com/pzcn/Perfect-Icons-Completion-Project/tree/main/icons) 内找到已制作好的 APP 分层图标，在此基础上进行修改适配\n\n' +
        '## 同步列表地址\n\n' +
        '- 第三方 APP [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/APP/NotifyIconsSupportConfig.json)\n' +
        '- 系统 APP · MIUI [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/MIUI/NotifyIconsSupportConfig.json)\n' +
        '- 系统 APP · ColorOS [点击查看 Raw](https://raw.githubusercontent.com/fankes/AndroidNotifyIconAdapt/main/OS/ColorOS/NotifyIconsSupportConfig.json)'
};
