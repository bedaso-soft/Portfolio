
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from ml.pipeline import predict_portfolio_answer


app = FastAPI(
    title="Bedaso Portfolio AI",
    description="Two-stage ML-powered portfolio assistant"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)


class ChatRequest(BaseModel):
    message: str = Field(
        min_length=1,
        max_length=1000
    )


@app.get("/")
def home():
    return {
        "status": "running",
        "service": "Bedaso Portfolio AI",
        "model": "Two-stage ML pipeline"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    result = predict_portfolio_answer(
        request.message.strip()
    )

    return {
        "success": True,
        "reply": result["answer"],
        "scope": result["scope"],
        "category": result["category"],
        "scope_confidence": result["scope_confidence"],
        "category_confidence": result["category_confidence"]
    }
