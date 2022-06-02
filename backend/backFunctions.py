from psycopg2.errors import UndefinedColumn
from sqlalchemy import *
import psycopg2
from psycopg2.extras import DictCursor, RealDictCursor


def get_bd():
    host = 'ec2-54-165-90-230.compute-1.amazonaws.com'
    database = 'd7ieoetm5g6co7'
    user = 'vuhflqyoqrftrk'
    port = 5432
    password = '2c302ad75484c148d731bd41303620e7753bb2ac58cf2655985eaf1a3dc80776'
    # conn_str = f"postgresql://{user}:{password}@{host}/{database}"
    # engine = create_engine(conn_str)
    # connection = engine.connect()
    return host, port, database, user, password


def param_insert(param):
    keys = list(param.keys())
    column = ' ( '
    values = '('
    for key in keys:
        column = column+" "+str(key)+','
        values = values+" '"+str(param[key])+"',"
    values = values[:-1]
    values += ")"
    column = column[:-1]
    column += ")"
    return column, values


def param_select(param):
    condition = ""
    keys = list(param.keys())
    for key in keys:
        param[key] = str(param[key])
        if ('[' and ']' in param[key]) or type(param[key]) == list:
            param[key] = eval(param[key])
            condition = condition + '('
            for par in param[key]:
                condition = condition + str(key) + ' = '
                condition = condition + "'"+str(par)+"'" + ' OR '
            condition = condition[:-3]
            condition += ') AND '

        else:
            condition = condition + \
                '( ' + str(key) + ' = ' + "'" + \
                str(param[key]) + "'" + ' ) AND '
    condition = condition[:-4]
    return condition


def sql_delete(table_name, param):
    host, port, database, user, password = get_bd()
    conn = psycopg2.connect(dbname=database, user=user,
                            password=password, host=host)
    cursor = conn.cursor(cursor_factory=DictCursor)
    delete = "DELETE FROM " + str(table_name)+" WHERE id =" + str(param['id'])
    print(cursor.execute(delete))
    conn.commit()
    conn.close()
    cursor.close()
    return{'response': True}


def sql_insert(table_name, param):
    host, port, database, user, password = get_bd()
    conn = psycopg2.connect(dbname=database, user=user,
                            password=password, host=host)
    param = param_insert(param)
    cursor = conn.cursor(cursor_factory=DictCursor)
    insertstr = "INSERT INTO " + \
        str(table_name)+" " + str(param[0]) + \
        " VALUES "+str(param[1])+" RETURNING id"
    print(cursor.execute(insertstr))
    _id = cursor.fetchone()[0]
    conn.commit()
    conn.close()
    cursor.close()
    return{'response': True, 'id': str(_id)}


def sql_update(table_name, param):
    host, port, database, user, password = get_bd()
    conn = psycopg2.connect(dbname=database, user=user,
                            password=password, host=host)
    # param = param_update(param)
    if param['id']:
        conn = psycopg2.connect(
            dbname=database, user=user, password=password, host=host)
        cursor = conn.cursor(cursor_factory=DictCursor)
        update = "UPDATE "+str(table_name)+" SET " + \
            str(param['colum'])+" WHERE id = "+str(param['id'])
        cursor.execute(update)
        conn.commit()
        conn.close()
        cursor.close()
        return {'response': True}
    else:
        return{'response': False, 'items': 'error id'}


def sql_select(table_name, param):
    host, port, database, user, password = get_bd()
    param = param_select(param)
    conn = psycopg2.connect(dbname=database, user=user,
                            password=password, host=host)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    try:
        if param:
            cursor.execute('SELECT * FROM '+str(table_name) +
                           ' WHERE ' + str(param))
        else:
            cursor.execute("SELECT * FROM "+str(table_name))
        records = cursor.fetchall()
        for i in range(len(records)):
            records[i] = dict(records[i])
        conn.close()
        cursor.close()
        return{'response': True, 'items': records}
    except UndefinedColumn:
        conn.close()
        cursor.close()
        return{'response': False, 'items': 'error-column'}
