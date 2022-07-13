# backend_developer_test
NodeJS: v14.17.6
pgAdmin4: 
    version: 5.5
    Browser: Chromium 92.0.4515.107
    Operating System: macOS-12.1-x86_64-i386-64bit

1.  create .env file
    DB_USERNAME_DEV=[USER_DBMS_USERNAME]
    DB_PW_DEV=[USER_DBMS_PASSWORD]
    DB_DEV=[USER_DB_NAME]

    PORT=[USER_PORT]

    EXAMPLE:
    DB_USERNAME_DEV=postgres
    DB_PW_DEV=admin
    DB_DEV=mydb

    PORT=3001

    SECRET=rahasia
2. on application root directory type "npm start"