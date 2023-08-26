
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

# Ví dụ 03.MultiComponents + @Input + @Output
==============================================================
- Tìm hiểu cách sử dụng @Input và @Output để tương tác giữa Parent/Child Component với nhau
    - @Input đặt trong Child Component và cho phép Parent Component điều khiển Child Component theo sự cho phép của Child Component
    - @Output đặt trong Child Component và Parent Component sẽ hứng lấy các events xảy ra đối với @Output để có cách ứng xử hợp lý
    
- Parent Component sẽ là 
    - app.component.html
    - app.component.ts
- Child component gồm 2 ComponentUIs:
    - /input-output/*
    - /input-output-02/*
    
