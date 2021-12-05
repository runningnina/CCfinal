from flask import Flask,render_template, redirect, url_for, request, flash,jsonify
import time
from flask_cors import CORS #comment this on deployment
import requests


app = Flask(__name__)
CORS(app)



@app.route('/getCompanies')
def getCompanies():
    companies=[]
    for i in range(0,10):
        company={}
        # dont forget the images
        company['name'] = i
        company['short'] = 'short desc ',i
        company['formLink'] = "https://www.youtube.com"
        company['long'] = 'long desc It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ',i
        companies.append(company)
    return {'data':companies}


@app.route('/getEvents')
def getEvents():
    events=[]
    for i in range(0,5):
        event={}
        # dont forget the images of events
        event['name'] = "Name of the event is ",i
        event['details'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        event['date'] = '2021-11-19'
        event['resources'] = "say a GDrive link",i
        events.append(event)
    return {'data':events}


@app.route('/getQuestionCompany')
def getQuestionCompany():
    tnames=[]
    ntnames=[]
    for i in range(0,5):
        tnames.append(i)
        ntnames.append(5-i)
    return {'datat':tnames,'datant':ntnames}


@app.route("/getQuestionCompanyName", methods = ["POST"], strict_slashes = False)
def getQuestionCompanyName():
   name = request.json['name']
   print(name)
   # fetch questions and answers for the given company name
   list=[]
   for i in range(0,5):
       list.append({'question':'Whatsupp? {}'.format(i),'answer':'All Cool {}'.format(i)})
   return{'data':list}


if __name__ == '__main__':
  app.run(debug=True)

