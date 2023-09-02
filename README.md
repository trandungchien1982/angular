
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

# Ví dụ 08.ApplyLibraries
==============================================================
- Tìm hiểu về cách tạo Custom Library để sử dụng cho nhiều projects khác nhau...
- Tham khảo :
  - https://angular.io/guide/creating-libraries
  - rothsandro/angular-library-example: Example repo for building an Angular Library with multiple entry points
    (https://github.com/rothsandro/angular-library-example)
  - https://sandroroth.com/blog/angular-library
<br/>
PHẦN XỬ LÝ COMPONENTS NÀY KHÁ RẮC RỐI VÀ KHÁ TỐN THỜI GIAN.<br/>
<br/>
SẼ QUAY LẠI TÌM HIỂU SAU KHI CÓ NHU CẦU THỰC TẾ<br/>
(TỪ PROJECT/ YÊU CẦU BẮT BUỘC/ …)<br/>

- Vào folder chính & chạy app
```
cd my-app
ng serve --open
```

- Kiểm tra kết quả
```
http://localhost:4200/
```

- Chạy các test cases (nằm trong file *.spec.ts)
```
ng test
```

- Lưu ý: TH clone code từ Github về và cần build lại project để tạo folder 'node-modules' thì ta gọi lệnh sau:
```
npm ci
```
