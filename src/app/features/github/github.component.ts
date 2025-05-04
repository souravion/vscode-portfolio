import { Component } from '@angular/core';
import { GitHubProfile, Repository } from './gihub.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [NgClass],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {
  githubProfile:GitHubProfile  = {
    username: 'souravion',
    repositories: 36,
    totalStars: 10
  };

  repos:Repository[] = [
    {
      name: '📦 Convert-String-to-Literals',
      isPrivate: false,
      description: 'A set of reusable Angular utilities to streamline component and state management.',
      language: 'TypeScript',
      stars: 2,
      url:'https://github.com/souravion/Convert-String-to-Literals',
    },
    {
      name: '📦 ng-route-logger',
      isPrivate: true,
      description: 'ng-route-logger is a simple and powerful Angular library that helps you track page navigation times inside your Angular application.',
      language: 'TypeScript',
      stars: 1,
      url:'https://github.com/souravion/ng-route-logger',
    },
    {
      name: '📦 console-color-log',
      isPrivate: true,
      description: 'The Colorful Console Text library provides utility functions for applying various text styles and colors to terminal/console output. ',
      language: 'TypeScript',
      stars: 89,
      url:'https://github.com/souravion/console-color-log',
    },
  ];
}
