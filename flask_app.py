
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, url_for

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Flask!'
    
@app.route('/details')
def hello_world():
    return url_for('static',filename='style.css')
    
if __name__ == '__main__':
	app.debug = True
	app.run()

