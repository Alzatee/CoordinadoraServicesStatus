//Importaciones cómunes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes
import { LogoCoordinadoraComponent } from '@shared/components/logo-coordinadora/logo-coordinadora.component';

@NgModule({
    declarations: [
        LogoCoordinadoraComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        LogoCoordinadoraComponent
    ]
  })

export class SharedModule {}