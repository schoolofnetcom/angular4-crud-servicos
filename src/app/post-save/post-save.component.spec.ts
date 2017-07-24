import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSaveComponent } from './post-save.component';

describe('PostSaveComponent', () => {
  let component: PostSaveComponent;
  let fixture: ComponentFixture<PostSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
