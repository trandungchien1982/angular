import { Component, OnInit } from "@angular/core";
import { HttpClientModule, HttpHeaders, HttpClient, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Load Data from Http WebServer...';
  messageDeleteUser = '';

  data: string[] = ["Chuỗi 01", "Chuỗi 02", "Chuỗi 03 nhé..."];

  housingLocationList = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `test-CLKGGwIBTaY-unsplash.jpg`,
        availableUnits: 4,
        wifi: true,
        laundry: true
      },
      {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: `abc-wR11KBaB86U-unsplash.jpg`,
        availableUnits: 0,
        wifi: false,
        laundry: true
      },
      {
        id: 2,
        name: 'Warm Beds Housing Support',
        city: 'Juneau',
        state: 'AK',
        photo: `abc-wR11KBaB86U-unsplash.jpg`,
        availableUnits: 1,
        wifi: false,
        laundry: false
      }
  ];

  listUsers = [
    {
      "id": 11666,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ];

  constructor(private http: HttpClient, public router:Router) { }
  ngOnInit() {
    console.log(' >> Init UI in Angular ...');

    console.log(' >> Try to call GET RESTful API ...');
    this.http.get<any>('http://localhost:9000/list-users').subscribe(jsonData => {
        this.listUsers = jsonData;
        console.log(' >> Finish call GET RESTful API: loaded list-users: ' + this.listUsers.length);
    });

    console.log(' >> Try to call POST RESTful API ...');
    this.http.post('http://localhost:9000/add-user', {id: 1, name: 'Name 01'}).subscribe(jsonData => {
        console.log(' >> Finish call POST RESTful API: ' + JSON.stringify(jsonData));
    });

    console.log(' >> Try to call PUT RESTful API ...');
    this.http.put('http://localhost:9000/update-user', {id: 2, name: 'Name 02'}).subscribe(jsonData => {
        console.log(' >> Finish call PUT RESTful API: ' + JSON.stringify(jsonData));
    });

    console.log(' >> Try to call DELETE RESTful API with id = 3');
    this.messageDeleteUser = 'Xóa User: Đang gọi ...';
    this.http.delete('http://localhost:9000/delete-user/3').subscribe(() => {
        console.log(' >> Finish call DELETE RESTful API: Delete Successfully...');
        this.messageDeleteUser = 'ĐÃ XÓA XONG ...';
    });

  }
}
