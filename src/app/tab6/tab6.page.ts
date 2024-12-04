import { Component } from '@angular/core';
import { apiService } from '../api.service';
import { ParcelaI } from '../interfaces/parcela.interface';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
  
})
//Explorar
export class Tab6Page {
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
