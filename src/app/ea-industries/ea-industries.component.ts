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
      title: '-',
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
          name: 'Run capital through smart contracts'
        },
        {
          name: 'Crowdfund to access low cost capital'
        },
        {
          name: 'Crowdsource due diligence through enganged verifiers'
        }
      ]
    },
    {
      image: 'code.jpeg',
      title: '-',
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
          name: 'Crowdfunding levels playing field'
        },
        {
          name: 'Causes financers to become emotionally invested in solar'
        },
        {
          name: 'Cryptocurrency arrives same-day'
        }
      ]
    },
    {
      image: 'analytics.jpg',
      title: '-',
      bio: 'Incentivizing Verification',
      problems: [
        {
          name: 'Due diligence can be an expensive aspect of finance '
        },
        {
          name: 'Investors need to know what projects are not worthwhile'
        }
      ],
      solutions: [
        {
          name: 'Token curated registry managed by invested individuals'
        },
        {
          name: 'Verifiers will '
        },
        {
          name: 'solution 3'
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
