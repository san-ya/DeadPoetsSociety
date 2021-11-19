from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedback.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    firstName = db.Column(db.String(20), nullable = False)
    lastName = db.Column(db.String(20), nullable = False)
    email = db.Column(db.String(120), nullable = False)
    message = db.Column(db.String(1000), nullable = False)

    def __repr__(self):
        return f"User('{self.firstName}','{self.lastName}','{self.email}','{self.message}')"

@app.route('/reader', methods = ['POST'])
def reader_details():
    user_details = request.get_json()

    new_user = User (
        firstName = user_details['firstName'],
        lastName = user_details['lastName'],
        email = user_details['email'],
        message = user_details['message']
    )

    db.session.add(new_user)
    db.session.commit()

    return 'Success!'

if __name__ == "__main__":
    db.create_all()
    app.run(debug = True)