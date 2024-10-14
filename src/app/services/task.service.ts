import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [
    {
      id: 1,
      title: 'Build a toolbar component',
      content: 'In this challenge, you’ll build a toolbar like you see on many websites that have the title of the site and navigation links. The title of the site will be passed into the component, and the site links will be nested within it. The title should be on the left side and 3-4 links should go on the right side. You can use popular sites like Google or Gmail for the links. For this challenge, you’ll use [ng-content] and [@Input()].'
    },
    {
      id: 2,
      title: 'Build an Angular card component',
      content: 'All sorts of apps use cards to display content that repeats. You often see them on mobile apps and websites. For this challenge, build a card that accepts a title, subtitle, and icon. It should also accept a nested footer and body content. You’ll need to use [ng-content] , [@Input()], [ngIf], and dynamic class binding to complete this challenge.'
    },
    {
      id: 3,
      title: 'Build an accordion',
      content: 'Accordions, components with one or more expandable sections, help save space in UI design. If you’re working on the front-end of an application, you’ll use accordions a lot. For this challenge, your accordion will accept a list and render it. The content in your list will include a title, a body, and an icon to open and close the accordion. You’ll use [ng-content], [@Input()], [ngFor], and dynamic class binding, and you’ll also implement a click handler.'
    },
    {
      id: 4,
      title: 'Build a credit card formatter',
      content: 'If you’re working with large numbers, like credit cards that have 16 digits, it’s easier for people to read them when they’re formatted. So for this challenge, try creating a pipe in Angular that will take a credit card number as a string and return the number with dashes between each set of characters. Only consider 16-digit numbers as valid and place the dash between every four digits. Your code should return an error if a number was entered that doesn’t have 16 characters. For this challenge, you will use [@Pipe()] and [PipeTransform].'
    },
    {
      id: 5,
      title: 'Build a star rating component',
      content: 'In this challenge, you’ll build a star rating component that accepts a value of 0-5, including half values like 4.5. The component should render the correct amount of stars, including empty stars and half stars. You’ll use [@Component()], [@Input()], [ngFor], and [ngIf].'
    },
    {
      id: 6,
      title: 'Create an Angular pipe that sorts',
      content: 'Create a pipe that accepts an array of strings and a sort direction value of either (asc) or (desc). If there isn’t a sort direction value, simply return the original list, and if the value to sort isn’t an array, throw an error. For this challenge, you’ll use [@Pipe()] and [PipeTransform].'
    },
    {
      id: 7,
      title: 'Detect a dirty form',
      content: 'The first step in this challenge is to create a form. Then, build a form guard that will ask the user if they want to continue without saving if the form is dirty (i.e., the value of the form has changed). You’ll use [@Injectable()] and [CanDeactivate] to complete this challenge.'
    },
    {
      id: 8,
      title: 'Create a bottom sheet component',
      content: 'In this challenge, build a bottom sheet component that supports whatever control you choose. Here you’ll be using [@Component()], [ng-content], (click), and dynamic class binding.'
    },
    {
      id: 9,
      title: 'Create a loader',
      content: 'When someone is waiting for data to load on a website, it’s helpful to let them know that the process has started. It’s also good to keep them informed while the process is still happening. The most common way to do this is with a spinning loader. So for this challenge, create a loader that can accept both a graphic for a spinning loader and simple text. You’ll use [@Component()], [@Input()], [Enum], [ngSwitch], and [ngSwitchCase] to do this.'
    },
    {
      id: 10,
      title: 'Create a pop-up',
      content: 'Create a basic pop-up in Angular that is displayed by a click on another element, like a button. In this challenge, you’ll be using [@Component()], [@Input()], [ng-content], [fadeInOutAnimation], [ngIf], (click), [of()], [delay()], [pipe()], and [unsubscribe()].'
    }
  ];

  constructor() {}

  // pobierz wszystkie taski
  getTasks() {
    return this.tasks;
  }

  // pobierz taski po ID
  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }
}
