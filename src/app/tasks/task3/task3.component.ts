import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})

export class Task3Component implements OnInit {
  diety = [
    {
      title: 'Dieta lekkostrawna',
      body: 'Dieta stosowana w celu odciążenia układu pokarmowego. Zalecane są lekkie, gotowane potrawy, unika się potraw smażonych, ostrych przypraw i produktów wzdymających. Dieta lekkostrawna jest często zalecana po operacjach, w trakcie chorób przewodu pokarmowego, takich jak zapalenie żołądka, wrzody żołądka czy zapalenie trzustki. Ogranicza się tłuszcze zwierzęce oraz ciężkostrawne produkty, takie jak fasola, kapusta czy cebula. Ważne jest spożywanie potraw w małych porcjach, regularnie, co pozwala odciążyć żołądek i jelita. Zaleca się również picie dużej ilości wody oraz herbat ziołowych. Typowe potrawy w tej diecie to: lekkie zupy, gotowane mięso drobiowe, ryż, gotowane warzywa, banany, jabłka, biszkopty i chude nabiały.',
      icon: '▼'
    },
    {
      title: 'Dieta wegetariańska',
      body: 'Eliminacja mięsa i produktów mięsnych. Stosowana z powodów zdrowotnych, etycznych lub ekologicznych. Istnieją różne odmiany, jak lakto- czy owowegetarianizm. Wegetarianie spożywają produkty pochodzenia roślinnego, takie jak warzywa, owoce, zboża, nasiona, orzechy oraz rośliny strączkowe. Dieta ta może przynosić wiele korzyści zdrowotnych, w tym zmniejszenie ryzyka chorób serca, otyłości oraz cukrzycy typu 2. Aby zaspokoić potrzeby białkowe organizmu, wegetarianie często sięgają po produkty takie jak tofu, tempeh, soczewica czy ciecierzyca. W diecie wegetariańskiej ważne jest również dbanie o odpowiednie spożycie witamin, takich jak witamina B12, która znajduje się głównie w produktach pochodzenia zwierzęcego. Można ją uzupełniać suplementami lub produktami wzbogaconymi.',
      icon: '▼'
    },
    {
      title: 'Dieta wegańska',
      body: 'Całkowite wykluczenie produktów pochodzenia zwierzęcego. Składa się z produktów pochodzenia roślinnego, takich jak warzywa, owoce, rośliny strączkowe. Weganizm często jest związany z dbałością o środowisko i dobrostan zwierząt. Weganie unikają również produktów pochodnych, takich jak mleko, jajka, miód czy żelatyna. W diecie wegańskiej ważne jest zapewnienie odpowiedniej ilości białka, żelaza, wapnia oraz kwasów omega-3, które w diecie tradycyjnej często pochodzą z produktów zwierzęcych. Weganie mogą uzupełniać te składniki, sięgając po rośliny strączkowe, orzechy, nasiona, mleka roślinne, a także suplementy witaminy B12 i D. Popularne potrawy w diecie wegańskiej to: sałatki warzywne, hummus, potrawy z tofu i tempeh, smoothie owocowe, a także różnego rodzaju roślinne zamienniki mięsa.',
      icon: '▼'
    },
    {
      title: 'Dieta ketogeniczna',
      body: 'Dieta bogata w tłuszcze, umiarkowana w białka, bardzo uboga w węglowodany. Stosowana w celu redukcji wagi lub w leczeniu padaczki. Dieta ketogeniczna polega na wprowadzeniu organizmu w stan ketozy, gdzie głównym źródłem energii są tłuszcze, a nie glukoza. W tej diecie należy ograniczyć spożycie produktów bogatych w węglowodany, takich jak pieczywo, makarony, ryż czy ziemniaki, a zamiast tego spożywać produkty takie jak mięso, jaja, tłuste ryby, awokado, orzechy i oleje roślinne. Typowe potrawy to: jajecznica na maśle, steki, sałatki z oliwą z oliwek, koktajle z mleka kokosowego i jagód. Stosowanie diety keto może prowadzić do szybkiej utraty wagi, ale jej długoterminowe efekty i wpływ na zdrowie są nadal przedmiotem badań.',
      icon: '▼'
    },
    {
      title: 'Dieta śródziemnomorska',
      body: 'Dieta bogata w oliwę z oliwek, ryby, owoce morza, warzywa, orzechy i pełnoziarniste produkty. Jest znana ze swoich korzyści zdrowotnych, szczególnie dla serca. Tradycyjna dieta śródziemnomorska opiera się na spożywaniu dużej ilości warzyw, owoców, roślin strączkowych oraz pełnoziarnistych produktów. Głównym źródłem tłuszczu w tej diecie jest oliwa z oliwek, która zawiera zdrowe, jednonienasycone kwasy tłuszczowe. Często spożywa się ryby i owoce morza, które są bogate w kwasy omega-3, wspierające zdrowie serca. Ważną częścią tej diety jest również umiarkowane spożycie czerwonego wina. Badania sugerują, że dieta śródziemnomorska może obniżać ryzyko chorób serca, cukrzycy, a także wspierać zdrowe starzenie się.',
      icon: '▼'
    },
    {
      title: 'Dieta bezglutenowa',
      body: 'Stosowana w przypadku celiakii lub nadwrażliwości na gluten. Polega na wykluczeniu glutenu, czyli białka zawartego w pszenicy, jęczmieniu i życie. Osoby cierpiące na celiakię muszą ściśle unikać produktów zawierających gluten, aby zapobiec uszkodzeniom jelit. W diecie bezglutenowej można spożywać takie produkty jak ryż, ziemniaki, kukurydza, kasza gryczana, a także specjalne produkty bezglutenowe dostępne w sklepach. Warto jednak pamiętać, że dieta bezglutenowa nie jest automatycznie zdrowsza, szczególnie jeśli jest oparta na wysoko przetworzonych produktach. Istnieje ryzyko niedoborów błonnika, witamin i minerałów, dlatego osoby na diecie bezglutenowej powinny dbać o zróżnicowane odżywianie i ewentualnie stosować suplementy.',
      icon: '▼'
    }
  ];
  

  ngOnInit(): void {
  }

}
