from google import genai

from app.ai.providers.base import AIProvider
from app.config import GEMINI_API_KEY


class GeminiProvider(AIProvider):

    def __init__(self):
        self.client = genai.Client(api_key=GEMINI_API_KEY)

    async def generate(
        self,
        system_prompt: str,
        user_prompt: str,
    ) -> str | None:

        response = self.client.models.generate_content(
            model="gemini-3.5-flash",
            contents=user_prompt,
            config={
                "system_instruction": system_prompt,
            },
        )

        return response.text
