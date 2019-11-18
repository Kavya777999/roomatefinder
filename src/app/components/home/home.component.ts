import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location:string;
  city:string;
  roomdata:any[];

  trackByCode(index:number,data1:any):string
  {
    return data1.code
  }
  submit()
  {
    // if(this.location.toLowerCase()=="jntu" && this.city.toLowerCase()=="hyderabad")
    // {
    //   console.log("Location "+this.location+" City "+this.city);
    // }
    // if(this.location.toLowerCase()=="ameerpet" && this.city.toLowerCase()=="hyderabad")
    // {
    //   console.log("Location "+this.location+" City "+this.city);
    // }
    if( !this.city)
    {
      console.log("Location "+this.location+" City "+this.city);
      alert("No Rooms To Display");
    }
    else
    {
      if (this.city.toLowerCase()=="hyderabad")
      {
        this.roomdata=[
          {
            "roomcode":"room 01",
            "place":"JNTU",
            "gender":"Female",
            "roommatesneeded":"1",
            "rent":"15000",
            "contact":"8019212055",
            "email":"test2234@gmail.com"
          },
          {
            "roomcode":"room 02",
            "place":"KPHB",
            "gender":"Male",
            "roommatesneeded":"1",
            "rent":"11000",
            "contact":"8019212344",
            "email":"test3334@gmail.com"
          },
          {
            "roomcode":"room 03",
            "place":"Kukatpally",
            "gender":"Female",
            "roommatesneeded":"2",
            "rent":"14000",
            "contact":"9919212099",
            "email":"test2314@gmail.com"
          },
          {
            "roomcode":"room 04",
            "place":"Miyapur",
            "gender":"Male",
            "roommatesneeded":"3",
            "rent":"8000",
            "contact":"9999212099",
            "email":"test3234@gmail.com"
          },
      ];
      }
      else
      {
        this.roomdata=[
          {
            "roomcode":"room 01",
            "place":"Seethamadhara",
            "gender":"Male",
            "roommatesneeded":"2",
            "rent":"10000",
            "contact":"8019212099",
            "email":"test1234@gmail.com"
          }
        ]    
      }
    }
  }

  constructor() { 
    this.roomdata=[];
  }

  ngOnInit() {
    this.roomdata=[];
  }
  ngOnChanges()
  {
    this.roomdata=[];
  }

}
