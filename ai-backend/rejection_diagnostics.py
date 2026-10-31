from ml.classifier import predict_with_classifier

questions = [
    "What technologies does Bedaso use?",
    "Who is the creator of this website?",
    "Which coding languages does he know?",
    "What projects has he built?",
    "How can I contact him?",
    "Does he study machine learning?",

    "What is the capital city of Japan?",
    "Give me a recipe for bread.",
    "Who is the CEO of Google?",
    "Explain quantum physics.",
]

print("\nREJECTION DIAGNOSTICS")
print("=" * 60)

for question in questions:

    result = predict_with_classifier(question)

    print(f"\nQuestion: {question}")
    print(f"Predicted category: {result['category']}")
    print(f"Highest probability: {result['confidence']}")