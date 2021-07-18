//Importaciones cómunes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes
import { LogoCoordinadoraComponent } from '@shared/components/logo-coordinadora/logo-coordinadora.component';
import { ModalLoadComponent } from './components/modal-load/modal-load.component';

@NgModule({
    declarations: [
        LogoCoordinadoraComponent,
        ModalLoadComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        LogoCoordinadoraComponent,
        ModalLoadComponent
    ]
  })

export class SharedModule {}