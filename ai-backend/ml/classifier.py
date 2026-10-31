from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

from ml.knowledge import KNOWLEDGE


# 1. Prepare training data
questions = []
labels = []
answers = {}

for item in KNOWLEDGE:
    category = item["category"]

    answers[category] = item["answer"]

    for question in item["questions"]:
        questions.append(question)
        labels.append(category)


# 2. Convert text into numerical features
vectorizer = TfidfVectorizer(
    lowercase=True,
    ngram_range=(1, 2),
    sublinear_tf=True
)

X = vectorizer.fit_transform(questions)


# 3. Create and train the classifier
model = LogisticRegression(
    max_iter=1000,
    class_weight="balanced"
)

model.fit(X, labels)


# 4. Predict a category
def predict_with_classifier(user_question, threshold=0.30):

    user_vector = vectorizer.transform([user_question])

    predicted_category = model.predict(user_vector)[0]

    probabilities = model.predict_proba(user_vector)[0]

    confidence = float(max(probabilities))

    # Reject predictions below the threshold
    if confidence < threshold:
        return {
            "answer": (
                "I don't have enough information "
                "to answer that question. Please ask "
                "about Bedaso, his skills, projects, "
                "AI learning or contact details."
            ),
            "category": "unknown",
            "confidence": round(confidence, 3)
        }

    return {
        "answer": answers[predicted_category],
        "category": predicted_category,
        "confidence": round(confidence, 3)
    }