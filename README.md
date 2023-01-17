# Android 通知图标规范适配计划

![Eclipse Marketplace](https://img.shields.io/badge/license-AGPL3.0-blue)
[![Telegram](https://img.shields.io/badge/Follow-Telegram-blue.svg?logo=telegram)](https://t.me/XiaofangInternet)

这是一个在线规则平台，为国内 Android 不规范的 APP 和厂商适配原生通知图标与规范图标修复。

## Developers

- <b>发起人</b> [酷安 @星夜不荟](http://www.coolapk.com/u/876977)

- <b>合作方</b> [酷安 @PedroZ](http://www.coolapk.com/u/1157881)

## 已支持的 OS 模块

- MIUI 系统 请参阅 [MIUI 原生通知图标](https://github.com/fankes/MIUINativeNotifyIcon)

- ColorOS、RealmeUI、OxygenOS(≥12) 系统 请参阅 [ColorOS 通知图标增强](https://github.com/fankes/ColorOSNotifyIcon)

- Flyme <b>或许可能，敬请期待。有需求可提交</b> `issues`

- 类原生、Pixel 的国内用户 [可在这里留言请求适配](https://github.com/fankes/AndroidNotifyIconAdapt/issues/102)

## 需求适配

国内 OS 的适配按需求人数决定，小众、无法 Root 的设备不会适配，如有需求可提交至 `issues` 共同讨论。

## 项目起源

构建这个项目的初衷就是想规范国内乱七八糟的 APP 生态，让国内用户也能体验到原生 Android 通知图标的规范美。

这一切的原因归根结底都是 MIUI 的不规范推送图标导致我忍无可忍而起之，其它厂商也不能解决彩色 APP 作为图标的欺骗意义的“解决方案”。

相信与我有同样想法的人存在，那么这个项目就可以帮助你完善这个愿望，顺便，你也可以帮助这个项目贡献图标资源。

有人说，用类原生系统不就好了，但是在国内的环境，类原生系统真的已经不合适了，毛坯房终究还是要自己去补全，在这个吃快餐的时代，显得有些狼狈了。

## 不规范收录

<strong>（不规范）</strong>允许 API 19 以上 APP 使用彩色图标但保留原生单色图标

甚至自己的系统 APP 都在用彩色通知图标

- EMUI(≤3 ≥5)、HarmonyOS(Android 9、10)、MagicUI
- ColorOS、RealmeUI
- OxygenOS(≤12)
- MyOS
- RogUI

<strong>（破坏）</strong>完全破坏原生单色图标全部强制使用 APP 彩色图标

方法 `setSmallIcon` 失效

- EMUI(4.0 、4.0.1、4.1)
- MIUI(≤9 ≥12.5)、JoyUI
- ZUI
- NubiaUI、RedMagicOS
- 360OS
- CoolOS
- WaterOS

<strong>（破坏）</strong>只能强制通过系统预制的 APP 白名单设置通知图标

方法 `setSmallIcon` 失效

- Flyme

<strong>（勉强合格）</strong>通过系统预制的 APP 设置图标但保留原生单色图标

- MIUI(10、11、12)
- OriginOS、FuntouchOS
- SmartisanOS

## 开始贡献

由于国内厂商 APP 的不规范彩色通知图标影响整体图标的美观，现在开放第三方 APP 以及定制 OS 的通知图标适配。<br/>
这是一个公开在线规则平台，欢迎为通知图标优化名单贡献宝贵资源！<br/>

- [CONTRIBUTING](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/CONTRIBUTING.md)

## 通知测试

你可以 [点击这里](https://github.com/fankes/AndroidNotifyIconAdapt/raw/main/tool/NotifyTester.apk) 下载工具测试通知图标是否符合原生规范。

## 授权说明

在线规则平台的全部数据所有权属于 [@fankes](https://github.com/fankes) 与本仓库的所有贡献者所有，目前仅限于我正在开发的通知图标相关模块与项目合作者使用，**<ins>未经许可不允许私自引用本仓库的任何数据到自己的项目直接使用或删掉副本上的信息进行传播 (个人使用除外)</ins>**，使用本仓库的资源需要经过我的明确同意且需要根据 [AGPL-3.0](https://github.com/fankes/AndroidNotifyIconAdapt/blob/main/LICENSE) 协议，**<ins>在显著的地方声明引用和复制来源</ins>**，如有合作需求，请查看顶部的 **Telegram** 联系链接。

注意：除合作方外本仓库所有者有权在不通知的情况下根据自己的项目需求随时动态调整本仓库的所有资源包括但不限于修改格式、移动目录。

## 许可证

- [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)

```
Copyright (C) 2017-2023 Fankes Studio(qzmmcn@163.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

版权所有 © 2017-2023 Fankes Studio(qzmmcn@163.com)
