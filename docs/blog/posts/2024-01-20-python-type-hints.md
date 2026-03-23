---
title: "Python 类型注解实践：从入门到真正用起来"
date: 2024-01-20
tags: [Python, 工程实践]
description: 类型注解不是为了让代码变繁琐，而是让 IDE 帮你更早发现问题。这篇文章聊聊如何在真实项目里用好它。
---

# Python 类型注解实践：从入门到真正用起来

Python 的类型注解（Type Hints）自 3.5 引入，到 3.10+ 已经相当成熟。很多人了解它，但在项目里真正用好的并不多。

## 为什么值得用

类型注解本身不影响运行时行为，但它能让：

- **IDE 自动补全更准确**——不用猜参数类型
- **mypy / pyright 静态检查**——在运行前发现类型错误
- **代码即文档**——函数签名本身说清楚输入输出

## 基础用法

```python
def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}! " * times).strip()

greet("Alice")        # OK
greet("Alice", "3")   # mypy 报错：Expected int, got str
```

## 容器类型

Python 3.9+ 可以直接用内置类型做注解，不需要从 `typing` 导入：

```python
# Python 3.9+
def process(items: list[str]) -> dict[str, int]:
    return {item: len(item) for item in items}

# 旧写法（兼容 3.8-）
from typing import List, Dict
def process(items: List[str]) -> Dict[str, int]: ...
```

## Optional 与 Union

```python
from typing import Optional

# Optional[str] 等价于 str | None
def find_user(user_id: int) -> Optional[str]:
    ...

# Python 3.10+ 可以直接用 |
def find_user(user_id: int) -> str | None:
    ...
```

## TypedDict — 给字典加类型

项目里大量用字典传数据？用 `TypedDict` 让结构清晰：

```python
from typing import TypedDict

class UserProfile(TypedDict):
    name: str
    age: int
    email: str | None

def send_email(user: UserProfile) -> None:
    if user["email"]:
        ...
```

## dataclass — 更好的数据容器

比 `TypedDict` 更进一步，支持方法和默认值：

```python
from dataclasses import dataclass, field

@dataclass
class Config:
    host: str
    port: int = 8080
    tags: list[str] = field(default_factory=list)

cfg = Config(host="localhost")
print(cfg.port)  # 8080
```

## 实践建议

1. **从函数签名开始**，不用一次给所有变量加注解
2. **配置 mypy 或 pyright**，不然注解形同虚设
3. **用 `reveal_type(x)` 调试**，让 mypy 告诉你推断出的类型
4. **避免滥用 `Any`**，用了就等于放弃了这部分的类型检查

类型注解的收益随项目规模增长而增大——小脚本可以不用，中大型项目强烈推荐。
