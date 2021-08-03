import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { HomeService } from 'src/app/services/home.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('testTemplate') testTemplateVar: TemplateRef<any> | undefined;
  posts: Post[] = [];

  constructor(
    private homeService: HomeService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getPosts();
  }
  
  ngAfterViewInit(){
    this.sendMessages();
  }

  getPosts(){
    this.homeService.getPosts$().subscribe(res=>{
      console.log(res);
      setTimeout(() => {
        this.posts = res;
      }, 3000);
    })
  }


  sendMessages(){
      this.messageService.send({data: this.testTemplateVar, from: "HomeComponent", to: "Sidebar"})
  }
}
