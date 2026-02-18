# rc-design

<img src="/public/logo.png"/>

rc-design，是一款为 react 开发的组件库，为开发者提供更轻量、简洁的组件库选择。使用 tsx 编写逻辑，less 编写样式，dumi2 编写文档站，jest+ts-jest+react-testing-library 单元测试。

## 开始使用

### 下载安装

```shell
npm install @rc-design/core
```

### 如何引入

请务必注意，rc-design 目前没有实现按需引入样式，所以请用户**手动导入全局样式**

```js
// bad:
import { Button } from '@rc-design/core';
// good: tree-shaking
import Button from '@rc-design/core/dist/button';
import '@rc-design/core/dist/index.css';
```

把 Button 换成需要的组件。

## 问题反馈

如果在使用过程中发现任何问题，欢迎在 GitHub Issues 进行反馈：https://github.com/Sunny-117/rc-design/issues
