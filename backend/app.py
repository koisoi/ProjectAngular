from turtle import back
from flask import Flask, request
from flask_cors import CORS
import backFunctions

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False


@app.route("/get-aboutprojectslider")
def get_aboutprojectslider():
    return backFunctions.sql_select('aboutprojectslider', {})


@app.route("/get-branches")
def get_branches():
    return backFunctions.sql_select('branches', {})


@app.route("/get-creativity")
def get_creativity():
    return backFunctions.sql_select('creativity', {})


@app.route("/get-departaments")
def get_departaments():
    return backFunctions.sql_select('departaments', {})


@app.route("/get-documents")
def get_documents():
    return backFunctions.sql_select('documents', {})


@app.route("/get-events")
def get_events():
    return backFunctions.sql_select('events', {})


@app.route("/get-groups")
def get_groups():
    return backFunctions.sql_select('groups', {})


@app.route("/get-history")
def get_history():
    return backFunctions.sql_select('history', {})


@app.route("/get-institutes")
def get_institutes():
    return backFunctions.sql_select('institutes', {})


@app.route("/get-invitedstudents")
def get_invitedstudents():
    return backFunctions.sql_select('invitedstudents', {})


@app.route("/get-mainevent")
def get_mainevent():
    return backFunctions.sql_select('mainevent', {})


@app.route("/get-mainhistory")
def get_mainhistory():
    return backFunctions.sql_select('mainhistory', {})


@app.route("/get-mainslider")
def get_mainslider():
    return backFunctions.sql_select('mainslider', {})


@app.route("/get-mainstatistic")
def get_mainstatistic():
    return backFunctions.sql_select('mainstatistic', {})


@app.route("/get-management")
def get_management():
    return backFunctions.sql_select('management', {})


@app.route("/get-managementwithphoto")
def get_managementwithphoto():
    return backFunctions.sql_select('managementwithphoto', {})


@app.route("/get-meetingevents")
def get_meetingevents():
    return backFunctions.sql_select('meetingevents', {})


@app.route("/get-meetingeventsslider")
def get_meetingeventsslider():
    return backFunctions.sql_select('meetingeventsslider', {})


@app.route("/get-news")
def get_news():
    return backFunctions.sql_select('news', {})


@app.route("/get-success")
def get_success():
    return backFunctions.sql_select('news', {'type': 'success'})


@app.route("/get-outstandingstudents")
def get_outstandingstudents():
    return backFunctions.sql_select('outstandingstudents', {})


@app.route("/get-projects")
def get_projects():
    return backFunctions.sql_select('projects', {})


@app.route("/get-specialities")
def get_specialities():
    return backFunctions.sql_select('specialities', {})


@app.route("/get-stories")
def get_stories():
    return backFunctions.sql_select('stories', {})


@app.route("/get-users")
def get_users():
    return backFunctions.sql_select('users', {})


@app.route("/invite-groupmate")
def invite_groupmate():
    params = {
        'name': request.args.get('name'),
        'familyname': request.args.get('familyname'),
        'patronymic': request.args.get('patronymic'),
        'institute': request.args.get('institute'),
        'department': request.args.get('department'),
        'speciality': request.args.get('speciality'),
        'groups': request.args.get('groups'),
        'email': request.args.get('email'),
        'phone': request.args.get('phone'),
        'address': request.args.get('address')
    }
    if (request.args.get('year') != 'null'):
        params['year'] = int(request.args.get('year'))
    return backFunctions.sql_insert('invitedstudents', params)


if __name__ == '__main__':
    app.run()
