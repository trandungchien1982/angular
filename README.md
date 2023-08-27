
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

# Ví dụ 04.DynamicComponentLoading
(Nạp Component dynamic ngay trong code)

**Tham khảo tại**
```
https://angular.io/guide/dynamic-component-loader
```

==============================================================
- Tìm hiểu cách tạo ra nhiều Dynamic Component để inject vào 1 placeholder nào đó.
- Ta có thể điều khiển ComponentUI với design như bình thường (bộ 3 file: *.ts, *.html, *.css) và có thể nạp dynamic để inject vào 1 vị trí cụ thể
- Ta có thể điều chỉnh data của Dynamic Component UI

**Demo cụ thể**
- Select box dynamic content có 3 options:
  - **Dynamic Component 01** thuộc folder `child-dynamic-01`
  - **Dynamic Component 02** thuộc folder `child-dynamic-02`, gần giống cấu trúc style 01 & data 01
  - **Dynamic Component 03** thuộc folder `child-dynamic-03`, có layout khác hẳn & data cũng khác luôn.
 