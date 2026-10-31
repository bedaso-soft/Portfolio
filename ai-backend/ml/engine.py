import re

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from ml.knowledge import KNOWLEDGE


# Prepare training examples
questions = []
categories = []
answers = {}

for item in KNOWLEDGE:
    answers[item["category"]] = item["answer"]

    for question in item["questions"]:
        questions.append(question)
        categories.append(item["category"])


# Category-specific question clues
CATEGORY_HINTS = {
    "about": [
        "who is bedaso",
        "about bedaso",
        "background",
        "introduce",
        "introduction",
        "what does bedaso do",
        "professionally",
        "person behind",
    ],

    "skills": [
        "good at",
        "software development",
        "technical skills",
        "technical abilities",
        "technical strengths",
        "strengths",
        "programming",
        "technology stack",
        "technologies",
        "build websites",
        "web development",
        "website",
        "websites",
        "javascript",
        "react",
        "next.js",
        "node.js",
        "laravel",
        "python",
        "online presence",
        "business website",
        "website for my shop",
    ],

    "python_ai": [
        "python",
        "machine learning",
        "artificial intelligence",
        "ai",
        "intelligent software",
        "computers learn",
        "learn from data",
    ],

    "projects": [
        "project",
        "projects",
        "application",
        "applications",
        "portfolio",
        "bishoftu news",
        "hotel management",
        "projecthub",
        "created",
        "previous work",
        "examples of his work",
    ],

    "contact": [
        "contact",
        "email",
        "hire",
        "reach",
        "get in touch",
        "message",
        "get hold",
    ],
}


# TF-IDF model
vectorizer = TfidfVectorizer(
    lowercase=True,
    stop_words=None,
    sublinear_tf=True,
    ngram_range=(1, 2)
)

question_vectors = vectorizer.fit_transform(questions)


def predict_answer(user_question):

    # Normalize the question
    normalized = re.sub(
        r"[^a-z0-9 ]",
        " ",
        user_question.lower()
    )

    normalized = " ".join(normalized.split())

    # Find relevant category hints
    hinted_categories = []

    for category, hints in CATEGORY_HINTS.items():
        if any(hint in normalized for hint in hints):
            hinted_categories.append(category)

    # Reject questions outside portfolio topics
    if not hinted_categories:
        return {
            "answer": (
                "I don't have enough information "
                "to answer that question. Try asking "
                "about Bedaso, his skills, projects, "
                "AI learning or contact details."
            ),
            "category": "unknown",
            "confidence": 0.0
        }

    # Convert question into numerical features
    user_vector = vectorizer.transform([user_question])

    # Calculate similarities
    similarities = cosine_similarity(
        user_vector,
        question_vectors
    )[0]

    # Calculate the strongest score per category
    category_scores = {}

    for category in hinted_categories:
        matching_scores = [
            similarities[i]
            for i in range(len(categories))
            if categories[i] == category
        ]

        category_scores[category] = float(
            max(matching_scores)
        )

    # Select the strongest hinted category
    best_category = max(
        category_scores,
        key=category_scores.get
    )

    best_score = category_scores[best_category]

    # Reject extremely weak matches
    if best_score < 0.10:
        return {
            "answer": (
                "I don't have enough information "
                "to answer that question. Please ask "
                "about Bedaso's portfolio."
            ),
            "category": "unknown",
            "confidence": round(best_score, 3)
        }

    return {
        "answer": answers[best_category],
        "category": best_category,
        "confidence": round(best_score, 3)
    }