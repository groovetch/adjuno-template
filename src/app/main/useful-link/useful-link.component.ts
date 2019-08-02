import { Component, OnInit } from '@angular/core';
import { UsefulLink } from './useful-link.model';
import { UsefulLinkModalComponent } from './useful-link-modal/useful-link-modal.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-useful-link',
  templateUrl: './useful-link.component.html',
  styleUrls: ['./useful-link.component.scss']
})
export class UsefulLinkComponent implements OnInit {
  data: Array<UsefulLink> =[
    {
      //1
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    },
    {
      //2
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    },
    {
      //3
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    },  
    {
      //4
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    },
    {
      //5
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    },
    {
      //6
      GroupTitleName: 'Lorem ipsum dolor sit amet',
      LinkList:[
        {
          Description: 'Lorem ipsum dolor sit amet',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc consectetur',
          Link: 'https://www.adjuno.com/'
        },
        {
          Description: 'Nunc at lacus commodo, convallis tellus id, mollis orci',
          Link: 'https://www.adjuno.com/'
        }
      ],
      PublishTo: 'Supplier1'
    }
  ];
  
  
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }
  onNewItemClick(){
    this.dialogService
      .open(UsefulLinkModalComponent,{closeOnBackdropClick: false});
  }
}
