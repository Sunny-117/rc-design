---
title: Alert 警示
nav:
  title: '组件'
  path: /components
---

# Alert 警示

用于消息提醒。

## 类型

<code src="./demos/types.tsx"></code>

## API

|    参数     |             类型              |                             说明                              |  默认值   |
| :---------: | :---------------------------: | :-----------------------------------------------------------: | :-------: |
|    type     |           `string`            | 警示类型，可选：`primary`,`success`,`info`,`warning`,`danger` | `primary` |
| description |          `ReactNode`          |                   警告提示的辅助性文字介绍                    |
|  className  | `Record<SemanticDOM, string>` |                       语义化结构 class                        |
|   onClose   |   `(e: MouseEvent) => void`   |                     关闭时触发的回调函数                      |
