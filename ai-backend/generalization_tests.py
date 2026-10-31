from ml.engine import predict_answer

test_cases = [
    # ABOUT
    ("Give me a short introduction to the person behind this site.", "about"),
    ("What is this developer's background?", "about"),

    # SKILLS
    ("Could he build an online presence for my shop?", "skills"),
    ("What can he offer a company looking for a website?", "skills"),

    # PYTHON / AI
    ("Is he exploring intelligent software systems?", "python_ai"),
    ("Does he study ways to make computers learn?", "python_ai"),

    # PROJECTS
    ("Show me what he has created so far.", "projects"),
    ("I want to see examples of his previous work.", "projects"),

    # CONTACT
    ("I need to get hold of him.", "contact"),
    ("Where can I reach the person who owns this site?", "contact"),

    # UNKNOWN
    ("Who is the CEO of Google?", "unknown"),
    ("How can I improve my cooking?", "unknown"),
    ("Explain the theory of relativity.", "unknown"),
]

correct = 0

print("\nGENERALIZATION TEST")
print("=" * 60)

for question, expected in test_cases:
    result = predict_answer(question)

    predicted = result["category"]
    passed = predicted == expected

    if passed:
        correct += 1

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {predicted}")
    print(f"Result: {'PASS' if passed else 'FAIL'}")

accuracy = correct / len(test_cases) * 100

print("\n" + "=" * 60)
print(f"Generalization accuracy: {accuracy:.2f}%")
print(f"Correct: {correct}/{len(test_cases)}")