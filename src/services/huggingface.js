const HF_TOKEN = process.env.REACT_APP_HUGGING_FACE_TOKEN;

if (!HF_TOKEN) {
  console.error('Hugging Face token is not set. Please check your environment variables.');
}

export const generatePattern = async (prompt, imageBase64, params = {}) => {
  try {
    if (!HF_TOKEN) {
      throw new Error('Hugging Face token is not configured');
    }

    // 步驟 1: 準備請求參數
    const payload = {
      inputs: {
        prompt: `pattern design, ${prompt}, seamless pattern, textile design, fabric pattern, high quality, detailed, bright and colorful`,
        image: imageBase64,  // 使用上傳的圖片
        negative_prompt: "dark, black, monochrome, ugly, blurry, low quality, text, watermark",
      },
      parameters: {
        num_inference_steps: 50,
        guidance_scale: 7.5,
        controlnet_conditioning_scale: 0.8,  // 控制參考圖片的影響程度
        width: 768,
        height: 768,
      }
    };

    // 步驟 2: 發送請求到 Hugging Face API
    console.log('Sending request to Hugging Face API with reference image...');
    
    const response = await fetch(
      "https://api-inference.huggingface.co/models/lllyasviel/sd-controlnet-canny",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    // 步驟 3: 處理響應
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    console.log('Image generated successfully');
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating pattern:", error);
    throw error;
  }
}; 