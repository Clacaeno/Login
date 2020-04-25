from hashlib import blake2b
import sqlite3

def init():
  my_conn = sqlite3.connect('users.db')
  my_cursor = my_conn.cursor()
  my_cursor.execute("create table if not exists users(name text, password text)")
  my_conn.commit()

def encrypt(text):
  h = blake2b()
  h.update(text.encode('UTF-8'))
  encrypted = h.hexdigest()
  return encrypted

def signup(user, password):
  my_conn = sqlite3.connect('users.db')
  my_cursor = my_conn.cursor()
  line = my_cursor.execute('select * from users where name is ?', (user,)).fetchone()
  
  if line == None:
    my_cursor.execute('insert into users (name, password) values (?, ?)', (user, encrypt(password)))
    my_conn.commit()
    return True
  else:
    print("Someone has that username")
    return False

def login(user, password):
  my_conn = sqlite3.connect('users.db')
  my_cursor = my_conn.cursor()

  line = my_cursor.execute('select * from users where (name, password) is (?, ?)', (user, encrypt(password))).fetchone()

  if line is not None:
    return True
  else:
    return False