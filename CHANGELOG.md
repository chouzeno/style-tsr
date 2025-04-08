# 版本更新日誌

## [1.0.0] - 2024-03-21

### 功能特點
- 基於 React 和 Tailwind CSS 的前端界面
- 圖片上傳功能，支持拖放操作
- 文化背景描述輸入
- 使用 Hugging Face API 進行圖案生成
- 虛擬試衣展示區域

### 技術細節
- 使用 Stable Diffusion XL 模型進行圖案生成
- 支持高質量圖像輸出（768x768 像素）
- 整合了進階生成參數控制
- 實現了安全的 API 密鑰管理

### API 整合
- 使用 Hugging Face API 進行圖案生成
- 模型：stabilityai/stable-diffusion-xl-base-1.0
- 支持自定義生成參數：
  - 步驟數（num_inference_steps）
  - 引導程度（guidance_scale）
  - 圖像尺寸（width/height）
  - 正面/負面提示詞

### 環境要求
- Node.js
- React 18
- 有效的 Hugging Face API Token 