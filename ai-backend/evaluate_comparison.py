
from ml.engine import predict_answer
from ml.classifier import predict_with_classifier

from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

test_cases = [
    ("Tell me about the creator of this website.", "about"),
    ("What is the author's professional profile?", "about"),
    ("Which coding languages and frameworks does he use?", "skills"),
    ("Can he develop a digital platform for a business?", "skills"),
    ("Does he have experience with predictive models?", "python_ai"),
    ("What is his interest in intelligent applications?", "python_ai"),
    ("Can you show me the software he has produced?", "projects"),
    ("What are some examples of his completed work?", "projects"),
    ("I want to discuss a business opportunity with him.", "contact"),
    ("How do I communicate with the developer?", "contact"),
    ("What is the capital city of Japan?", "unknown"),
    ("Give me a recipe for making bread.", "unknown"),
]

y_true = []
hybrid_predictions = []
classifier_predictions = []

print("\nINDIVIDUAL PREDICTIONS")
print("=" * 70)

for question, expected in test_cases:

    hybrid = predict_answer(question)
    raw = predict_with_classifier(question, threshold=0.0)
    classifier = predict_with_classifier(question, threshold=0.25)

    y_true.append(expected)
    hybrid_predictions.append(hybrid["category"])
    classifier_predictions.append(classifier["category"])

    correct = classifier["category"] == expected

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Raw prediction: {raw['category']}")
    print(f"Confidence: {raw['confidence']}")
    print(f"After rejection: {classifier['category']}")
    print(f"Result: {'CORRECT' if correct else 'WRONG'}")


print("\nLOGISTIC REGRESSION RESULTS")
print("=" * 70)

print("Accuracy:", accuracy_score(y_true, classifier_predictions))

print("\nClassification Report:")
print(classification_report(
    y_true,
    classifier_predictions,
    zero_division=0
))

print("\nConfusion Matrix:")
print(confusion_matrix(
    y_true,
    classifier_predictions,
    labels=["about", "skills", "python_ai", "projects", "contact", "unknown"]
))


print("\nHYBRID MODEL RESULTS")
print("=" * 70)

print("Accuracy:", accuracy_score(y_true, hybrid_predictions))
