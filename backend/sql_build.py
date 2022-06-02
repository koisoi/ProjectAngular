from importlib.metadata import metadata
from sqlalchemy import *
import psycopg2
from psycopg2.extras import DictCursor

host = 'ec2-54-165-90-230.compute-1.amazonaws.com'
database = 'd7ieoetm5g6co7'
user = 'vuhflqyoqrftrk'
port = 5432
password = '2c302ad75484c148d731bd41303620e7753bb2ac58cf2655985eaf1a3dc80776'

conn_str = f'postgresql://{user}:{password}@{host}/{database}'
engine = create_engine(conn_str)
connection = engine.connect()
metadata = MetaData()


t2 = Table('main-event', metadata,
           Column('id', Integer, primary_key=True),
           Column('imgUrl', Text, nullable=True),
           Column('colorType', Text, nullable=True),
           Column('type', Text, nullable=True),
           Column('date', Text, nullable=True),
           Column('description', Text, nullable=True))

t3 = Table('main-slider', metadata,
           Column('imgUrl', Text, nullable=True))

t4 = Table('main-statistic', metadata,
           Column('addition', Text, nullable=True),
           Column('type', Text, nullable=True),
           Column('values', Integer, primary_key=True))

t6 = Table('main-history', metadata,
           Column('imgUrl', Text, nullable=True),
           Column('name', Text, nullable=True),
           Column('faculty', Text, nullable=True),
           Column('description', Text, nullable=True))

t5 = Table('history', metadata,
           Column('name', Text, nullable=True),
           Column('imgUrl', Text, nullable=True))

t6 = Table('users', metadata,
           Column('id', Integer, primary_key=True),
           Column('email', Text, nullable=True),
           Column('password', Text, nullable=True),
           Column('surname', Text, nullable=True),
           Column('name', Text, nullable=True),
           Column('patronymic', Text, nullable=True),
           Column('birthDate', Text, nullable=True),
           Column('counrty', Text, nullable=True),
           Column('city', Text, nullable=True),
           Column('address', Text, nullable=True),
           Column('educationFormP', Text, nullable=True),
           Column('yearInP', Integer, nullable=True),
           Column('yearOfP', Integer, nullable=True),
           Column('educationLevelP', Text, nullable=True),
           Column('institute', Text, nullable=True),
           Column('department', Text, nullable=True),
           Column('educationForm', Text, nullable=True),
           Column('skillLevel', Text, nullable=True),
           Column('yearOf', Integer, nullable=True),
           Column('group', Text, nullable=True),
           Column('work', Text, nullable=True),
           Column('position', Integer, nullable=True),
           Column('periodWorkIn', Integer, nullable=True),
           Column('periodWorkOut', Integer, nullable=True))

t7 = Table('management', metadata,
           Column('id', Integer, primary_key=True),
           Column('FIO', Text, nullable=True),
           Column('position', Text, nullable=True),
           Column('telephone', Text, primary_key=True),
           Column('address', Text, nullable=True))

t8 = Table('managementWithPhoto', metadata,
           Column('id', Integer, primary_key=True),
           Column('FIO', Text, nullable=True),
           Column('position', Text, nullable=True),
           Column('telephone', Integer, primary_key=True),
           Column('address', Text, nullable=True),
           Column('type', Text, nullable=True),
           Column('photo', Text, nullable=True))

t9 = Table('branches', metadata,
           Column('id', Integer, primary_key=True),
           Column('branch', Text, nullable=True),
           Column('head', Text, nullable=True),
           Column('position', Text, nullable=True),
           Column('address', Text, nullable=True),
           Column('telephone', Text, nullable=True),
           Column('email', Text, nullable=True))

t10 = Table('documents', metadata,
            Column('id', Integer, primary_key=True),
            Column('documentName', Text, nullable=True),
            Column('extension', Text, nullable=True))

t11 = Table('meeting-events', metadata,
            Column('id', Integer, primary_key=True),
            Column('title', Text, nullable=True),
            Column('subtitle', Text, nullable=True),
            Column('imgSrc', Text, nullable=True))

t12 = Table('meeting-events-slider', metadata,
            Column('imgUrl', Text, nullable=True))

t13 = Table('creativity', metadata,
            Column('id', Integer, primary_key=True),
            Column('userName', Text, nullable=True),
            Column('patronymic', Text, nullable=True),
            Column('name', Text, nullable=True),
            Column('imgUrl', Text, nullable=True),
            Column('type', Text, nullable=True))

t14 = Table('about-project-slider', metadata,
            Column('imgUrl', Text, nullable=True))

t15 = Table('events', metadata,
            Column('id', Integer, primary_key=True),
            Column('title', Text, nullable=True),
            Column('info', Text, nullable=True),
            Column('date', Text, nullable=True),
            Column('img', Text, nullable=True))

t16 = Table('invited-students', metadata,
            Column('id', Integer, primary_key=True),
            Column('name', Text, nullable=True),
            Column('familyname', Text, nullable=True),
            Column('patronymic', Text, nullable=True),
            Column('institute', Text, nullable=True),
            Column('department', Text, nullable=True),
            Column('speciality', Text, nullable=True),
            Column('group', Text, nullable=True),
            Column('year', Integer, nullable=True),
            Column('email', Text, nullable=True),
            Column('phone', Text, nullable=True),
            Column('address', Text, nullable=True))

t17 = Table('outstanding-students', metadata,
            Column('id', Integer, primary_key=True),
            Column('name', Text, nullable=True),
            Column('img', Text, nullable=True))

t18 = Table('projects', metadata,
            Column('id', Integer, primary_key=True),
            Column('title', Text, nullable=True),
            Column('info', Text, nullable=True),
            Column('img', Text, nullable=True),
            Column('author_id', Integer, nullable=True))

t19 = Table('stories', metadata,
            Column('id', Integer, primary_key=True),
            Column('title', Text, nullable=True),
            Column('info', Text, nullable=True),
            Column('img', Text, nullable=True),
            Column('author_id', Integer, nullable=True))

t20 = Table('institutes', metadata,
            Column('id', Integer, primary_key=True),
            Column('institute', Text, nullable=True))

t21 = Table('departaments', metadata,
            Column('id', Integer, primary_key=True),
            Column('department', Text, nullable=True))

t22 = Table('specialities', metadata,
            Column('id', Integer, primary_key=True),
            Column('speciality', Text, nullable=True))

t23 = Table('groups', metadata,
            Column('id', Integer, primary_key=True),
            Column('group', Text, nullable=True))

metadata.create_all(engine)
