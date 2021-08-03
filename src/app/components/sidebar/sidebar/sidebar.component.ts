import { Component, OnInit, TemplateRef } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  template: TemplateRef<any> | undefined;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
      this.observeMessages();
  }

  observeMessages(){
    this.messageService.message
    .subscribe((res: any)=>{
      console.log(res);
      if(res.to === 'Sidebar'){
        this.template = res.data;
      }
    });
  }

}
