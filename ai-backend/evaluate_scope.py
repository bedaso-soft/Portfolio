
from ml.scope_classifier import check_scope

from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

test_cases = [

    # Portfolio-related
    ("Who is the developer behind this portfolio?", "in_scope"),
    ("Can I hire Bedaso for a web project?", "in_scope"),
    ("What applications has he developed?", "in_scope"),
    ("What is his experience with backend development?", "in_scope"),
    ("How can I contact him professionally?", "in_scope"),
    ("What is his AI learning journey?", "in_scope"),
    ("Can he develop a hotel booking platform?", "in_scope"),

    # Unrelated
    ("How do I repair a broken television?", "out_of_scope"),
    ("What is the capital of Kenya?", "out_of_scope"),
    ("Give me a recipe for pasta.", "out_of_scope"),
    ("Explain the human digestive system.", "out_of_scope"),
    ("Who is the richest person in the world?", "out_of_scope"),
    ("How can I train a dog?", "out_of_scope"),
    ("What is the weather in Addis Ababa?", "out_of_scope"),
]


y_true = []
y_pred = []

print("\nSCOPE CLASSIFIER EVALUATION")
print("=" * 60)

for question, expected in test_cases:

    result = check_scope(question)
    predicted = result["scope"]

    y_true.append(expected)
    y_pred.append(predicted)

    status = "CORRECT" if predicted == expected else "WRONG"

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {predicted}")
    print(f"Confidence: {result['confidence']}")
    print(f"Result: {status}")


print("\nFINAL EVALUATION")
print("=" * 60)

print("Accuracy:", accuracy_score(y_true, y_pred))

print("\nClassification Report:")
print(classification_report(
    y_true,
    y_pred,
    zero_division=0
))

print("\nConfusion Matrix:")
print(confusion_matrix(
    y_true,
    y_pred,
    labels=["in_scope", "out_of_scope"]
))
