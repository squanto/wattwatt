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
          item: 'Control over your ability to transfer without intermediaries',
        },
        {
          item: 'Small transfer times with no cencorship possible',
        },
        {
          item: 'Immutability if desired',
        }
      ],
    },
    {
      image: 'growth.svg',
      service: 'Secure Crowdfunding',
      feature: [
        {
          item: 'Contracts built by experienced software team',
        },
        {
          item: 'Highly scalable to handle growing investment demand',
        },
        {
          item: 'Automated repayment and low cost service',
        }
      ],
    },
    {
      image: 'financing.svg',
      service: 'Verification in Investors Interest',
      feature: [
        {
          item: 'WattWatt team composed of experienced professionals',
        },
        {
          item: 'Decentralization allows for community verification',
        },
        {
          item: 'Token economics built to align communitys interest with each other',
        }
      ],
    }
  ];
  ngOnInit() {
  }

}
