import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = 'user2'
)

cursorObject = dataBase.cursor()

cursorObject.execute("CREATE DATABASE learnx")

print("ALL done")

