import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [routerTransition()]
})
export class InicioComponent implements OnInit {



  constructor(private alertService: AlertService) { }

  ngOnInit() {

  }

  showAlerta(type){
    if(type==='e')
      this.alertService.error("error");
    else if(type==='s')
    this.alertService.success("Todo OK");
  }

}
