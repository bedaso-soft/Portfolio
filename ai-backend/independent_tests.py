
from ml.classifier import predict_with_classifier
from sklearn.metrics import accuracy_score, classification_report

test_cases = [
    # About
    ("What kind of professional is behind this portfolio?", "about"),
    ("Can you introduce the person who owns this website?", "about"),
    ("What is the developer's educational background?", "about"),

    # Skills
    ("Could he create an online platform for my company?", "skills"),
    ("What programming tools does he work with?", "skills"),
    ("Can he build a responsive business website?", "skills"),

    # Python / AI
    ("Is he exploring ways to make software intelligent?", "python_ai"),
    ("What does he want to accomplish with artificial intelligence?", "python_ai"),
    ("Does he combine Python with web development?", "python_ai"),

    # Projects
    ("Which digital products has he worked on?", "projects"),
    ("Tell me about the applications in his portfolio.", "projects"),
    ("Has he created any real-world software systems?", "projects"),

    # Contact
    ("Where should I send a project inquiry?", "contact"),
    ("I would like to discuss hiring this developer.", "contact"),
    ("How can a potential client reach him?", "contact"),

    # Unknown
    ("What is the population of Brazil?", "unknown"),
    ("How do I cook rice?", "unknown"),
    ("Explain the theory of relativity.", "unknown"),
    ("Who won the football World Cup?", "unknown"),
    ("What is the weather in London?", "unknown"),
]

y_true = []
y_pred = []

print("\nINDEPENDENT TEST")
print("=" * 65)

for question, expected in test_cases:

    result = predict_with_classifier(question, threshold=0.25)

    predicted = result["category"]

    y_true.append(expected)
    y_pred.append(predicted)

    status = "CORRECT" if expected == predicted else "WRONG"

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {predicted}")
    print(f"Confidence: {result['confidence']}")
    print(f"Result: {status}")

print("\nFINAL RESULTS")
print("=" * 65)

print("Accuracy:", accuracy_score(y_true, y_pred))

print("\nClassification Report:")
print(classification_report(y_true, y_pred, zero_division=0))
