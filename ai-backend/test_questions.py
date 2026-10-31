from ml.engine import predict_answer

test_cases = [
    ("What kind of developer is Bedaso?", "about"),
    ("Describe Bedaso's background", "about"),

    ("What is Bedaso good at in software development?", "skills"),
    ("Can he build websites?", "skills"),

    ("Tell me about his applications", "projects"),
    ("Which projects are in his portfolio?", "projects"),

    ("Where can I reach him?", "contact"),
    ("How do I get in touch with the developer?", "contact"),

    ("Tell me today's weather", "unknown"),
    ("Explain quantum physics", "unknown"),
]

correct = 0

for question, expected in test_cases:
    result = predict_answer(question)
    actual = result["category"]

    passed = actual == expected

    if passed:
        correct += 1

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {actual}")
    print(f"Score: {result['confidence']}")
    print("Result:", "PASS" if passed else "FAIL")

accuracy = correct / len(test_cases) * 100

print("\n" + "=" * 40)
print(f"Evaluation accuracy: {accuracy:.1f}%")
print(f"Correct: {correct}/{len(test_cases)}")