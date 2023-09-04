
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

# Ví dụ 10.BuildEnvDockerNginx
==============================================================
<br/>
**Tiến hành build 1 project Angular ra dạng Docker & chạy trên môi trường Production (vd như nginx)**

- CLI để build Docker image:
```
    ./build-docker.sh
```

- CLI để deploy WebApp sử dụng Docker ngay trên host hiện tại, e.g. localhost:
```
    ./run-docker.sh
```

- Chaỵ Docker & xem kết quả tại localhost:9100 :
```
    docker images
    docker stop angular-demo
    docker rm angular-demo
    docker run -p 9100:80 --name angular-demo -d --env PORT=80 tdchien1982/angular:10.build-docker-nginx
```

- Xem kết quả trên server deploy (chẳng hạn như localhost):
```
    http://localhost:9100
```
