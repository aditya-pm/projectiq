from app.ai.providers.base import AIProvider
from app.pqms.models import RequirementsDocument


class ExecutiveSummary:

    def __init__(self, provider: AIProvider):
        self.provider = provider

    async def generate(self, document: RequirementsDocument) -> str | None:
        system_prompt = """
You are an expert Solution Architect.
Generate an executive summary.
"""

        user_prompt = f"""
Project
{document.overview.coreObjective}
"""

        return await self.provider.generate(
            system_prompt,
            user_prompt,
        )
