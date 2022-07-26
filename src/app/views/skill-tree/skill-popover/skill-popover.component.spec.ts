import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPopoverComponent } from './skill-popover.component';

describe('SkillPopoverComponent', () => {
  let component: SkillPopoverComponent;
  let fixture: ComponentFixture<SkillPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPopoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
