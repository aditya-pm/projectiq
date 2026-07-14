from fastapi import FastAPI
from app.pqms.loader import load_requirements
from app.ai.modules.executive_summary import ExecutiveSummary
from app.ai.providers.gemini import GeminiProvider

app = FastAPI()


@app.get("/")
def root():
    return {"message": "ProjectIQ Backend Running"}


@app.get("/overview")
def overview():
    document = load_requirements()
    return document.overview


@app.get("/summary")
async def summary():
    document = load_requirements()
    module = ExecutiveSummary(GeminiProvider())

    return {"summary": await module.generate(document)}
