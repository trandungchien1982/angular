
# Angular
Các ví dụ liên quan đến việc Angular từ cơ bản đến nâng cao

Mỗi nhánh trong Repo sẽ là 1 ví dụ/ giải pháp/ project mẫu trong Angular

# Môi trường phát triển
- NodeJS LTS : 
```
    node --version
    v18.17.1
```

- Angular CLI
```
    npm install -g @angular/cli
    
    npm --version
    9.6.7

```

- Angular 16.1
```
    ng version
         _                      _                 ____ _     ___
        / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
       / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
      / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
     /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                    |___/
    
    
    Angular CLI: 16.2.0
    Node: 18.17.1
    Package Manager: npm 9.6.7
    OS: win32 x64
    
    Angular:
    ...
    
    Package                      Version
    ------------------------------------------------------
    @angular-devkit/architect    0.1602.0 (cli-only)
    @angular-devkit/core         16.2.0 (cli-only)
    @angular-devkit/schematics   16.2.0 (cli-only)
    @schematics/angular          16.2.0 (cli-only)
```

==============================================================

# Ví dụ 02.LoadDataFromServer

==============================================================
- Nạp data JSON [] vào trong UI
- Thử nghiệm các method : GET/POST/PUT/DELETE với API giả lập từ Wiremock
```
(Execute Batch file: run-wiremock-9000.bat)

GET  http://localhost:9000/list-users
POST http://localhost:9000/add-user
PUT  http://localhost:9000/update-user
DEL  http:/localhost:9000/delete-user/3
```

- Ngoài ra, ta còn giả lập TH request trả về với delay 3s, 5s
```
01.list-users.json
{
  "request": {
    "method": "GET",
    "urlPattern": "/list-users"
  },
  "response": {
    "status": 200,
    "fixedDelayMilliseconds": 3000,
    "headers": {
    


01.delete-user.json
{
  "request": {
    "method": "DELETE",
    "urlPattern": "/delete-user/3"
  },
  "response": {
    "status": 200,
    "fixedDelayMilliseconds": 5000,
    "headers": {

```

