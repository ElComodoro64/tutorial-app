import { Routes } from '@angular/router';
import { Portada } from './secciones/portada/portada';
import { Justificacion } from './secciones/justificacion/justificacion';
import { Instalacion } from './secciones/instalacion/instalacion';
import { Primerospasos } from './secciones/primerospasos/primerospasos';
import { Utilizacion } from './secciones/utilizacion/utilizacion';
import { Funcionamiento } from './secciones/funcionamiento/funcionamiento';
import { Ejemplo } from './secciones/ejemplo/ejemplo';
import { Conclusiones } from './secciones/conclusiones/conclusiones';
import { Recursos } from './secciones/recursos/recursos';



export const routes: Routes = [  
    {
        path: '',
        component: Portada
    },    
    {
        path: 'justificacion',
        component: Justificacion
    },
    {
        path: 'instalacion',
        component: Instalacion
    },    
    {
        path: 'primerospasos',
        component: Primerospasos
    },    
    {
        path: 'utilizacion',
        component: Utilizacion
    },    
    {
        path: 'funcionamiento',
        component: Funcionamiento
    }          
    ,    
    {
        path: 'conclusiones',
        component: Conclusiones
    }
    ,    
    {
        path: 'recursos',
        component: Recursos
    }
    ,    
    {
        path: 'ejemplo',
        component: Ejemplo
    }
    
    
];
