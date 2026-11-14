
from flask import Flask, render_template
from urllib.parse import quote

app = Flask(__name__)

EDUCORE_URL = "https://munirkhan123.pythonanywhere.com"

WHATSAPP_MESSAGE = """Hello MM Edulogix Admin,

I am interested in using the MM Edulogix Smart School Management & School Card Scanner System for my school.

I would like to register my school and request guidance regarding the subscription process and the required activation code.

Please share the registration procedure, available plans, and the steps needed to get started.

Thank you for your assistance.

School Name:"""

WHATSAPP_URL = (
    "https://wa.me/923063832102?text="
    + quote(WHATSAPP_MESSAGE)
)


def get_links():
    return {
        "register": EDUCORE_URL + "/register",
        "school_login": EDUCORE_URL + "/login",
        "teacher_login": EDUCORE_URL + "/teacher/login",
        "demo": EDUCORE_URL + "/demo",
        "whatsapp": WHATSAPP_URL
    }


@app.route("/")
def home():
    return render_template("index.html", links=get_links())


@app.route("/privacy-policy")
def privacy_policy():
    return render_template(
        "info.html",
        page="privacy",
        links=get_links()
    )


@app.route("/terms")
def terms():
    return render_template(
        "info.html",
        page="terms",
        links=get_links()
    )


@app.route("/contact")
def contact():
    return render_template(
        "info.html",
        page="contact",
        links=get_links()
    )


if __name__ == "__main__":
    app.run(debug=True)
