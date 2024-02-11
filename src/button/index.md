---
title: Button 按钮
nav:
  title: '组件'
  path: /components
---

# Button 按钮

按钮用于开始一个即时操作。

## 按钮类型

<code src="./demos/types.tsx"></code>

## 按钮尺寸

<code src="./demos/size.tsx"></code>

## 不可用状态

<code src="./demos/disabled.tsx"></code>

## 事件

<code src="./demos/event.tsx"></code>

## API

> 支持原生 button 的其他所有属性。

|    参数    |                         说明                          |                            类型                            |  默认值   |
| :--------: | :---------------------------------------------------: | :--------------------------------------------------------: | :-------: |
|    type    |                     设置按钮类型                      | `primary`,`info`,`warning`,`danger`,`dashed`,`link`,`text` | `default` |
| classNames |                   语义化结构 class                    |               `Record<SemanticDOM, string>`                |
|  disabled  |                   设置按钮失效状态                    |                         `boolean`                          |
|    href    | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 |                          `string`                          |
|  htmlType  |  设置 button 原生的 type 值，可选值请参考 HTML 标准   |                          `string`                          |
|    size    |                     设置按钮大小                      |                  `large`,`middle`,`small`                  |
