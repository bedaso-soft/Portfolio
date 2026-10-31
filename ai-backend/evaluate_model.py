from ml.engine import predict_answer
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# New questions not copied from the training dataset
test_cases = [
    # ABOUT
    ("Could you introduce Bedaso to me?", "about"),
    ("What does Bedaso do professionally?", "about"),
    ("I want to learn about Bedaso", "about"),
    ("Who is the person behind this portfolio?", "about"),

    # SKILLS
    ("Which technologies are part of his toolkit?", "skills"),
    ("What programming tools does he use?", "skills"),
    ("Can he create a website for a business?", "skills"),
    ("Does he work with JavaScript and React?", "skills"),
    ("What are his technical strengths?", "skills"),

    # PYTHON / AI
    ("Is Python part of his learning?", "python_ai"),
    ("What is he studying about machine learning?", "python_ai"),
    ("Does he explore artificial intelligence?", "python_ai"),

    # PROJECTS
    ("Can I see the work in his portfolio?", "projects"),
    ("Name the software projects in his portfolio", "projects"),
    ("Which web applications has he developed?", "projects"),
    ("What applications are included in his work?", "projects"),

    # CONTACT
    ("How can I reach Bedaso directly?", "contact"),
    ("Where should I send an email?", "contact"),
    ("I would like to hire him. How?", "contact"),

    # UNKNOWN
    ("What is the weather in Jimma?", "unknown"),
    ("Who is the president of the United States?", "unknown"),
    ("How do I cook injera?", "unknown"),
    ("What is the latest football score?", "unknown"),
    ("Explain quantum physics", "unknown"),
    ("Convert 100 dollars to birr", "unknown"),
]


# Store actual and predicted categories
y_true = []
y_pred = []

print("\nINDIVIDUAL TEST RESULTS")
print("=" * 60)

for question, expected in test_cases:

    result = predict_answer(question)
    predicted = result["category"]

    y_true.append(expected)
    y_pred.append(predicted)

    status = "PASS" if expected == predicted else "FAIL"

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {predicted}")
    print(f"Score: {result['confidence']}")
    print(f"Result: {status}")


# Calculate evaluation metrics
accuracy = accuracy_score(y_true, y_pred)

labels = [
    "about",
    "skills",
    "python_ai",
    "projects",
    "contact",
    "unknown"
]

print("\n" + "=" * 60)
print("MODEL EVALUATION")
print("=" * 60)

print(f"\nAccuracy: {accuracy * 100:.2f}%")

print("\nPRECISION, RECALL AND F1-SCORE:")
print(
    classification_report(
        y_true,
        y_pred,
        labels=labels,
        zero_division=0
    )
)

print("CONFUSION MATRIX:")
print("Label order:", labels)

print(
    confusion_matrix(
        y_true,
        y_pred,
        labels=labels
    )
)