
from ml.scope_classifier import check_scope
from ml.classifier import predict_with_classifier


def predict_portfolio_answer(question):

    # Stage 1: Check whether the question
    # belongs to the portfolio.

    scope_result = check_scope(question)

    if scope_result["scope"] == "out_of_scope":

        return {
            "answer": (
                "I'm Bedaso's portfolio assistant. "
                "I can answer questions about his background, "
                "skills, projects, AI learning, and contact details."
            ),
            "scope": "out_of_scope",
            "category": "unknown",
            "scope_confidence": scope_result["confidence"],
            "category_confidence": None
        }

    # Stage 2: Identify the portfolio category.

    category_result = predict_with_classifier(
        question,
        threshold=0.25
    )

    if category_result["category"] == "unknown":

        return {
            "answer": (
                "I couldn't identify the specific portfolio "
                "information you're asking about. "
                "Try asking about Bedaso's skills, projects, "
                "background, AI learning, or contact details."
            ),
            "scope": "in_scope",
            "category": "unknown",
            "scope_confidence": scope_result["confidence"],
            "category_confidence": category_result["confidence"]
        }

    return {
        "answer": category_result["answer"],
        "scope": "in_scope",
        "category": category_result["category"],
        "scope_confidence": scope_result["confidence"],
        "category_confidence": category_result["confidence"]
    }
