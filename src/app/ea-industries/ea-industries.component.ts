import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ea-industries',
  templateUrl: './ea-industries.component.html',
  styleUrls: ['./ea-industries.component.css']
})
export class EaIndustriesComponent implements OnInit {

  constructor() { }


  industries = [
    {
      image: 'code.jpeg',
      title: 'Smart Contract',
      bio: 'Financing Solar Installations',
      problems: [
        {
          name: 'Existing system is chain of intermediaries'
        },
        {
          name: 'Difficult and risky to finance on your own'
        }
      ],
      solutions: [
        {
          name: 'Running capital raise and repayment through blockchain'
        },
        {
          name: 'Assemble a solar investment community to run the platform'
        },
        {
          name: 'Individuals earn more from their capital'
        }
      ]
    },
    {
      image: 'healthcare.jpeg',
      title: 'The Old Way',
      bio: 'Funding For Installations',
      problems: [
        {
          name: 'Finance industry dictates most terms'
        },
        {
          name: 'Capital takes extended period to arrive'
        }
      ],
      solutions: [
        {
          name: 'Leveling playing field for installers with crowdfunding'
        },
        {
          name: 'Financers become personally invested in solar projects'
        },
        {
          name: 'Cryptocurrency capital arrives same-day'
        }
      ]
    },
    {
      image: 'analytics.jpg',
      title: 'Due Diligence',
      bio: 'Incentivizing Verification',
      problems: [
        {
          name: 'Financial due diligence can be expensive'
        },
        {
          name: 'Investors skeptical of non-verified projects'
        }
      ],
      solutions: [
        {
          name: 'Curated registry managed by tokens'
        },
        {
          name: 'Verifiers compensated directly through economics of token model'
        },
        {
          name: 'Verifiers are incentivized to increase value of network tokens and the registry'
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
