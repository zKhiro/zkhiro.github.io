import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSkillTreeComponent } from './svg-skill-tree.component';

describe('SvgSkillTreeComponent', () => {
  let component: SvgSkillTreeComponent;
  let fixture: ComponentFixture<SvgSkillTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSkillTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSkillTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
