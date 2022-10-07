import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipesComponent } from "./components/pipes/pipes.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'changeNumber', component: ChangeNumberComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'parentData', component: ParentDataComponent},
    {path: 'list/:id', component: ItemDetailComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}