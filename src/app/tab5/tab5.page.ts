import { Component } from '@angular/core';
import { apiService } from '../api.service';
import { ParcelaI } from '../interfaces/parcela.interface';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
  
})
//Explorar
export class Tab5Page {
  parcelas: ParcelaI[] = [];
  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.apiService.getAllParcelas().subscribe({
      next: (response) => {
        if (response.ok) {
          //objeto respose ok entones muestra el obj completo
          console.log(response)
          this.parcelas = response.result.data
          console.log(this.parcelas)
        } else {
          console.error('Error en la respuesta:', response.msg);
        }
      },
      error: (err) => {
        console.error('Error al obtener reservas:', err);
      },
    });
  }
}
