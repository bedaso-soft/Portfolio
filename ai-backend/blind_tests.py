from ml.engine import predict_answer

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

correct = 0

print("\nFRESH TEST RESULTS")
print("=" * 60)

for question, expected in test_cases:
    result = predict_answer(question)
    predicted = result["category"]

    passed = predicted == expected
    correct += passed

    print(f"\nQuestion: {question}")
    print(f"Expected: {expected}")
    print(f"Predicted: {predicted}")
    print(f"Result: {'PASS' if passed else 'FAIL'}")

accuracy = correct / len(test_cases) * 100

print("\n" + "=" * 60)
print(f"Fresh test accuracy: {accuracy:.2f}%")
print(f"Correct: {correct}/{len(test_cases)}")