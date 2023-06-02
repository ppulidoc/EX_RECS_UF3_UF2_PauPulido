import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-qatar',
  templateUrl: './qatar.component.html',
  styleUrls: ['./qatar.component.css']
})
export class QatarComponent implements OnInit{
  jugadors: string[] = [];
  constructor(private http: HttpClient){
    this.mvp();
  }

  mvp(){
    const data = { millorJ: 'ADRIAAAAASS' };
    this.http.post<any>('http://localhost:3080/paupulido/mvp/ADRIAAA', data).subscribe(

    );
  }

  ngOnInit(): void {
    this.getJugadors();
  }
  getJugadors(): void {
    const url = 'http://localhost:3080/api/jugadors';

    this.http.get<string[]>(url)
      .subscribe(
        jugadors => {
          this.jugadors = jugadors;
        },
        error => {
          console.error(error);
        }
      );
  }
}
