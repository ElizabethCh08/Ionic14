import { Component, OnInit } from '@angular/core';
import { Pastel } from 'src/app/service/Pastel';
import { ActivatedRoute } from '@angular/router';
import { ConsumogitService } from '../../service/consumogit.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  pasteles: Pastel[] = []
  pastel: Pastel[] = []
  dato: any


  constructor(private route: ActivatedRoute, private serviceGit: ConsumogitService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(r => {
      console.log(r.get('id'))
      this.dato = r.get('id')
    })
    this.obetenerPasteles()
  }

  obetenerPasteles() {
    this.serviceGit.getPasteles().subscribe(r => {
      this.pasteles = r
      this.pastel.push(this.pasteles[this.dato-1])
      console.log(this.pastel)
    })
  }

  

}
