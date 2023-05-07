import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqImageUrl: string = 'https://images.pexels.com/photos/208494/pexels-photo-208494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  constructor() { }

  ngOnInit(): void {
  }

}
