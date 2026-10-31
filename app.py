from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

DATABASE = "kargo.db"


def veritabani_olustur():
    conn = sqlite3.connect(DATABASE)

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS kargolar (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            takip_no TEXT UNIQUE NOT NULL,
            gonderici TEXT NOT NULL,
            alici TEXT NOT NULL,
            konum TEXT NOT NULL,
            durum TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    veritabani_olustur()
    app.run(debug=True)