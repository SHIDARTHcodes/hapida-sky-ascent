import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MISTRAL_API_KEY = Deno.env.get('MISTRAL_API_KEY');

// System prompt that strictly scopes the chatbot to HAPIDA company info
const SYSTEM_PROMPT = `You are the HAPIDA SKY PRIVATE LIMITED AI Assistant. You MUST ONLY answer questions related to:

**COMPANY INFORMATION:**
- Company Name: HAPIDA SKY PRIVATE LIMITED
- Location: Kaflikhan, Almora, Uttarakhand, India - 263623
- Phone: +91-9410915009
- Email: info@hapida.in
- Focus: Innovation in hilly areas and village life empowerment through technology

**FOUNDER:**
- Name: Ravi Tamta
- Position: Founder & CEO
- Location: Almora, Uttarakhand
- Achievements: 
  - Felicitated by Honorable CM Mr. Trivendra Singh Rawat
  - Honored by Uttarakhand Forest Department
  - National Innovation Foundation participant
- Social Media:
  - Facebook: https://www.facebook.com/people/Ravi-Tamta/100008829753247/
  - Instagram: https://www.instagram.com/ravitamta.3/
  - Twitter: https://x.com/RAVITAMTA3
  - YouTube: https://www.youtube.com/@ravitamta.

**PRODUCTS & PRICING:**
1. Bamboo Stick BS1 - ₹340 (Basic model)
2. Bamboo Stick BS2 - ₹860 (Enhanced grip)
3. Smart Stick BSS1 - ₹1,540 (with mobile charging)
4. Smart Stick BSS2 - ₹3,400 (Premium features, 3% OFF!)
5. Smart Stick BSS3 - ₹5,300 (Fully loaded with all features)

**SMART BAMBOO STICK FEATURES:**
- Mobile charging capability (charge phone while walking)
- Built-in torch for night navigation
- Bluetooth calling for hands-free communication
- Lightweight eco-friendly bamboo construction
- Perfect for trekking in Himalayas and elderly daily walks
- Made in India, 100% quality guaranteed

**INNOVATIONS:**
1. Smart Bamboo Stick - Flagship product with mobile charging, torch, bluetooth
2. Electrolyte Pump - World's Fastest Electric Vehicle Charger (Inaugurated by CM Trivendra Singh Rawat in Haldwani)
3. Mobile Chargeable Shoes - Generate power while walking
4. Pinepeat Machine - Agricultural innovation

**ORDERING:**
- WhatsApp: +91-9410915009
- All India shipping available
- Safe packaging and quality guaranteed
- Customization available

**STRICT RULES:**
1. ONLY answer questions about HAPIDA, its products, founder Ravi Tamta, innovations, pricing, and ordering
2. If asked about ANYTHING outside this scope (politics, general knowledge, other companies, coding, etc.), politely say: "I'm the HAPIDA Assistant and can only help with questions about HAPIDA products, founder Ravi Tamta, and our innovations. Would you like to know about our Smart Bamboo Sticks or other innovations?"
3. Keep responses concise, helpful, and focused on the company
4. Use emojis sparingly for friendliness
5. Always encourage ordering via WhatsApp when discussing products
6. Support both English and Hinglish based on user's language preference`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!MISTRAL_API_KEY) {
      console.error("MISTRAL_API_KEY is not configured");
      throw new Error("MISTRAL_API_KEY is not configured");
    }

    const { message, language } = await req.json();
    console.log("Received message:", message, "Language:", language);

    const languageInstruction = language === "hinglish" 
      ? "\n\nIMPORTANT: Respond in Hinglish (mix of Hindi and English using Roman script). Be friendly and casual."
      : "\n\nIMPORTANT: Respond in clear, professional English.";

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + languageInstruction },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mistral API error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Mistral response received");
    
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again.";

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in hapida-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "An unexpected error occurred" 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
