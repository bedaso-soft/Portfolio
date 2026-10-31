
from ml.pipeline import predict_portfolio_answer


questions = [
    "Who is Bedaso?",
    "What programming languages does he know?",
    "Tell me about his projects.",
    "What is his AI learning journey?",
    "How can I contact him?",
    "What is the weather in London?",
    "How do I cook rice?",
    "Explain quantum physics."
]


for question in questions:

    result = predict_portfolio_answer(question)

    print("\nQuestion:", question)
    print("Scope:", result["scope"])
    print("Category:", result["category"])
    print("Answer:", result["answer"])
    print("Scope confidence:", result["scope_confidence"])
    print("Category confidence:", result["category_confidence"])
    print("-" * 60)
