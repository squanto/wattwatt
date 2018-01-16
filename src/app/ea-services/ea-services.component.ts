import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-services',
  templateUrl: './ea-services.component.html',
  styleUrls: ['./ea-services.component.css']
})
export class EaServicesComponent implements OnInit {

  constructor() { }

  services = [
    {
      image: 'solarpanel.svg',
      service: 'Smart Contract Vehicle',
      feature: [
        {
          item: 'Average return 7%-10%',
        },
        {
          item: 'Analysis of potential bottlenecks',
        },
        {
          item: 'To-be state modeling',
        }
      ],
    },
    {
      image: 'financing.svg',
      service: 'Secure Microfinancing',
      feature: [
        {
          item: 'Digital process monitoring',
        },
        {
          item: 'Real-time anamoly detection',
        },
        {
          item: 'Ongoing root-cause analytics',
        }
      ],
    },
    {
      image: 'growth.svg',
      service: 'Rapid Solution Authoring',
      feature: [
        {
          item: 'Bottleneck specific solution development',
        },
        {
          item: 'Rapid development methodology',
        },
        {
          item: 'Measured process improvements',
        }
      ],
    }
  ];
  ngOnInit() {
  }

}
