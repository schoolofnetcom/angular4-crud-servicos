import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import {PostSaveComponent} from './post-save/post-save.component';
import {ButtonComponent} from './bootstrap/button/button.component';
import {FormsModule} from "@angular/forms";
import {GlyphComponent} from './bootstrap/glyph/glyph.component';
import {ModalComponent} from './bootstrap/modal/modal.component';
import {AlertComponent} from './bootstrap/alert/alert.component';
import {MessageService} from "./services/message.service";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: PostListComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'posts/create', component: PostSaveComponent},
    {path: 'posts/:id/edit', component: PostSaveComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostSaveComponent,
        ButtonComponent,
        GlyphComponent,
        ModalComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
    providers: [PostService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
