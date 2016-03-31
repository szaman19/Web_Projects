from sqlalchemy import *
def main():
  engine = create_engine\
  ('mysql+mysqlconnector://root:pass@localhost/test')
  connection = engine.connect()
  result = connection.execute("select Name from project")
  for row in result:
    print ("username:", row['Name'])
  connection.close()
main()
