from ml.engine import predict_answer
from ml.classifier import predict_with_classifier


questions = [
    "Tell me about the creator of this website.",
    "What is the author's professional profile?",
    "Which coding languages and frameworks does he use?",
    "Can he develop a digital platform for a business?",
    "Does he have experience with predictive models?",
    "What is his interest in intelligent applications?",
    "Can you show me the software he has produced?",
    "What are some examples of his completed work?",
    "I want to discuss a business opportunity with him.",
    "How do I communicate with the developer?",
]

print("\nMODEL COMPARISON")
print("=" * 75)

for question in questions:

    old_result = predict_answer(question)

    new_result = predict_with_classifier(question)

    print(f"\nQuestion: {question}")

    print(
        f"Hybrid model: {old_result['category']} "
        f"({old_result['confidence']})"
    )

    print(
        f"Classifier:   {new_result['category']} "
        f"({new_result['confidence']})"
    )