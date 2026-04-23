export async function GET(request) {
  try {
    const prompts = [
      // Property 1: Semi-Detached Duplex
      "Professional architectural photography of a modern 4-bedroom semi-detached duplex in Abuja Nigeria, pristine white exterior walls, large floor-to-ceiling glass windows, warm wooden door and window frames, sloped contemporary roof, small balconies with green potted plants, clean minimalist luxury design, palm trees visible in background, golden hour lighting, clear blue sky, photorealistic, high detail, 8k quality",

      // Property 2: Executive Terraces
      "Professional architectural photography of modern 5-bedroom executive terraced townhouses in Maitama Abuja Nigeria, row of connected white facade units, floor-to-ceiling glass windows throughout, warm wooden accents on doors and frames, multiple connected units visible, rooftop terraces with greenery and plants, contemporary Nigerian luxury residential architecture, golden sunset lighting, palm trees and tropical landscaping, photorealistic, ultra detailed, architectural digest style",

      // Property 3: Blockchain Villa
      "Professional architectural photography of an ultra-luxury modern 6-bedroom smart villa in Asokoro Abuja Nigeria, futuristic white and glass architecture, massive floor-to-ceiling glass panels, contemporary geometric design, rooftop terrace with ambient LED lighting strips, high-tech minimalist aesthetic, lush tropical landscaping with palm trees, evening blue hour photography with warm interior lights glowing, photorealistic, architectural masterpiece, 8k ultra detailed",
    ];

    const imageUrls = [];

    for (const prompt of prompts) {
      const encodedPrompt = encodeURIComponent(prompt);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CREATE_APP_URL || "http://localhost:3000"}/integrations/dall-e-3/?prompt=${encodedPrompt}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to generate image: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.data && data.data.length > 0) {
        imageUrls.push(data.data[0]);
      }
    }

    return Response.json({
      success: true,
      images: imageUrls,
      message: "Property images generated successfully",
    });
  } catch (error) {
    console.error("Error generating property images:", error);
    return Response.json(
      {
        success: false,
        error: error.message,
        message: "Failed to generate property images",
      },
      { status: 500 },
    );
  }
}
