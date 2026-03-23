---
title: "深入理解 Vue 3 响应式原理"
date: 2024-03-10
tags: [Vue, JavaScript, 前端]
description: 从 Proxy 到 effect，逐步拆解 Vue 3 reactivity 系统的核心机制。
---

# 深入理解 Vue 3 响应式原理

Vue 3 的响应式系统基于 ES6 `Proxy`，相比 Vue 2 的 `Object.defineProperty` 有了根本性的改变。本文从源码角度逐步拆解它的核心机制。

## 从一个例子开始

```javascript
import { reactive, effect } from '@vue/reactivity'

const state = reactive({ count: 0 })

effect(() => {
  console.log('count is:', state.count)
})

state.count++ // 触发 effect 重新执行
```

这段代码的背后，发生了什么？

## Proxy 拦截

`reactive()` 本质上是对原始对象包了一层 `Proxy`：

```typescript
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      track(target, key) // 依赖收集
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      trigger(target, key) // 触发更新
      return result
    },
  })
}
```

## 依赖收集（track）

当 `effect` 函数执行时，Vue 会将当前 effect 记录为"活跃副作用"。每次访问响应式对象的属性，`track` 函数就把这个 effect 登记到该属性的订阅列表中。

```typescript
let activeEffect: EffectFn | null = null

function track(target, key) {
  if (!activeEffect) return
  // target → key → Set<EffectFn>
  let depsMap = targetMap.get(target)
  if (!depsMap) targetMap.set(target, (depsMap = new Map()))
  let deps = depsMap.get(key)
  if (!deps) depsMap.set(key, (deps = new Set()))
  deps.add(activeEffect)
}
```

## 触发更新（trigger）

当属性被赋新值，`trigger` 找出所有订阅了该属性的 effects 并重新执行：

```typescript
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects?.forEach(effect => effect())
}
```

## 小结

Vue 3 响应式的核心链路非常简洁：

```
reactive(obj)  →  Proxy 拦截 get/set
                      ↓
get 时 track   →  记录当前 activeEffect
set 时 trigger →  重新执行所有订阅的 effects
```

理解这条链路，`computed`、`watch`、`ref` 都只是在此基础上的封装。
