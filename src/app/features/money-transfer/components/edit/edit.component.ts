import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params.id))
      .subscribe(console.log);
  }

}
