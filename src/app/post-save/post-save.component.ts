import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
    selector: 'app-post-save',
    templateUrl: './post-save.component.html',
    styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {

    post = {
        id: null,
        title: '',
        body: ''
    };

    constructor(private postService: PostService,
                private router: Router,
                private route: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.postService.find(+params['id'])
                    .subscribe(data => this.post = data);
            }
        });
    }

    save() {
        this.postService.save(this.post)
            .subscribe(() => {
                this.messageService.message = 'Post salvo com sucesso';
                this.router.navigate(['/posts'])
            });
    }
}
