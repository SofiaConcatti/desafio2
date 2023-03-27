import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';

//IMPORTO EL PIPE CREADO
import { AprobadoPipe } from './alumno-lista/aprobado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutComponent,
    SidebarComponent,
    ContentareaComponent,
    AlumnoListaComponent,
    AprobadoPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
