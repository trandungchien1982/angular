
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

# Ví dụ 06.MultiLanguages-i18n
==============================================================<br/>
Tham khảo library home page:<br/>
https://www.npmjs.com/package/angular-i18next

Tham khảo Demo: <br/>
https://romanchuk.github.io/angular-i18next-demo/

Tham khảo ví dụ: <br/>
https://phrase.com/blog/posts/angular-l10n-with-i18next/

- Tìm hiểu về xử lý đa ngôn ngữ bằng thư viện i18next
- Apply đa ngôn ngữ ngay trong file HTML
- Apply đa ngôn ngữ trong code TypeScript

- Cài đặt thư viện i18next
```
    npm install i18next --save
    npm install angular-i18next --save
```

# TẠM THỜI VẪN ĐANG BỊ STUCK TRONG VIỆC TRIỂN KHAI VÍ DỤ VỚI i18next
**Vậy nên Author sẽ skip phần này, khi nào có nhu cầu thực tế sẽ quay trở lại**
- Ta có thể tham khảo code mẫu trong này :
  - https://www.i18next.com/overview/getting-started
  - https://www.npmjs.com/package/angular-i18next
  - https://romanchuk.github.io/angular-i18next-demo/

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
