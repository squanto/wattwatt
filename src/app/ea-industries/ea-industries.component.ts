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
      image: 'healthcare.jpeg',
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
          name: 'Running capital and repayment through blockchain'
        },
        {
          name: 'Putting together a solar investment community'
        },
        {
          name: 'Individuals make more from their capital'
        }
      ]
    },
    {
      image: 'code.jpeg',
      title: 'The Old Way',
      bio: 'Funding For Installations',
      problems: [
        {
          name: 'Finance industry can dictate terms'
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
          name: 'Due diligence is expensive for finance'
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
          name: 'Verifiers compensated for convincing the community'
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
