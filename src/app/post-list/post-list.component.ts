import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from "../services/post.service";
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {MessageService} from "../services/message.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Array<any> = [];
    postToDelete = null;
    message = null;
    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private postService: PostService, private messageService: MessageService) {
        this.message = this.messageService.message;
    }

    ngOnInit() {
        this.postService.query()
            .subscribe(data => this.posts = data)
    }

    /*destroy(id, index) {
     if (confirm('Deseja excluir este post?')) {
     this.postService.destroy(+id).subscribe(() => {
     this.posts.splice(index, 1);
     });
     }
     }*/

    destroy() {
        this.postService.destroy(+this.postToDelete.id).subscribe(() => {
            const index = this.posts.indexOf(this.postToDelete);
            this.posts.splice(index, 1);
            this.modal.close();
        });
    }

    openModal(post) {
        this.postToDelete = post; //ciclo de digestão do angular
        this.modal.open();
    }
}
