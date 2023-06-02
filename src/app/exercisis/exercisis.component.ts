import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-exercisis',
  templateUrl: './exercisis.component.html',
  styleUrls: ['./exercisis.component.css']
})
export class ExercisisComponent implements OnInit{
  jugadors: string[] = [];
  constructor(private http: HttpClient){
this.ex5()
  }

  ex5(){
    const data = { millorJ: 'ADRIAAAAA' };
    this.http.post<any>('http://localhost:3080/paupulido/mvp/ADRIAAA', data).subscribe(

    );
  }

  ngOnInit(): void {
    this.getJugadors();
  }

  getJugadors(): void {
    const url = 'http://localhost:3010/api/jugadors';

    this.http.get<string[]>(url)
      .subscribe(
        jugadors => this.jugadors = jugadors,
        error => console.error(error)
      );
  }
}
