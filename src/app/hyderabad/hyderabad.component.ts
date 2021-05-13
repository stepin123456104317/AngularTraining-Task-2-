import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.component.html',
  styleUrls: ['./hyderabad.component.css']
})
export class HyderabadComponent implements OnInit {

  constructor() { }
  public values=""
  ngOnInit(): void {
  }
  users=[{"userid":101,"username":"arun","city":"banglore"},
{"userid":102,"username":"manasa","city":"Hyderabad"},
{"userid":103,"username":"keerthana","city":"Vijayawada"},
{"userid":104,"username":"charitha","city":"Hyderabad"},
{"userid":105,"username":"vihitha","city":"banglore"},
{"userid":106,"username":"Sruthi","city":"Hyderabad"},
{"userid":107,"username":"Rita","city":"banglore"},
{"userid":108,"username":"Akash","city":"Hyderabad"},
{"userid":109,"username":"Rahul","city":"banglore"},
];
}
