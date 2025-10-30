[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/syyuan14-sh-disney-mcp-badge.png)](https://mseep.ai/app/syyuan14-sh-disney-mcp)

<h1 align="center">上海迪士尼MCP Server</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/MCP-%23FF6B6B.svg?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/zod-%233068B7.svg?style=for-the-badge&logo=zod&logoColor=white">
  <img src="https://img.shields.io/badge/license-MIT-%237C3AED.svg?style=for-the-badge">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sh-disney-mcp" target="_blank">
    <img src="https://img.shields.io/npm/v/sh-disney-mcp.svg?style=flat&logo=npm" alt="npm version">
  </a>
</p>

## 项目介绍

sh-disney-mcp 是一个基于 Model Context Protocol (MCP) 的mcp server，旨在通过标准化的接口，帮助大模型快速获取上海迪士尼乐园的门票价格和售卖状态信息。

**NPM 包地址**：[sh-disney-mcp](https://www.npmjs.com/package/sh-disney-mcp)

## 功能特性

| 功能描述             | 说明                                     | 状态栏标记 |
| -------------------- | ---------------------------------------- | ---------- |
| 查询一日门票价格信息 | 获取上海迪士尼乐园一日门票的最新价格数据 | ✅ 支持    |
| 查询一日门票售卖情况 | 检查一日门票是否售罄，支持未来日期查询   | ✅ 支持    |
| 查询两日门票价格信息 | 获取上海迪士尼乐园两日门票的最新价格数据 | ✅ 支持    |
| 查询两日门票售卖情况 | 检查两日门票是否售罄，支持未来日期查询   | ✅ 支持    |

## 安装指南

### 前提条件

- Node.js 16.x 或更高版本
- npm 或 pnpm 包管理器

### 安装步骤

1. 克隆项目仓库

```bash
git clone [仓库地址]
cd sh-disney-mcp
```

2. 安装依赖

```bash
pnpm install
```

3. 构建项目

```bash
pnpm run build
```

4. 本地调试

```bash
pnpm run inspect
```

## 使用说明

## 集成MCP host

```json
{
  "mcpServers": {
    "sh-disney-mcp": {
      "command": "npx",
      "args": ["-y", "sh-disney-mcp"]
    }
  }
}
```





<video src="https://github.com/user-attachments/assets/2b83de7f-bd3e-4fc4-9854-ed053d14f427" controls width="600"></video>

## 工具函数说明

### getOneDayTicketSaleInfo

**功能**：检查一日门票的售卖情况，可以用来查看从今天开始未来30天的门票是否售罄。

**参数**：无

**返回值**：包含日期和门票状态的文本信息

### getOneDayTicketPrice

**功能**：获取一日门票的不同类型门票的价格信息。

**参数**：

- `date`: string - 要查询的日期，格式为"yyyy-MM-dd"，例如"2023-12-25"

**返回值**：包含不同类型门票价格的文本信息

### getTwoDayTicketSaleInfo

**功能**：检查两日门票的售卖情况，可以用来查看从今天开始未来30天的门票是否售罄。

**参数**：无

**返回值**：包含日期和门票状态的文本信息

### getTwoDayTicketPrice

**功能**：获取两日门票的不同类型门票的价格信息。

**参数**：

- `date`: string - 要查询的日期，格式为"yyyy-MM-dd"，例如"2023-12-25"

**返回值**：包含不同类型门票价格的文本信息

## 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件

## 贡献指南

欢迎提交 Issues 和 Pull Requests 来帮助改进这个项目。在提交代码前，请确保运行代码质量检查工具以保持代码风格的一致性。
