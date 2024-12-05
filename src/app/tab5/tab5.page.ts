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
  faqs = [
    {
      pregunta: '¿Como registro mi ingreso?',
      respuesta: 'Puedes escanear el código QR con la cámara de tu dispositivo o usando la función de escaneo integrada en la aplicación. Esto te llevará directamente a la página de detalles y reserva de la parcela.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿Qué hago si el código QR no funciona?',
      respuesta: 'Asegúrate de que la cámara esté enfocando correctamente el QR. Si el problema persiste, verifica si tienes conexión a internet o utiliza la búsqueda manual en la aplicación.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿Puedo reservar una parcela sin escanear el QR?',
      respuesta: 'Sí, puedes buscar y reservar parcelas manualmente desde la sección "Explorar Parcelas" de la aplicación.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿Cómo realizo el pago del alquiler?',
      respuesta: 'Una vez seleccionada la parcela, el sistema te guiará para realizar el pago de forma segura mediante tarjeta de crédito, débito, o métodos de pago locales.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿Cómo obtengo asistencia si tengo problemas con una reserva?',
      respuesta: 'Puedes contactar a soporte desde la sección "Ayuda" de la aplicación o enviar un correo a soporteParcelas@gmail.com.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿La reserva incluye servicios adicionales?',
      respuesta: 'Dependerá de la parcela seleccionada. Algunos lugares ofrecen servicios como electricidad, agua, y Wi-Fi. Esto estará especificado en la descripción.',
      mostrarRespuesta: false,
    },
    {
      pregunta: '¿Es seguro alquilar parcelas por medio de esta aplicación?',
      respuesta: 'Sí, todos los pagos y reservas se realizan a través de una plataforma segura, y los datos de los usuarios están protegidos.',
      mostrarRespuesta: false,
    },
  ];

  toggleAnswer(faq: any) {
    faq.mostrarRespuesta = !faq.mostrarRespuesta;
  }
}