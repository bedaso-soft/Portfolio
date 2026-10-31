
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# 1. Training examples

training_questions = [

    # IN SCOPE: portfolio-related questions
    "Who is Bedaso?",
    "Tell me about Bedaso.",
    "What is his professional background?",
    "What programming languages does he know?",
    "What technologies does he use?",
    "Can he build websites?",
    "Does he know React and Next.js?",
    "What is his experience with Python?",
    "Is he learning machine learning?",
    "Does he work with artificial intelligence?",
    "What projects has he built?",
    "Tell me about Bishoftu News.",
    "What is his hotel management system?",
    "Show me his previous software projects.",
    "How can I contact Bedaso?",
    "What is his email address?",
    "Can I hire him?",
    "I want to work with this developer.",
    "How is Bedaso learning artificial intelligence?",
    "What are his AI learning goals?",
    "How does he plan to integrate AI into web applications?",
    "What Python skills is he developing?",
    "What is his interest in machine learning?",
    "Who is the developer behind this portfolio?",
    "Who created this portfolio website?",
    "Tell me about the person behind this website.",
    "Who owns this developer portfolio?",
    "What is the background of this software developer?",
    "Introduce the creator of this portfolio.",
    "Who am I communicating with through this website?",

    # OUT OF SCOPE: unrelated questions
    "What is the capital of Japan?",
    "Who is the president of the United States?",
    "How do I cook rice?",
    "Give me a recipe for bread.",
    "What is the weather in London?",
    "Who won the football World Cup?",
    "Explain quantum physics.",
    "What is the population of Brazil?",
    "Tell me a joke.",
    "How do I learn to play guitar?",
    "What is the distance between Earth and Mars?",
    "Explain the history of ancient Egypt.",
    "How do airplanes fly?",
    "What is the price of gold?",
    "Tell me about famous musicians.",
    "How do I grow tomatoes?",
    "Explain machine learning to me.",
    "Teach me how neural networks work.",
    "What is supervised learning?",
    "How does artificial intelligence work?",
    "Explain deep learning with examples.",
    "Teach me Python programming.",
    "How do I prepare Ethiopian food?",
    "Give me a traditional injera recipe.",
    "How do I make doro wat?",
    "Teach me how to cook shiro.",
    "How can I prepare a healthy breakfast?",
    "Recommend a restaurant for dinner.",
]


labels = (
    ["in_scope"] * 30
    + ["out_of_scope"] * 28
)


# 2. Convert text into numerical features

vectorizer = TfidfVectorizer(
    lowercase=True,
    ngram_range=(1, 2),
    sublinear_tf=True
)

X = vectorizer.fit_transform(training_questions)


# 3. Train the model

model = LogisticRegression(
    max_iter=1000,
    class_weight="balanced"
)

model.fit(X, labels)


# 4. Prediction function

def check_scope(question):

    question_vector = vectorizer.transform([question])

    prediction = model.predict(question_vector)[0]

    probabilities = model.predict_proba(question_vector)[0]

    confidence = float(max(probabilities))

    return {
        "scope": prediction,
        "confidence": round(confidence, 3)
    }

def evaluate_scope(test_cases):

    y_true = []
    y_pred = []

    for question, expected in test_cases:

        result = check_scope(question)

        y_true.append(expected)
        y_pred.append(result["scope"])

    print("\nACCURACY:")
    print(accuracy_score(y_true, y_pred))

    print("\nCLASSIFICATION REPORT:")
    print(classification_report(
        y_true,
        y_pred,
        zero_division=0
    ))

    print("\nCONFUSION MATRIX:")
    print(confusion_matrix(
        y_true,
        y_pred,
        labels=["in_scope", "out_of_scope"]
    ))


# 5. Test the model

if __name__ == "__main__":

    test_questions = [
        # Portfolio-related
        "What kind of developer is Bedaso?",
        "Can I see his software development work?",
        "Does he have experience building management systems?",
        "Which technologies could he use for my project?",
        "Where can I send a job offer?",
        "What is his current AI learning focus?",
        "Can he integrate AI features into a website?",

        # Unrelated
        "Who invented the telephone?",
        "What are the symptoms of malaria?",
        "How can I prepare Ethiopian injera?",
        "Who won the last football World Cup?",
        "Explain the solar system.",
        "What is the exchange rate of the dollar?",
        "Teach me how to play chess.",
    ]

    for question in test_questions:

        result = check_scope(question)

        print("\nQuestion:", question)
        print("Scope:", result["scope"])
        print("Confidence:", result["confidence"])
